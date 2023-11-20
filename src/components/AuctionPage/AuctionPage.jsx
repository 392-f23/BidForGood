import React from 'react'
import { Button, Container } from "@mui/material";
import { Stack } from "@mui/system";
import { useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Brightness1Icon from '@mui/icons-material/Brightness1';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ minWidth: 35, mr: 2 }}>
        <Typography sx={{ ml: 1, mt: 0.5 }} variant="body1" color="white">Progress</Typography>
      </Box>
      <Box sx={{ width: '100%', mr: 1, mt: 0.5 }}>
        <Box
          sx={{
            width: '100%',
            height: "1rem",
            mr: 1,
            bgcolor: 'rgb(255, 255, 255)',
            verticalAlign: "middle",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
        <LinearProgress sx={{
                  backgroundColor: 'white',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: 'green'
                  },
                  ml: 0.4,
                  mr: 1,
                  height: "0.6rem"
                }}
                variant="determinate" {...props} />
        </Box>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};
export const AuctionPage = ({}) => {
  const auctionInfo = useLocation().state;
  console.log(auctionInfo);
  const [progress, setProgress] = React.useState(auctionInfo.Progress / auctionInfo.Goal * 100);
  return (
    <Container>
        <div>{auctionInfo.Name}</div>
        <div>EVENT | {auctionInfo.Title}</div>
        <div>Runs {auctionInfo.StartDate} through {auctionInfo.EndDate}</div>
        <Banner currentPage={"explore_feed"} />
        <Box
        sx={{
          width: '100%',
          height: 110,
          borderRadius: 1,
          bgcolor: 'rgb(17, 138, 49)',
        }}
      >
        <LinearProgressWithLabel value={progress}/>
        <Box
        sx={{
          ml: "15%",
          color: "white"
        }}
      >
        <Box sx={{display: "flex",
              flexDirection: "column",
              alignItems: "center"}}>
          <div>${auctionInfo.Progress} of {auctionInfo.Goal} raised</div>
          <div>Auctions: {auctionInfo.ActiveAuctions} Active | {auctionInfo.ClosedAuctions} Closed </div>
        </Box>
        </Box>
        <Box sx={{display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"}}>
          <Button variant="contained" sx={{width:"25%", ml: 1, fontSize: "0.75em", justifyContent: "left", backgroundColor: "rgb(42, 209, 86)"}} endIcon={<LocalPhoneIcon />}>Contact</Button>
          <Box sx={{display: "flex",
              flexDirection: "row",
              alignItems: "right",
              mr: 1,
              mb: -3}}>
            <Typography sx={{ mr: 0.5 }} variant="body1" color="white">LIVE</Typography>
            <Brightness1Icon sx={{color:"red"}}/>
          </Box>
        </Box>
      </Box>
        
    </Container>
)
}

export default AuctionPage;
