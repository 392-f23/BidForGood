import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/Header/Header"
import ExplorePage from './components/ExplorePage/ExplorePage';
import AuctionPage from './components/AuctionPage/AuctionPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import YourBids from './components/YourBids/YourBids';
import HomePage from './components/HomePage/HomePage';

const App = () => {

  const aucs_list = [
    {
      "EventID": 0,
      "Name": "Evanston Animal Shelter",
      "Title": "Fall Auction Drive",
      "Description": "EAS's annual fall event benefiting golden retrievers",
      "Link": "eas.org",
      "Logo": "",
      "Goal": 20000,
      "Progress": 10000,
      "ActiveAuctions": 1,
      "ClosedAuctions": 1,
      "StartDate": "11/20/23",
      "EndDate": "12/01/23",
      "PhoneNumber":"630-111-1234",
      "Items": [
        {
          "Name":"Dog Toy",
          "Image":"none",
          "CurrentBid":20,
          "Status":"Active",
          "NumberBids": 6
        },
        {
          "Name":"Smart Watch",
          "Image":"none",
          "CurrentBid":150,
          "Status":"Closed",
          "NumberBids": 7
        }
      ]
    },
    {
      "EventID": 1,
      "Name": "Evanston Pet Shelter",
      "Title": "Fall Auction Drive",
      "Description": "EAS's annual fall event benefiting golden retrievers",
      "Link": "eas.org",
      "Logo": "Logo",
      "Goal": 20000,
      "Progress": 10000,
      "ActiveAuctions": 2,
      "ClosedAuctions": 2,
      "StartDate": "11/20/23",
      "EndDate": "12/01/23",
      "PhoneNumber":"630-111-1234",
      "Items": [
        {
          "Name":"Dog Toy",
          "Image":"none",
          "CurrentBid":20,
          "Status":"Active",
          "NumberBids": 6
        },
        {
          "Name":"Smart Watch",
          "Image":"none",
          "CurrentBid":150,
          "Status":"Closed",
          "NumberBids": 7
        }
      ]
    },
    {
      "EventID": 2,
      "Name": "Chicago Kids Shelter",
      "Title": "Fall Auction Drive",
      "Description": "EAS's annual fall event benefiting golden retrievers",
      "Link": "eas.org",
      "Logo": "Logo",
      "Goal": 20000,
      "Progress": 10000,
      "ActiveAuctions": 2,
      "ClosedAuctions": 2,
      "StartDate": "11/20/23",
      "EndDate": "12/01/23",
      "PhoneNumber":"630-111-1234",
      "Items": [
        {
          "Name":"Dog Toy",
          "Image":"none",
          "CurrentBid":20,
          "Status":"Active",
          "NumberBids": 6
        },
        {
          "Name":"Smart Watch",
          "Image":"none",
          "CurrentBid":150,
          "Status":"Closed",
          "NumberBids": 7
        }
      ]
    }
  ];

  return (
    <div>
      <Header />
      <Container maxWidth="sm">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore_feed" element={<ExplorePage aucs_list={aucs_list}/>} />
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
