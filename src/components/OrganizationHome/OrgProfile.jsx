import * as React from 'react';
import { useState, useEffect } from 'react';
import './ProfilePage.css'
import OrgBanner from "./OrgBanner.jsx";
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYVYubg0FIFviSxRsZmhWUNqM7ZDAv0PyAL8NOH9cHpg&s"
          ></Avatar>
        <h2>PuppiesRUs</h2>
        <div className='cardflex'>
          <Card className='profilecard'>
            <h3 className='cardheader'>$10,873</h3>
            <p className='cardtext'>Total Raised</p>
          </Card>
          <Card className='profilecard'>
            <h3 className='cardheader'>2</h3>
            <p className='cardtext'>Auctions</p>
          </Card>
        </div>
        <div className='accordionwrapper'>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='accordion'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 600 }}>
                Profile and Logistics
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Organization profile and bid Logistics</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='accordion'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 600 }}>Financials</Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Organizational Payment Options
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='accordion'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 600 }}>
                Account Settings
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Site and Auction Preferences
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className='cardflex'>
          <Button variant='contained'>Edit Profile</Button>
          <Button onClick={handleSignOut} color='error' variant='contained'>Sign Out</Button>
        </div>
      </Stack>
      <OrgBanner currentPage={"org_profile"} />
    </Container>
  );
};

export default OrgProfilePage;