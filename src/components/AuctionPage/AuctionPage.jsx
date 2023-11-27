import React, { useEffect, useState } from "react";
import { Button, Container } from "@mui/material";
import { Stack } from "@mui/system";
import { useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import { AuctionInfoBox } from "./AuctionInfoBox";
import { AuctionItemCard } from "../AuctionItemCard/AuctionItemCard";
import InfoDialog from '../Dialog/Dialog';
import DialogContentText from '@mui/material/DialogContentText';
import { auctionItemData } from "../../data/auctionItems";
import { useDbData } from "../../utilities/firebase";

const AuctionPage = () => {
  const [items_list, result1] = useDbData("/listings");

  const auctionInfo = useLocation().state;
  const [openBid, setOpenBid] = useState(false);
  const [auctionItems, setAuctionItems] = useState([]);

  useEffect(() => {
    if (items_list) {
      setAuctionItems(Object.values(items_list).filter(x => x.AuctionId === auctionInfo.id));
    }
  }, [items_list]);

  
  const auctionTitle = auctionInfo.AuctionName;
  const auctionLogo = auctionInfo.Logo;
  const orgName = auctionInfo.OrganizationName;
  const auctionStart = auctionInfo.StartDate;
  const auctionEnd = auctionInfo.EndDate;

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
        <h2 style={{ marginBottom: 0, marginTop: 0 }}>{orgName}</h2>
        <div>EVENT | {auctionTitle.toUpperCase()}</div>
        <div>
          Runs {auctionStart} through {auctionEnd}
        </div>
      </Stack>

      <AuctionInfoBox auctionInfo={auctionInfo} />
      
      <Stack gap={.5} mb={"5rem"} sx={{minWidth: 0}}>
       {auctionItems.map((x, index)=> <AuctionItemCard key={index} handleOpenBid={handleClickOpenBid} auctionItemInfo={x} />)}
      </Stack>

      <Banner currentPage={"explore_feed"} />
    </Container>
  );
};

export default AuctionPage;