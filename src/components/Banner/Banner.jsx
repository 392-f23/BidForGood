import * as React from "react";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Link } from "react-router-dom";

const Banner = ({currentPage}) => {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100}}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Explore"
          component={Link}
          style={{color: `${currentPage === "explore_feed" ? "darkgreen" : "gray"}` }}
          to="/explore_feed"
        />
        <BottomNavigationAction
          label="Your Bids"
          component={Link}
          style={{color: `${currentPage === "your_bids" ? "darkgreen" : "gray"}` }}
          to="/your_bids"
        />
        <BottomNavigationAction
          label="Profile"
          component={Link}
          style={{color: `${currentPage === "profile" ? "darkgreen" : "gray"}` }}
          to="/profile"
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Banner;
