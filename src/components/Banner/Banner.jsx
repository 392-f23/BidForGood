import * as React from "react";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100}}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Explore"
          component={Link}
          to="/explore_feed"
        />
        <BottomNavigationAction
          label="Your Bids"
          component={Link}
          to="/your_bids"
        />
        <BottomNavigationAction
          label="Profile"
          component={Link}
          to="/profile"
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Banner;
