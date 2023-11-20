import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/Header/Header";
import ExplorePage from "./components/ExplorePage/ExplorePage";
import AuctionPage from "./components/AuctionPage/AuctionPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import YourBids from "./components/YourBids/YourBids";
import HomePage from "./components/HomePage/HomePage";

const data = {
  organizations: {
    "Evanston Animal Shelter": {
      Website: "http://evanstonanimalshelter.net/",
      Logo: "",
    },
    "Fabretto Children's Foundation": {
      Website: "https://fabretto.org/",
      Logo: "",
    },
  },
  auctions: {
    12345: {
      Organization: "Evanston Animal Shelter",
      AuctionName: "Fall Auction Drive",
      Description: "EAS's annual fall event benefiting golden retrievers",
      Goal: 20000,
      TotalRaised: 10000,
      ActiveAuctions: 1,
      ClosedAuctions: 1,
      StartDate: "11/20/23",
      EndDate: "12/01/23",
      PhoneNumber: "630-111-1234",
      Items: [
        {
          Name: "Cozy Pet Bed",
          CurrentBid: 30,
          NumberBids: 8,
          Image:
            "https://paradissvp.com/cdn/shop/products/f5e01c19eae46f92df201e1a34d3fdb0_550x.jpg?v=1615695220",
          Status: "Active",
        },
        {
          Name: "Paw Print Artwork",
          CurrentBid: 20,
          NumberBids: 5,
          Image:
            "https://www.flutterbyeprints.com/cdn/shop/products/Paw_print_in_frame_white_brick_wall_0f663d48-6cbd-4f26-8cb0-939b6784dbf3.jpg?v=1609870897",
          Status: "Active",
        },
        {
          Name: "Interactive Cat Toy Set",
          CurrentBid: 15,
          NumberBids: 10,
          Image: "https://m.media-amazon.com/images/I/81RZWGYhDfL.jpg",
          Status: "Active",
        },
        {
          Name: "Dog Grooming Voucher",
          CurrentBid: 40,
          NumberBids: 12,
          Image:
            "https://spiritdogtraining.com/wp-content/uploads/2021/03/how-long-does-grooming-take.jpg",
          Status: "Active",
        },
      ],
    },
  },
  listings: {
    1: {
      Name: "Cozy Pet Bed",
      AuctionId: 123,
      CurrentBid: 30,
      NumberBids: 8,
      Image:
        "https://paradissvp.com/cdn/shop/products/f5e01c19eae46f92df201e1a34d3fdb0_550x.jpg?v=1615695220",
      Status: "Active",
    },
    2: {
      Name: "Paw Print Artwork",
      AuctionId: 123,
      CurrentBid: 20,
      NumberBids: 5,
      Image:
        "https://www.flutterbyeprints.com/cdn/shop/products/Paw_print_in_frame_white_brick_wall_0f663d48-6cbd-4f26-8cb0-939b6784dbf3.jpg?v=1609870897",
      Status: "Active",
    },
    3: {
      Name: "Interactive Cat Toy Set",
      AuctionId: 123,
      CurrentBid: 15,
      NumberBids: 10,
      Image: "https://m.media-amazon.com/images/I/81RZWGYhDfL.jpg",
      Status: "Active",
    },
    4: {
      Name: "Dog Grooming Voucher",
      AuctionId: 123,
      CurrentBid: 40,
      NumberBids: 12,
      Image:
        "https://spiritdogtraining.com/wp-content/uploads/2021/03/how-long-does-grooming-take.jpg",
      Status: "Active",
    },
  },
};

const App = () => {
  const aucs_list = [
    {
      EventID: 0,
      Name: "Evanston Animal Shelter",
      Title: "Fall Auction Drive",
      Description: "EAS's annual fall event benefiting golden retrievers",
      Link: "eas.org",
      Logo: "",
      Goal: 20000,
      Progress: 10000,
      ActiveAuctions: 1,
      ClosedAuctions: 1,
      StartDate: "11/20/23",
      EndDate: "12/01/23",
      PhoneNumber: "630-111-1234",
      Items: 0,
    },
    {
      EventID: 1,
      Name: "NU Dance Marathon",
      Title: "NUDM Auction for Action",
      Description: "Let's raise money for this charity.",
      Link: "nudm.org",
      Logo: "Logo",
      Goal: 5000,
      Progress: 3000,
      ActiveAuctions: 9,
      ClosedAuctions: 4,
      StartDate: "11/20/23",
      EndDate: "12/20/23",
      PhoneNumber: "630-111-1234",
      Items: 1,
    },
    {
      EventID: 2,
      Name: "Chicago Kids Shelter",
      Title: "Textbooks for Tots",
      Description: "Raising money for Chicago kids' continued education.",
      Link: "cks.org",
      Logo: "Logo",
      Goal: 15000,
      Progress: 14500,
      ActiveAuctions: 2,
      ClosedAuctions: 12,
      StartDate: "11/20/23",
      EndDate: "01/01/24",
      PhoneNumber: "630-111-1234",
      Items: 2,
    },
  ];

  return (
    <div>
      <Header />
      <Container maxWidth="sm">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/explore_feed"
              element={<ExplorePage aucs_list={aucs_list} />}
            />
            <Route path="/your_bids" element={<YourBids />} />
            <Route path="/auction_page" element={<AuctionPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
