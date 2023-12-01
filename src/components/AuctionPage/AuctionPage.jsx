import React, { useEffect, useState } from "react";
import { Button, Container } from "@mui/material";
import { Stack } from "@mui/system";
import { useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import { AuctionInfoBox } from "./AuctionInfoBox";
import { AuctionItemCard } from "../AuctionItemCard/AuctionItemCard";
import InfoDialog from "../Dialog/Dialog";
import DialogContentText from "@mui/material/DialogContentText";
import { auctionItemData } from "../../data/auctionItems";
import { useDbData, useDbUpdate } from "../../utilities/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BidHistory } from "../BidHistory/BidHistory";
import { v4 as uuidv4 } from "uuid";


const AuctionPage = () => {
  const auth = getAuth();
  const [uid, setUid] = useState("");
  const auctionInfo = useLocation().state;
  const [openBid, setOpenBid] = useState(false);
  const [openBidHistory, setOpenBidHistory] = useState(false);

  const [auctionItems, setAuctionItems] = useState([]);
  const [currentItemID, setCurrentItemID] = useState("");
  const [items_list, error1] = useDbData(`/listings`);
  const [currentItem, error2] = useDbData(`/listings/${currentItemID}`);
  const [updateItem, result2] = useDbUpdate(`/listings/${currentItemID}`);
  const [currentAuction, error3] = useDbData(`/auctions/${auctionInfo.id}`);
  const [updateAuction, result3] = useDbUpdate(`/auctions/${auctionInfo.id}`);
  const [usersData, error9] = useDbData("/users");

  const [newBidValue, setNewBidValue] = useState(null);
  const [error, setError] = useState(false);

  // Update User
  // Update Listing

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        console.log("auth errors out.");
      }
    });
    return () => unsubscribe();
  }, []);

  const [updateUser, result4] = useDbUpdate(`/users/${uid}`);

  // console.log(userData)
  // const [userData, result] = useDbData("/users/"+ user ?user.uid: "");
  // const [updateUserData, error10] = useDbUpdate("/users/"+user && user.uid?user.uid: "");

  useEffect(() => {
    if (items_list) {
      setAuctionItems(
        Object.values(items_list).filter((x) => x.AuctionId === auctionInfo.id)
      );
    }
  }, [items_list]);

  const setBidState = (state) => {
    if (state >= getHighestBid(currentItem)) {
      setError(false);
      setNewBidValue(state);
    } else {
      setError(true);
    }
  };

  const auctionTitle = auctionInfo.AuctionName;
  const auctionLogo = auctionInfo.Logo;
  const orgName = auctionInfo.OrganizationName;
  const auctionStart = auctionInfo.StartDate;
  const auctionEnd = auctionInfo.EndDate;

  const handleClickOpenBid = () => {
    setOpenBid(true);
  };

  const handleCloseBid = () => {
    setOpenBid(false);
  };

  const handleClickOpenBidHistory = () => {
    setOpenBidHistory(true);
  };

  const handleCloseBidHistory = () => {
    setOpenBidHistory(false);
  };

  const getHighestBid = (listing) => {
    const bids = listing.Bids;
    let highestBid = 0;

    if (bids) {
      bids.forEach((bid) => {
        highestBid = Math.max(highestBid, bid.bidAmount);
      });
    }

    return highestBid;
  };

  const placeBid = () => {
    if (Number(newBidValue) > getHighestBid(currentItem)) {
      setError(false);
      let oldCurrentItem = currentItem;
      let oldCurrentAuction = currentAuction;
      oldCurrentAuction.TotalRaised =
        oldCurrentAuction.TotalRaised +
        (newBidValue - getHighestBid(currentItem));

      let currentBids = oldCurrentItem.Bids || [];
      const now = new Date();
      let newBid = {
        userID: uid,
        bidAmount: Number(newBidValue),
        time: now,
        id: uuidv4()
      }
      currentBids.push(newBid);
      updateItem({Bids: currentBids});


      // Update user
      let currentUser = usersData[uid];
      let currentMyBids = currentUser.myBids || [];
      currentMyBids.push({
        listingID: oldCurrentItem.id,
        bidID: newBid.id,
        bidAmount: Number(newBidValue),
      });
      // currentUser.myBids = currentMyBids;

      updateUser({ myBids: currentMyBids });

      updateAuction(oldCurrentAuction);
      setNewBidValue(newBidValue);

      // let userBids = userData.bids || [];
      // userBids.push(auctionInfo.id)
      // // updateUserData({bids: userBids});

      // console.log("working")

      handleCloseBid();
    } else {
      setError(true);
    }
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const endTime = new Date(auctionEnd).getTime();
    return Math.max(0, endTime - now);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function formatTime(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  return (
    <Container style={{ margin: 0, padding: 0 }}>
      <InfoDialog
        title={
          "Place Bid - Highest Bid ($" +
          (currentItem ? getHighestBid(currentItem) : 0) +
          ")"
        }
        open={openBid}
        handleClose={handleCloseBid}
      >
        <div>
          <Stack style={{ maxWidth: "15rem" }}>
            <div style={{ display: "flex", marginBottom: "1rem" }}>
              ${" "}
              <input
                onChange={(e) => setBidState(e.target.value)}
                defaultValue={currentItem ? currentItem.CurrentBid : 0}
                type="number"
                style={{ marginLeft: "0.2rem" }}
              ></input>
            </div>
            <Button
              onClick={() => placeBid()}
              className="mui-btn"
              variant="contained"
            >
              Place Bid
            </Button>
            <div>
              {error && (
                <div style={{ color: "red" }}>
                  ERROR: Bid amount must exceed current bid.
                </div>
              )}
            </div>
          </Stack>
        </div>
      </InfoDialog>
      <InfoDialog
        title="Bid History"
        open={openBidHistory}
        handleClose={handleCloseBidHistory}
      >
        <BidHistory currentItem={currentItem} />
      </InfoDialog>
      <Stack gap={1} style={{ textAlign: "center", marginBottom: 20 }}>
        <h2 style={{ marginBottom: 0, marginTop: 0 }}>{orgName}</h2>
        <div>EVENT | {auctionTitle.toUpperCase()}</div>
        <div>
          Runs {auctionStart} through {auctionEnd}
        </div>
      </Stack>
      <AuctionInfoBox
        auctionInfo={auctionInfo}
        timeLeft={formatTime(timeRemaining)}
      />
      <Stack gap={0.5} mb={"5rem"} sx={{ minWidth: 0 }}>
        {auctionItems.map((x, index) => (
          <AuctionItemCard
            key={index}
            handleOpenBid={handleClickOpenBid}
            auctionItemInfo={x}
            setCurrentItemID={setCurrentItemID}
            handleClickOpenBidHistory={handleClickOpenBidHistory}
          />
        ))}
      </Stack>

      <Banner currentPage={"explore_feed"} />
    </Container>
  );
};

export default AuctionPage;
