import React from 'react'
import { Container, Paper, Button, Chip, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./AuctionCard.css";
import { useNavigate } from "react-router-dom";
import { LinearProgressWithLabel } from '../ProgressBar/ProgressBar';

export const AuctionCard = ({auctionInfo}) => {
  const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#abebbc",
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

  const progress = auctionInfo.Progress / auctionInfo.Goal * 100;

  return (
    <Item className="post-item">
      <div className='left-div'>
        <h2 className="post-title"> {auctionInfo.Title} </h2>
        <div className='org-div'>
          <Avatar
              className="profile-pic"
              sx={{ width: 25, height: 25, marginBottom: ".5rem" }}
              src={auctionInfo.Logo ? auctionInfo.Logo : ""}
            ></Avatar>
          <h3> {auctionInfo.Name} </h3>
        </div>
        <p className='post-text'>Starts: {auctionInfo.StartDate} </p>
        <p className='post-text'>Ends: {auctionInfo.EndDate} </p>
        <div>
          <LinearProgressWithLabel value={progress}/>
          <p className='post-text'> ${auctionInfo.Progress} / ${auctionInfo.Goal}</p>
        </div>
        <p className='post-text'>Active Auctions: {auctionInfo.ActiveAuctions}</p>
      </div>
      <div className='right-div'>
        <Button className='enter-button' variant="contained" onClick={() => handleClick(auctionInfo)}>
          Enter
        </Button>
      </div>
    </Item>
  )
}