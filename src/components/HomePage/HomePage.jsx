import "./HomePage.css";
import React, { useEffect } from "react";
import { Button, Container, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDbData, useDbUpdate } from "../../utilities/firebase";
import { FirebaseSignIn, useAuth } from "../../utilities/firebase";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [user] = useAuth();
  const [userData, error] = useDbData("/users");
  const [updateUsers, result] = useDbUpdate("/users");


  const checkSignInStatus = () => {
    if (user && user.uid && typeof userData !== "undefined") {
      const uids = userData ? Object.keys(userData) : [""];
      if (uids.includes(user.uid)) {
        navigate("/explore_feed");
      } else {
        const userDataObject = {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          totalRaised: "$0.00",
          auctionNumber: "0",
        };
        updateUsers({ [user.uid]: userDataObject });
        navigate("/explore_feed");
      }
    }
  };

  const signInWithFirebase = async () => {
    try {
      await FirebaseSignIn();
    } catch (error) {
      // Handle any sign-in errors
      console.error("Sign-in error:", error);
    }
  };

  const signInAsOrg = () => {
    navigate("/org_signin");
  }

  const signInAsOrg = () => {
    navigate("/org_signin");
  }

  useEffect(() => {
    checkSignInStatus(); // Check the sign-in status when user and userData are available
  }, [user, userData]);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: 'green'
    backgroundColor: 'green'
  }));

  return (
    <Container sx={{display: 'flex'}} className="home-container" maxWidth="sm">
    <Container sx={{display: 'flex'}} className="home-container" maxWidth="sm">
        <Stack className='bidstack'>
              <h2 className='hometext'>Auctions Made Easier</h2>
              <img src='/BidForGood.png' />
              <ColorButton className="color-btn" onClick={signInWithFirebase}>Sign in as Bidder</ColorButton>
              <ColorButton className="color-btn" onClick={signInWithFirebase}>Sign in as Bidder</ColorButton>
        </Stack>
        <h3 className="org-signin" onClick={signInAsOrg}>Sign in as Organization</h3>
        <h3 className="org-signin" onClick={signInAsOrg}>Sign in as Organization</h3>
    </Container>
  );
};

export default HomePage;
