import { Button, Card, Grid, Stack } from "@mui/material";
import React from "react";
import { useAuth, useDbData, useDbUpdate } from "../../utilities/firebase";
import { useEffect } from "react";
import { useState } from "react";

export const YourBidsCard = ({
  title,
  bidAmount,
  numOfBids,
  Image,
  bidID,
  listingID,
  userID,
  auctionID,
}) => {
  // get the users bids

  const [allListings, error1] = useDbData("/listings");
  const [allAuctions, error2] = useDbData("/auctions");
  const [allUsers, error3] = useDbData("/users");

  const [updateUser, result1] = useDbUpdate("/users/" + userID);
  const [updateListing, result2] = useDbUpdate("/listings/" + listingID);
  const [updateAuction, result3] = useDbUpdate("/auctions/" + auctionID);

  const removeBid = () => {
    // modify uses, auctions, listings

    // update listings
    let currentBids = allListings[listingID].Bids || [];
    let userBid = {}


    currentBids.map(x=>{
        if (x.id == bidID){
            userBid = x
        }
    })

        // UPDATE THE AUCTION TOTAL

    let bidAmountArray = []
    currentBids.map(x=> {
        bidAmountArray.push(x.bidAmount)
    })

    bidAmountArray.sort((a,b)=> a-b);
    let currentTotal = allAuctions[auctionID].TotalRaised;


    if (Math.max(...bidAmountArray) == userBid.bidAmount){
        if(bidAmountArray.length > 1){
            let diff = Math.max(...bidAmountArray) - bidAmountArray[bidAmountArray.length-2];
            currentTotal -= diff
        }else{
            currentTotal-= Math.max(...bidAmountArray)
        }
    }
    updateAuction({TotalRaised: currentTotal});


    currentBids = currentBids.filter(x=> x.id !== bidID);
    updateListing({ Bids: currentBids });

    // Update user
    let userBids = allUsers[userID].myBids || []
    userBids = userBids.filter(x=> x.bidID !== bidID);
    updateUser({ myBids: userBids });

  };

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
            <Button className="mui-btn" variant="contained" onClick={removeBid}>
              Remove bid
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};
