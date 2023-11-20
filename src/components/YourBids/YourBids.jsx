import './YourBids.css'
import Banner from '../Banner/Banner';
import { Container, Stack } from '@mui/material';

const YourBids = () => {
  return (
    <Container maxWidth="sm">
      <Stack className='bidstack'>
        <h2>Your Bids</h2>
        <div>Rest of Your Bids Info</div>
      </Stack>
      <Banner currentPage={"your_bids"} />
    </Container>
  );
};

export default YourBids;