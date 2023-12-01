import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Stack } from "@mui/system";
import { AuctionInfoBox } from "../AuctionPage/AuctionInfoBox";
import { OrgItemCard } from "./OrgItemCard";
import InfoDialog from "../Dialog/Dialog";
import { BidHistory } from "../BidHistory/BidHistory";
import OrgBanner from "./OrgBanner";
import EditIcon from '@mui/icons-material/Edit';

export const CurrentAuctionPage = () => {
  const auctionInfo = {
    id: "2aec2f85-e7a1-4e09-a620-44edee904837",
    ActiveAuctions: 14,
    AuctionName: "PuppiesRUs Winter Woof Drive",
    ClosedAuctions: 0,
    Description: "Help PuppiesRUs raise money for local animals!",
    EndDate: "12/20/23",
    Goal: 6000,
    OrganizationName: "PuppiesRUs",
    PhoneNumber: "(847) 492-0990",
    StartDate: "11/10/23",
    TotalRaised: 3215,
    Logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYVYubg0FIFviSxRsZmhWUNqM7ZDAv0PyAL8NOH9cHpg&s"
  };

  const listings = {
    "f43b53e1-1c01-44fd-966f-69d9b5121a09": {
      "id": "f43b53e1-1c01-44fd-966f-69d9b5121a09",
      "Name": "Dog Santa Hat",
      "AuctionId": "2aec2f85-e7a1-4e09-a620-44edee904837",
      "Image":
        "https://www.wavy.com/wp-content/uploads/sites/3/2022/12/Dog-Christmas-Toy.jpg?w=320&h=180&crop=1",
      "Status": "Active",
      "Bids": [
        {
          "bidAmount": 100,
          "id": "109daa07-bb04-497e-a95c-91b40cb4670b",
          "time": "2023-12-01T05:19:21.579Z",
          "userID": "CiGHEVgdQJW1l4WwLXBvaNwssNG3"
        },
        {
          "bidAmount": 120,
          "id": "11cfe137-44f2-490f-b36a-b20f4f5c71ce",
          "time": "2023-12-01T05:19:59.027Z",
          "userID": "CiGHEVgdQJW1l4WwLXBvaNwssNG3"
        }
      ],
    },
    "c9053303-7005-4ec1-ba1c-c182j7bc0347": {
      "id": "c9053303-7005-4ec1-ba1c-c182j7bc03479",
      "Name": "Dog Bone Toys",
      "AuctionId": "2aec2f85-e7a1-4e09-a620-44edee904837",
      "Image":
        "https://ohmypawd.com/cdn/shop/products/3-pack-naughty-and-nice-bones-dog-toys-726266_5000x.jpg?v=1693296179",
      "Status": "Active",
      "Bids": [
        {
          "bidAmount": 110,
          "id": "11cfe137-74f2-490f-b36a-b20f4f5c71ce",
          "time": "2023-12-01T04:18:59.027Z",
          "userID": "mirhVRjyZmVHtFrTBuahgVhcEui2"
        }
      ],
    },
    "3d903bcf-b0bd-47b3-9560-96a7f3f02467": {
      "id": "3d903bcf-b0bd-47b3-9560-96a7f3f02467",
      "Name": "Santa Dog Thing",
      "AuctionId": "2aec2f85-e7a1-4e09-a620-44edee904837",
      "Image": "https://www.pawzroad.com/cdn/shop/products/1500-8_0e709301-d678-445f-974b-1acfa836b8f0_300x300.jpg?v=1664520249",
      "Status": "Active",
      "Bids": [
        {
          "bidAmount": 120,
          "id": "11cfe137-44f2-490f-b36a-b20f4f5c71ce",
          "time": "2023-12-01T05:19:59.027Z",
          "userID": "CiGHEVgdQJW1l4WwLXBvaNwssNG3"
        },
        {
          "bidAmount": 140,
          "id": "3db30313-39f5-4eb3-be92-46a19f2f255e",
          "time": "2023-12-01T09:41:55.277Z",
          "userID": "64pjzJKBfneVeIcuga09gyFSSii2"
        },
        {
          "bidAmount": 310,
          "id": "fe143900-c605-4445-b4a2-cb1a665ef168",
          "time": "2023-12-01T10:00:47.954Z",
          "userID": "M0XOdSQUqoPNA5v1H1WIj1AyGV93"
        }
      ],
    }
  }
  
  const [openBidHistory, setOpenBidHistory] = useState(false);

  const [auctionItems, setAuctionItems] = useState(listings);

  const auctionTitle = auctionInfo.AuctionName;
  const auctionStart = auctionInfo.StartDate;
  const auctionEnd = auctionInfo.EndDate;

  const [currentItemID, setCurrentItemID] = useState("");

  const [currentItem, setCurrentItem] = useState(listings["3d903bcf-b0bd-47b3-9560-96a7f3f02467"]);

  const handleClickOpenBidHistory = () => {
    setOpenBidHistory(true);
  };

  const handleCloseBidHistory = () => {
    setOpenBidHistory(false);
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
        title="Bid History"
        open={openBidHistory}
        handleClose={handleCloseBidHistory}
      >
        <BidHistory currentItem={currentItem} />
      </InfoDialog>
      <Stack gap={1} style={{ textAlign: "center", marginBottom: 20 }}>
        <div className="title-div">
          <h2 style={{ marginBottom: 0, marginTop: 0 }}>{auctionTitle}</h2>
          <EditIcon aria-label="Edit Auction Info" className="edit-btn" />
        </div>
        <p style={{ margin: 0 }}><i>{auctionInfo.Description}</i></p>
        <p style={{ margin: 0 }}>
          Runs {auctionStart} through {auctionEnd}
        </p>
      </Stack>
      <AuctionInfoBox
        auctionInfo={auctionInfo}
        timeLeft={formatTime(timeRemaining)}
      />
      <Stack gap={0.5} mb={"5rem"} sx={{ minWidth: 0 }}>
        {Object.values(auctionItems).map((x, index) => (
          <OrgItemCard
            key={index}
            auctionItemInfo={x}
            setCurrentItemID={setCurrentItemID}
            setCurrentItem={setCurrentItem}
            handleClickOpenBidHistory={handleClickOpenBidHistory}
          />
        ))}
      </Stack>

      <OrgBanner currentPage={"org_current_auction"} />
    </Container>
  );
};

