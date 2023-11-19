import './HomePage.css'
import { Container, Stack } from '@mui/material';
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container maxWidth="sm">
        <Stack className='bidstack'>
            <h2 className='hometext'>Auctions Made Easier</h2>
            <img src='/BidForGood.png' />
            <Link to='/explore_feed' className='continuelink'>
                <h3>Continue</h3>
            </Link>
        </Stack>
    </Container>
  );
};

export default HomePage;