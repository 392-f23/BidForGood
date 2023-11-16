import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import ExplorePage from './components/ExplorePage/ExplorePage';

const App = () => {

  const orgs_list = [
    {
      "Name": "Evanston Animal Shelter",
      "Title": "Fall Auction Drive",
      "Description": "EAS's annual fall event benefiting golden retrievers",
      "Link": "eas.org",
      "Logo": "",
      "Goal": 20000,
      "Progress": 10000,
      "ActiveAuctions": 7,
      "ClosedAuctions": 4,
      "StartDate": "11/20/23",
      "EndDate": "12/01/23"
    },
    {
      "Name": "Evanston Pet Shelter",
      "Title": "Fall Auction Drive",
      "Description": "EAS's annual fall event benefiting golden retrievers",
      "Link": "eas.org",
      "Logo": "Logo",
      "Goal": 20000,
      "Progress": 10000,
      "ActiveAuctions": 7,
      "ClosedAuctions": 4,
      "StartDate": "11/20/23",
      "EndDate": "12/01/23"
    },
    {
      "Name": "Chicago Kids Shelter",
      "Title": "Fall Auction Drive",
      "Description": "EAS's annual fall event benefiting golden retrievers",
      "Link": "eas.org",
      "Logo": "Logo",
      "Goal": 20000,
      "Progress": 10000,
      "ActiveAuctions": 7,
      "ClosedAuctions": 4,
      "StartDate": "11/20/23",
      "EndDate": "12/01/23"
    }
  ];

  return (
    <div>
      <Header />
      <Container maxWidth="sm">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={null} />
            <Route path="/explore_feed" element={<ExplorePage orgs_list={orgs_list}/>} />
            <Route path="/your_bids" element={null} />
            <Route path="/profile" element={null} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
