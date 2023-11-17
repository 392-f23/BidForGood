import React from 'react'
import { Button, Container } from "@mui/material";
import { Stack } from "@mui/system";
import { useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
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
        <LinearProgressWithLabel value={progress}/>
        <div>${auctionInfo.Progress} of {auctionInfo.Goal} raised</div>
        <div>Auctions: {auctionInfo.ActiveAuctions} Active | {auctionInfo.ClosedAuctions} Closed </div>
    </Container>
)
}

export default AuctionPage;
