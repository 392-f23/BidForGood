import './ProfilePage.css'
import Banner from '../Banner/Banner';
import { Container } from '@mui/material';

const ProfilePage = () => {
  return (
    <Container>
        Profile
        <Banner currentPage={"profile"} />
    </Container>
  );
};

export default ProfilePage;
