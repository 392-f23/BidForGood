import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/Header/Header";
import ExplorePage from "./components/ExplorePage/ExplorePage";
import AuctionPage from "./components/AuctionPage/AuctionPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import YourBids from "./components/YourBids/YourBids";
import HomePage from "./components/HomePage/HomePage";
import { useDbData } from "./utilities/firebase.js";

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

  const [auctions_list, error1] = useDbData("/auctions");
  const [auction_items_list, error2] = useDbData("/listings");
  // const [orgs_list, result3] = useDbData("/organizations");

  return (
    <div>
      <Header />
      <Container maxWidth="sm">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/explore_feed"
              element={
                <ExplorePage
                  aucs_list={auctions_list}
                  items_list={auction_items_list}
                />
              }
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
