import { useState, useEffect } from 'react';
import './OrgProfile.css'
import OrgBanner from './OrgBanner';
import { 
  Container, 
  Avatar, 
  Stack, 
  Card, 
  Button, 
  Accordion, 
  AccordionDetails,
  AccordionSummary,
  Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useNavigate } from 'react-router-dom';

export const OrgProfilePage = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
  };

  const [userData, setUserData] = useState({});

  return (
    <Container maxWidth="sm">
      <Stack className='profilestack'>
        <Avatar
            className="profile-pic"
            sx={{
              width: 40,
              height: 40,
            }}
            src={userData ? userData.photoURL : ""}
          ></Avatar>
        <h2>{userData ? userData.displayName : ""}</h2>
        <div className='cardflex'>
          <Card className='profilecard'>
            <h3 className='cardheader'>{userData ? userData.totalRaised : ""}</h3>
            <p className='cardtext'>Total Raised</p>
          </Card>
        </div>
        <div className='cardflex'>
          <Button variant='contained'>Edit Profile</Button>
          <Button onClick={handleSignOut} color='error' variant='contained'>Sign Out</Button>
        </div>
      </Stack>
      <OrgBanner currentPage={"profile"} />
    </Container>
  );
};
