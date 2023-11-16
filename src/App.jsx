import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"

const App = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="sm">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={null} />
            <Route path="/explore_feed" element={null} />
            <Route path="/your_bids" element={null} />
            <Route path="/profile" element={null} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
