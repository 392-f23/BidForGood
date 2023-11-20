import { Button, Card, Grid, Stack } from "@mui/material";
import React from "react";
import "./AuctionItemCard.css";

export const AuctionItemCard = ({ handleOpenBid, auctionItemInfo }) => {
  const title = auctionItemInfo.Name;
  const numberOfBids = auctionItemInfo.NumberBids;
  const currentBid = auctionItemInfo.CurrentBid;
  const itemImage = auctionItemInfo.Image;

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
            <div>Current bid: ${currentBid} </div>
            <div># of bids: {numberOfBids} </div>
            <Button
              className="mui-btn"
              variant="contained"
              onClick={() => handleOpenBid(auctionItemInfo)}
            >
              Place bid
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};
