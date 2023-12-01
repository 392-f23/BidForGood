import "./YourBids.css";
import Banner from "../Banner/Banner";
import { YourBidsCard } from "./YourBidsCard";
import { Button, Card, Grid, Stack, Container } from "@mui/material";
import React from "react";
import { useAuth, useDbData } from "../../utilities/firebase";
import { useEffect } from "react";
import { useState } from "react";

const YourBids = () => {
  const [user] = useAuth();
  const [allUsers, error1] = useDbData("/users");
  const [allListings, error2] = useDbData("/listings");
  const [myBids, setMyBids] = useState([]);
  const [currentUser, setCurrentUser] = useState();

  const getMyBids = (arrayOfIDs) => {
    let res = [];
    arrayOfIDs.map((x) => {
      res.push({
        ...allListings[x.listingID],
        bidAmount: x.bidAmount,
        auctionID: allListings[x.listingID].auctionID,
        bidID: x.bidID,
      });
    });

    setMyBids(res);
  };

  useEffect(() => {
    if (user && allUsers) {
      setCurrentUser(allUsers[user.uid]);
      getMyBids(allUsers[user.uid].myBids || []);
    }
  }, [user, allUsers]);

  return (
    <Container maxWidth="sm">
      <Stack className="bidstack">
        <h2>Your Bids</h2>
        <div></div>
        {myBids.length > 0 ? (
          myBids.map((x) => (
            <YourBidsCard
              key={x.bidID}
              bidID={x.bidID}
              listingID={x.id}
              auctionID={x.AuctionId}
              userID={user.uid}
              title={x.Name}
              numOfBids={x.Bids ? x.Bids.length : 0}
              bidAmount={x.bidAmount}
              Image={x.Image}
            />
          ))
        ) : (
          <div style={{ textAlign: "center" }}>
            You don't have any bids currently
            <img
              height="200"
              style={{ borderRadius: 20, marginTop: 20 }}
              src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg"
            ></img>
          </div>
        )}
      </Stack>
      <Banner currentPage={"your_bids"} />
    </Container>
  );
};

export default YourBids;
