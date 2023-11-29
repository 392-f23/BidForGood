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

  const [auctions_list, error1] = useDbData("/auctions");
  const [auction_items_list, error2] = useDbData("/listings");

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
                  aucs_list={auctions_list ? auctions_list : []}
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