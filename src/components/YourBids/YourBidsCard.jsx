import { Button, Card, Grid, Stack } from "@mui/material";
import React from "react";


export const YourBidsCard = () => {

    
    
  return (
    <Card className="auction-item-card" style={{ padding: 20 }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <div className="card-img-container">
            <img
              className="card-img"
              height="100"
              src={"/BidForGood.png"}
            ></img>
          </div>
        </Grid>
        <Grid item xs={7}>
          <Stack gap={2}>
            <div style={{ fontWeight: "bold" }}>test title</div>
            <div>Your bid </div>
            <div># of bids </div>
            <Button
              className="mui-btn"
              variant="contained"
              onClick={() => {}}
            >
             Remove bid
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};
