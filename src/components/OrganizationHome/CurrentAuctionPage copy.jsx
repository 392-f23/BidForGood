import { Container, Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import OrgBanner from './OrgBanner';
import { AuctionCard } from '../AuctionCard/AuctionCard';
import InfoDialog from "../Dialog/Dialog";
import DialogContentText from "@mui/material/DialogContentText";

export const CurrentAuctionPage = () => {
  const [description, SetDescription] = useState("");
  const [openDescription, setOpenDescription] = useState(false);
  const dummyInfo = {
    ActiveAuctions: 14,
    AuctionName: "PuppiesRUs Winter Woof Drive",
    ClosedAuctions: 0,
    Description: "Help PuppiesRUs raise money for local animals!",
    EndDate: "12/20/23",
    Goal: 6000,
    OrganizationName: "PuppiesRUs",
    PhoneNumber: "(847) 492-0990",
    StartDate: "11/10/23",
    TotalRaised: 3215,
    Logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYVYubg0FIFviSxRsZmhWUNqM7ZDAv0PyAL8NOH9cHpg&s"
  };
  const images = ['https://www.wavy.com/wp-content/uploads/sites/3/2022/12/Dog-Christmas-Toy.jpg?w=320&h=180&crop=1','https://ohmypawd.com/cdn/shop/products/3-pack-naughty-and-nice-bones-dog-toys-726266_5000x.jpg?v=1693296179','https://www.pawzroad.com/cdn/shop/products/1500-8_0e709301-d678-445f-974b-1acfa836b8f0_300x300.jpg?v=1664520249'];
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
          <h2 style={{marginTop: '2rem'}}>Current Auctions</h2>
          <Stack spacing={2} className="feed-stack">
            <AuctionCard
              auctionInfo={dummyInfo}
              images={images}
              handleOpenDescription={() => handleClickOpenDescription(dummyInfo.Description)}
            />
          </Stack>
      </Container>
      <OrgBanner currentPage={"org_current_auction"} />
    </Container>
  )
}