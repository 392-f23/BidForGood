import React from 'react'
import { Button, Container } from "@mui/material";
import { Stack } from "@mui/system";
import { useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";

export const AuctionPage = ({}) => {
  const auctionInfo = useLocation().state;
  console.log(auctionInfo);
  return (
    <Container>
        <div>{auctionInfo.Name}</div>
        <Banner currentPage={"explore_feed"} />
    </Container>
)
}

export default AuctionPage;
