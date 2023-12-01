import * as React from 'react';
import { useState, useEffect } from 'react';
import './ProfilePage.css'
import Banner from '../Banner/Banner';
import { MuiTelInput } from "mui-tel-input";
import { 
  Container, 
  Avatar, 
  Stack, 
  Card, 
  Button, 
  Accordion, 
  InputLabel,
  Select,
  MenuItem,
  AccordionDetails,
  AccordionSummary,
  Typography, Input} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useNavigate } from 'react-router-dom';
import { useDbData, useDbUpdate } from "../../utilities/firebase";
import { FirebaseSignOut } from "../../utilities/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import FormControl from "@mui/material/FormControl";

const ProfilePage = () => {
  const [expanded, setExpanded] = React.useState(false);
  const auth = getAuth();
  const [uid, setUid] = useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const navigate = useNavigate();

  const handleSignOut = () => {
    FirebaseSignOut();
    navigate("/");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        console.log("auth errors out.");
      }
    });
    return () => unsubscribe();
  }, []);
  const [userData, setUserData] = useDbData("/users/" + uid);
  
  const [updateData, result] = useDbUpdate("/users/"+ uid );
  console.log()
  const [phone, setPhone] = React.useState("");
  const handleChangePhone = (newValue) => {
    setPhone(newValue);
  };

  const [payment, setPayment] = React.useState("Paypal");
  const handleChangePayment = (newValue) => {
    setPayment(newValue);
  };

  const [Address, setAddress] = React.useState("");
  const handleChangeAddress = (newValue) => {
    setAddress(newValue);
  };

  useEffect(() => {
    if (typeof userData !== "undefined") {
      
      setPhone(userData.phone);
      setAddress(userData.address);
      setPayment(userData.payment);
    }
  }, [userData]);

  const [canClickEdit, setCanClickEdit] = useState(true);

  const enableEditingView = () => {
    setCanClickEdit(false);
  };

  const [save, setSave] = useState(true);

  const cancelEdit = () => {
    setSave(false);
    setCanClickEdit(true);
    window.location.reload(false); //jank but works for now
  }
  

  const enableSave = () => {
    setSave(false);
    setCanClickEdit(true);
    console.log( phone, Address, payment);
    console.log(uid);
    const newstate = {
    
      phone: phone,
      address: Address,
      payment: payment
    };

    updateData(newstate);
    console.log(result);
  };

  const usStates = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
    'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
    'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  return (
    <Container sx={{marginBottom: "5rem"}} maxWidth="sm">
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
          <Card className='profilecard'>
            <h3 className='cardheader'>{userData ? userData.auctionNumber : ""}</h3>
            <p className='cardtext'>Auctions</p>
          </Card>
        </div>
        
 

{canClickEdit ?
       ( <div className='accordionwrapper'>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='accordion'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 600 }}>
                Phone
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Sign in and Security</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {phone}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='accordion'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 600 }}>Payments</Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Current Payment Option
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {payment}
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
                Address
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                State and zip code
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {Address}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
       )
       :( <div className='accordionwrapper'>     
       <FormControl variant="filled" className="profile-field">
       <InputLabel id="state-select-label">Select a State</InputLabel>
       <Select
         labelId="state-select-label"
         id="state-select"
         value={Address}
         onChange={handleChangeAddress}
       >
         {usStates.map((state) => (
           <MenuItem key={state} value={state}>
             {state}
           </MenuItem>
         ))}
       </Select>
     </FormControl>
 
     <FormControl variant="filled" className="profile-field">
       <InputLabel htmlFor="zip-code">Zip Code</InputLabel>
       <Input
         id="zip-code"
         type="text"
         value={Address}
         onChange={handleChangeAddress}
       />
     </FormControl>
 
         <MuiTelInput
             className="profile-field"
             inputProps={{ readOnly: canClickEdit, label: "Phone Number" }}
             variant="filled"
             sx={{ width: "100%" }}
             defaultCountry="us"
             value={phone}
             onChange={handleChangePhone}
           /> 
         <FormControl variant="filled" className="profile-field">
             <InputLabel id="simple-select">Current Payment method</InputLabel>
             <Select
               labelId="simple-select"
               id="simple-select-field"
               value={payment}
               onChange={handleChangePayment}
               inputProps={{ readOnly: canClickEdit }}
             >
               <MenuItem value={"Card"}>Card</MenuItem>
               <MenuItem value={"Paypal"}>Paypal</MenuItem>
               <MenuItem value={"other"}>other</MenuItem>
             </Select>
           </FormControl>
         </div>)

}
        
        
        <div className='cardflex'>
        {canClickEdit ? (<Button onClick={enableEditingView} 
        variant='contained'>Edit Profile</Button>) 
        : (
          <Button
            
            variant="contained"
            onClick={cancelEdit}
            
          >
            Cancel
          </Button>
        )}
          {canClickEdit ?  <Button onClick={handleSignOut} color='error' variant='contained'>Sign Out</Button>
          :
          (<Button
            
            variant="contained"
            onClick={enableSave}
            
          >
            Save
          </Button>)}
        </div>
      </Stack>
      <Banner currentPage={"profile"} />
    </Container>
  );
};
export default ProfilePage;