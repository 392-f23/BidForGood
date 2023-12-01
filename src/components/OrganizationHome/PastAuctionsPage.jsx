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
    AuctionName: "Annual Fall Auction Drive",
    ClosedAuctions: 12,
    Description: "PuppiesRUs's annual fall event benefiting golden retrievers",
    EndDate: "10/01/23",
    Goal: 5000,
    OrganizationName: "PuppiesRUs",
    PhoneNumber: "(847) 492-0990",
    StartDate: "08/20/23",
    TotalRaised: 5000,
    Logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYVYubg0FIFviSxRsZmhWUNqM7ZDAv0PyAL8NOH9cHpg&s"
  };
  const images = ['https://i.pinimg.com/736x/83/43/1f/83431fc3313ce0e7ae20837e2fafad57.jpg','https://i0.wp.com/www.puppies-r-us.com/wp-content/uploads/2023/10/image5-11.png?fit=640%2C480&ssl=1','https://goodsstores.com/cdn/shop/products/8303471_A.eps_High_800x.jpg?v=1679338906'];
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
