import './YourBids.css'
import Banner from '../Banner/Banner';
import { Container } from '@mui/material';

const YourBids = () => {
  return (
    <Container>
        Your Bids
        <Banner currentPage={"your_bids"} />
    </Container>
  );
};

export default YourBids;