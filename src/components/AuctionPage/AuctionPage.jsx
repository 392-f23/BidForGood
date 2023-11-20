import React, { useState } from "react";
import { Button, Container } from "@mui/material";
import { Stack } from "@mui/system";
import { useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import { AuctionInfoBox } from "./AuctionInfoBox";
import { AuctionItemCard } from "../AuctionItemCard/AuctionItemCard";
import InfoDialog from '../Dialog/Dialog';
import DialogContentText from '@mui/material/DialogContentText';
import { auctionItemData } from "../../data/auctionItems";

const AuctionPage = () => {
  const auctionInfo = useLocation().state;
  const [openBid, setOpenBid] = useState(false);

  const handleClickOpenBid = () => {
      setOpenBid(true);
  };

  const handleCloseBid = () => {
      setOpenBid(false);
  };
  
  return (
    <Container style={{ margin:0, padding:0}}>
      <InfoDialog
          title={"Place Bid"}
          open={openBid}
          handleClose={handleCloseBid}
      >
          <div>
            <Stack style={{maxWidth: '15rem'}}>
              <div style={{display: 'flex', marginBottom: '1rem'}}>$ <input type='number' style={{marginLeft: '0.2rem'}}></input></div>
              <Button className="mui-btn" variant='contained'>Place Bid</Button>
            </Stack>
          </div>
      </InfoDialog>
      <Stack gap={1} style={{ textAlign: "center", marginBottom: 20 }}>
        <h2 style={{ marginBottom: 0, marginTop: 0 }}>{auctionInfo.Name}</h2>
        <div>EVENT | {auctionInfo.Title.toUpperCase()}</div>
        <div>
          Runs {auctionInfo.StartDate} through {auctionInfo.EndDate}
        </div>
      </Stack>

      <AuctionInfoBox auctionInfo={auctionInfo} />
      
      <Stack gap={.5} sx={{minWidth: 0}}>
       {auctionItemData[auctionInfo.EventID].map((x, index)=> <AuctionItemCard key={index} handleOpenBid={handleClickOpenBid} auctionItemInfo={x} />)}
      </Stack>

      <Banner currentPage={"explore_feed"} />
    </Container>
  );
};

export default AuctionPage;