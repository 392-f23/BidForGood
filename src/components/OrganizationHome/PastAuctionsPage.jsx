import { Container, Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import OrgBanner from './OrgBanner';
import { AuctionCard } from '../AuctionCard/AuctionCard';
import InfoDialog from "../Dialog/Dialog";
import DialogContentText from "@mui/material/DialogContentText";

export const PastAuctionsPage = () => {
  const [description, SetDescription] = useState("");
  const [openDescription, setOpenDescription] = useState(false);
  const dummyInfo = {
    ActiveAuctions: 0,
    AuctionName: "Purple Pride Auction",
    ClosedAuctions: 12,
    Description: "Making Evanston an even better place to live, work, and thrive.",
    EndDate: "11/01/23",
    Goal: 15000,
    OrganizationName: "Evanston Community Foundation",
    PhoneNumber: "(847) 492-0990",
    StartDate: "10/20/23",
    TotalRaised: 15000
  };
  const images = ['https://images.footballfanatics.com/boston-celtics/jayson-tatum-boston-celtics-autographed-wilson-nba-authentic-series-indoor/outdoor-basketball_pi4593000_altimages_ff_4593961-83f4d6df24d207b4ac37alt1_full.jpg?_hv=2&w=900'];
  const handleClickOpenDescription = (description) => {
    SetDescription(description);
    setOpenDescription(true);
  };
  const handleCloseDescription = () => {
    setOpenDescription(false);
  };
  return (
    <Container>
      <InfoDialog
        title={"About"}
        open={openDescription}
        handleClose={handleCloseDescription}
      >
        <div>
          <DialogContentText>{description}</DialogContentText>
        </div>
      </InfoDialog>
      <Container style={{textAlign: 'center'}}>
          <h2 style={{marginTop: '2rem'}}>Past Auctions</h2>
          <Stack spacing={2} className="feed-stack">
            <AuctionCard
              auctionInfo={dummyInfo}
              images={images}
              handleOpenDescription={() => handleClickOpenDescription(dummyInfo.Description)}
            />
          </Stack>
      </Container>
      <OrgBanner currentPage={"org_past_auctions"} />
    </Container>
  )
}
