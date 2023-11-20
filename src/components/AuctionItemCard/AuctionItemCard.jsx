import { Button, Card, Grid, Stack } from "@mui/material";
import React from "react";

export const AuctionItemCard = ({handleOpenBid, title, numberOfBids, currentBid, itemImage}) => {
  return (
    <Card style={{padding: 20}}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
            <img height="100" src={itemImage}>
            </img>
        </Grid>
        <Grid item xs={7} >
          <Stack gap={2}>
            <div style={{fontWeight: "bold"}}>{title}</div>
            <div>Current bid: ${currentBid} </div>
            <div># of bids: {numberOfBids} </div>
            <Button variant="contained" onClick={handleOpenBid}>
                Place bid
            </Button>
            </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};
