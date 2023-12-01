import { Button, Card, Grid, Stack } from "@mui/material";
import React from "react";
import "../AuctionItemCard/AuctionItemCard.css";

export const OrgItemCard = ({
  auctionItemInfo,
  setCurrentItemID,
  setCurrentItem,
  handleClickOpenBidHistory,
}) => {
  const title = auctionItemInfo.Name;
  const itemImage = auctionItemInfo.Image;
  const bids = auctionItemInfo.Bids;
  let highestBid = 0;

  if (bids) {
    bids.forEach((bid) => {
      highestBid = Math.max(highestBid, bid.bidAmount);
    });
  }

  const openBidHistory = () => {
    setCurrentItemID(auctionItemInfo.id);
    setCurrentItem(auctionItemInfo);
    handleClickOpenBidHistory();
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
            <div style={{ fontWeight: "bold", fontSize: "20px" }}>{title}</div>
            <div>Highest bid: ${highestBid}</div>
            <Button
              className="see-bids-btn"
              style={{
                maxWidth: "80px",
                justifyContent: "flex-start",
                padding: "0px",
                color: "green"
              }}
              onClick={() => openBidHistory()}
            >
              {bids
                ? `${bids.length} ${bids.length == 1 ? "bid" : "bids"}`
                : "No bids"}
            </Button>
            <Button
              className="mui-btn"
              variant="contained"
              onClick={null}
            >
              Edit Item
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};
