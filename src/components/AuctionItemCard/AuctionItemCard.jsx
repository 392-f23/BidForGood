import { Button, Card, Grid, Stack } from "@mui/material";
import React from "react";
import "./AuctionItemCard.css";
import { useAuth, useDbData, useDbUpdate } from "../../utilities/firebase";

export const AuctionItemCard = ({
  handleOpenBid,
  auctionItemInfo,
  setCurrentItemID,
  handleClickOpenBidHistory,
}) => {
  const title = auctionItemInfo.Name;
  const itemImage = auctionItemInfo.Image;
  const bids = auctionItemInfo.Bids;
  let highestBid = 0;

  bids.forEach((bid) => {
    highestBid = Math.max(highestBid, bid.bidAmount);
  });

  const openBidHistory = () => {
    setCurrentItemID(auctionItemInfo.id);
    handleClickOpenBidHistory();
  };
  const placeBid = () => {
    setCurrentItemID(auctionItemInfo.id);
    handleOpenBid();

    //  update users bids collection
    // {user: {bids: []}}
  };

  return (
    <Card className="auction-item-card" style={{ padding: 20 }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <div className="card-img-container">
            <img
              className="card-img"
              height="100"
              src={itemImage ? itemImage : "/BidForGood.png"}
            ></img>
          </div>
        </Grid>
        <Grid item xs={7}>
          <Stack gap={2}>
            <div style={{ fontWeight: "bold" }}>{title}</div>
            <div>Highest bid: ${highestBid}</div>
            <Button onClick={() => openBidHistory()}>
              {bids.length} {bids.length == 1 ? "bid" : "bids"}
            </Button>
            <Button
              className="mui-btn"
              variant="contained"
              onClick={() => placeBid()}
            >
              Place bid
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};
