import { Button, Card, Grid, Stack } from "@mui/material";
import React from "react";
import teddy from '../../images/teddy.jpg';

export const AuctionItemCard = () => {
  return (
    <Card style={{padding: 20}}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
            <img height="100" src={teddy}>
            </img>
        </Grid>
        <Grid item xs={7} >
          <Stack gap={2}>
            <div style={{fontWeight: "bold"}}>Samsung Galaxy </div>
            <div>Current bid: $128  </div>
            <div># of bids: 11 </div>
            <Button variant="contained">
                Place bid
            </Button>
            </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};
