import './HomePage.css'
import React, { useEffect } from "react";
import { Button, Container, Stack } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useDbData, useDbUpdate } from "../../utilities/firebase";
import { FirebaseSignIn, useAuth } from "../../utilities/firebase";
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

const HomePage = () => {

  const navigate = useNavigate();
  const [user] = useAuth();
  const [userData, error] = useDbData("/users");
  const [updateUsers, result] = useDbUpdate("/users");
  console.log(user);


  const checkSignInStatus = () => {
    if (user && user.uid && typeof userData !== "undefined") {
      const uids = (userData ? Object.keys(userData) : [""]);
      if (uids.includes(user.uid)) {
        console.log("we already logged in before");
        navigate("/explore_feed");
      } else {
        const userDataObject = {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          totalRaised: "$0.00",
          auctionNumber: "0"
        };
        updateUsers({ [user.uid]: userDataObject });
        navigate('/explore_feed');
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

  useEffect(() => {
    checkSignInStatus(); // Check the sign-in status when user and userData are available
  }, [user, userData]);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: 'green;'
  }));

  return (
    <Container maxWidth="sm">
        <Stack className='bidstack'>
              <h2 className='hometext'>Auctions Made Easier</h2>
              <img src='/BidForGood.png' />
              <ColorButton onClick={signInWithFirebase}>Sign in</ColorButton>
        </Stack>
    </Container>
  );
};

export default HomePage;