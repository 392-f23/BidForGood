import { Button, Card, Grid, Stack } from "@mui/material";
import React from "react";
import { useAuth, useDbData, useDbUpdate } from "../../utilities/firebase";
import { useEffect } from "react";
import { useState } from "react";


export const YourBidsCard = ({title, bidAmount, numOfBids, Image, bidID, userID, auctionID}) => {

    // get the users bids

    const [allListings, error1] = useDbData("/listings")
    const [allAuctions, error2] = useDbData("/auctions")
    const [allUsers, error3] = useDbData("/users")

    const [updateUser, result1] = useDbUpdate("/users/"+userID)
    const [updateListing, result2] = useDbUpdate("/listings/"+bidID)
    const [updateAuction, result3] = useDbUpdate("/auctions/"+auctionID)
    



    const removeBid = () => {
        // modify uses, auctions, listings

        // update listings
        let bidAmount = 0
        let currentBids = allListings[bidID].Bids || [];
        currentBids.map(x=> {
            if (x.userID == userID){
                bidAmount += x.bidAmount
            }
        })
        currentBids = currentBids.filter(x=> x.userID!== userID)
        updateListing({Bids: currentBids})

        // update the user
        let currentUserBids = allUsers[userID].myBids || []
        currentUserBids = currentUserBids.filter(x=> x.bidID !== bidID)
        updateUser({myBids: currentUserBids})
    

        // reduce the total raised
        console.log(auctionID)
        let currentTotal = allAuctions[auctionID].TotalRaised
        currentTotal -= bidAmount
        // UPDATE THE AUCTION TOTAL
        updateAuction({TotalRaised: currentTotal})
        // current



        

    }

  return (
    <Card className="auction-item-card" style={{ padding: 20 }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <div className="card-img-container">
            <img
              className="card-img"
              height="100"
              src={Image || " /BidForGood.png"}
            ></img>
          </div>
        </Grid>
        <Grid item xs={7}>
          <Stack gap={2}>
            <div style={{ fontWeight: "bold" }}>{title}</div>
            <div>Your bid: ${bidAmount} </div>
            <div># of bids: {numOfBids} </div>
            <Button
              className="mui-btn"
              variant="contained"
              onClick={removeBid}
            >
             Remove bid
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};
