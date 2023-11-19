import './ProfilePage.css'
import Banner from '../Banner/Banner';
import { Container, Avatar, Stack } from '@mui/material';

const ProfilePage = () => {
  return (
    <Container maxWidth="sm">
      <Stack className='profilestack'>
        <Avatar style={{height: '3rem', width: '3rem'}}/>
        <h2>First Last</h2>
        <div>Rest of Profile Info</div>
      </Stack>
      <Banner currentPage={"profile"} />
    </Container>
  );
};

export default ProfilePage;
