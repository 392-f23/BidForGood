import React from 'react'
import { Container, Paper, Button, Chip, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./OrgCard.css";

export const OrgCard = ({orgInfo}) => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        textAlign: "left",
        padding: "1rem",
        color: theme.palette.text.secondary,
      }));

  return (
    <Item className="post-item">
      <div className="post-header">
        <h2 className="post-top">
          <div className="post-title"> {orgInfo.Name} </div>
        </h2>
        <h3>
            {orgInfo.Title}
        </h3>
        <div className="post-user">
          <Avatar
            className="profile-pic"
            sx={{ width: 25, height: 25, marginBottom: ".5rem" }}
            src={orgInfo.Logo ? orgInfo.Logo : ""}
          ></Avatar>
        </div>
      </div>
      <p className="post-text">{orgInfo.Description}</p>
      
      <p className="post-location">
        <b>Active Auctions</b>: {orgInfo.ActiveAuctions}
      </p>
    </Item>
  )
}