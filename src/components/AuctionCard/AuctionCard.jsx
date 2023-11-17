import React from 'react'
import { Container, Paper, Button, Chip, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./AuctionCard.css";
import { useNavigate } from "react-router-dom";

export const AuctionCard = ({auctionInfo}) => {
  const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      ...theme.typography.body2,
      textAlign: "left",
      padding: "1rem",
      color: theme.palette.text.secondary,
    }));
  const navigate = useNavigate();

  // data passing between pages: https://medium.com/@reidwilliamson2/usenavigate-and-uselocation-hooks-edb28f5e9972
  const handleClick = (data) => {
    navigate("/auction_page", {state: data});
  };

  return (
    <Item onClick={() => handleClick(auctionInfo)} className="post-item">
      <div className="post-header">
        <h2 className="post-top">
          <div className="post-title"> {auctionInfo.Name} </div>
        </h2>
        <h3>
            {auctionInfo.Title}
        </h3>
        <div className="post-user">
          <Avatar
            className="profile-pic"
            sx={{ width: 25, height: 25, marginBottom: ".5rem" }}
            src={auctionInfo.Logo ? auctionInfo.Logo : ""}
          ></Avatar>
        </div>
      </div>
      <p className="post-text">{auctionInfo.Description}</p>
      
      <p className="post-location">
        <b>Active Auctions</b>: {auctionInfo.ActiveAuctions}
      </p>
    </Item>
  )
}