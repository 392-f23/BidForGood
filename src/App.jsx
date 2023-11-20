import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/Header/Header"
import ExplorePage from './components/ExplorePage/ExplorePage';
import AuctionPage from './components/AuctionPage/AuctionPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import YourBids from './components/YourBids/YourBids';
import HomePage from './components/HomePage/HomePage';

const App = () => {

  const aucs_list = [
    {
      "EventID": 0,
      "Name": "Evanston Animal Shelter",
      "Title": "Fall Auction Drive",
      "Description": "EAS's annual fall event benefiting golden retrievers",
      "Link": "eas.org",
      "Logo": "",
      "Goal": 20000,
      "Progress": 10000,
      "ActiveAuctions": 1,
      "ClosedAuctions": 1,
      "StartDate": "11/20/23",
      "EndDate": "12/01/23",
      "PhoneNumber":"630-111-1234",
      "Items": [
        [
          { "Name": "Cozy Pet Bed", "CurrentBid": 30, "NumberBids": 8, "Image": "https://paradissvp.com/cdn/shop/products/f5e01c19eae46f92df201e1a34d3fdb0_550x.jpg?v=1615695220", "Status": "Active" },
          { "Name": "Paw Print Artwork", "CurrentBid": 20, "NumberBids": 5, "Image": "https://www.flutterbyeprints.com/cdn/shop/products/Paw_print_in_frame_white_brick_wall_0f663d48-6cbd-4f26-8cb0-939b6784dbf3.jpg?v=1609870897", "Status": "Active" },
          { "Name": "Interactive Cat Toy Set", "CurrentBid": 15, "NumberBids": 10, "Image": "https://m.media-amazon.com/images/I/81RZWGYhDfL.jpg", "Status": "Active" },
          { "Name": "Dog Grooming Voucher", "CurrentBid": 40, "NumberBids": 12, "Image": "https://spiritdogtraining.com/wp-content/uploads/2021/03/how-long-does-grooming-take.jpg", "Status": "Active" },
          { "Name": "Handcrafted Birdhouse", "CurrentBid": 25, "NumberBids": 6, "Image": "https://www.madephx.com/cdn/shop/products/Red-bird-house-esser_1500x.jpg?v=1625523228", "Status": "Active" },
          { "Name": "Pet Spa Day Package", "CurrentBid": 50, "NumberBids": 15, "Status": "Active" },
          { "Name": "Custom Pet Portrait Session", "CurrentBid": 35, "NumberBids": 9, "Status": "Active" },
          { "Name": "Animal-themed Blanket", "CurrentBid": 18, "NumberBids": 7, "Status": "Active" },
          { "Name": "Pet Photography Session", "CurrentBid": 55, "NumberBids": 11, "Status": "Active" },
          { "Name": "Cat Condo Tower", "CurrentBid": 45, "NumberBids": 14, "Status": "Active" },
        ],
      ]
    },
    {
      "EventID": 1,
      "Name": "Evanston Pet Shelter",
      "Title": "Fall Auction Drive",
      "Description": "EAS's annual fall event benefiting golden retrievers",
      "Link": "eas.org",
      "Logo": "Logo",
      "Goal": 20000,
      "Progress": 10000,
      "ActiveAuctions": 2,
      "ClosedAuctions": 2,
      "StartDate": "11/20/23",
      "EndDate": "12/01/23",
      "PhoneNumber":"630-111-1234",
      "Items": [
        [
          { "Name": "Pet Bed and Toy Bundle", "CurrentBid": 20, "NumberBids": 8, "Image": "https://m.media-amazon.com/images/I/51GM6geu+GL._AC_UF1000,1000_QL80_.jpg", "Status": "Active" },
          { "Name": "Premium Dog Food Supply", "CurrentBid": 30, "NumberBids": 12, "Image": "https://target.scene7.com/is/image/Target/GUEST_7f59d6e7-9a87-4ec2-9c0f-706999087019?wid=488&hei=488&fmt=pjpeg", "Status": "Active" },
          { "Name": "Cat Tree with Scratching Post", "CurrentBid": 25, "NumberBids": 10, "Image": "https://target.scene7.com/is/image/Target/GUEST_3985506d-a8fc-4ecb-857f-c42c201ddb16?wid=488&hei=488&fmt=pjpeg", "Status": "Active" },
          { "Name": "Custom Pet Portrait Session", "CurrentBid": 40, "NumberBids": 15, "Image": "https://impersonateme.com/cdn/shop/products/IMG_1105_1_1200x.heic?v=1677636219", "Status": "Active" },
          { "Name": "Aquarium Starter Kit", "CurrentBid": 35, "NumberBids": 11, "Image": "https://assets.wfcdn.com/im/99910633/compr-r85/1641/164113096/aquarium-starter-kit.jpg", "Status": "Active" },
          { "Name": "Pet Grooming Voucher", "CurrentBid": 18, "NumberBids": 7, "Status": "Active" },
          { "Name": "Bird Watching Kit", "CurrentBid": 22, "NumberBids": 9, "Status": "Active" },
          { "Name": "Reptile Habitat Set", "CurrentBid": 28, "NumberBids": 14, "Status": "Active" },
          { "Name": "Horseback Riding Experience", "CurrentBid": 50, "NumberBids": 20, "Status": "Active" },
          { "Name": "Exotic Fish Collection", "CurrentBid": 45, "NumberBids": 18, "Status": "Active" },
        ]
      ]
    },
    {
      "EventID": 2,
      "Name": "Chicago Kids Shelter",
      "Title": "Fall Auction Drive",
      "Description": "EAS's annual fall event benefiting golden retrievers",
      "Link": "eas.org",
      "Logo": "Logo",
      "Goal": 20000,
      "Progress": 10000,
      "ActiveAuctions": 2,
      "ClosedAuctions": 2,
      "StartDate": "11/20/23",
      "EndDate": "12/01/23",
      "PhoneNumber":"630-111-1234",
      "Items": [ 
          { "Name": "Children's Book Set", "CurrentBid": 25, "NumberBids": 7, "Image": "https://m.media-amazon.com/images/I/81AorR2jIEL._AC_UF1000,1000_QL80_.jpg", "Status": "Active" },
          { "Name": "Toy Train Playset", "CurrentBid": 20, "NumberBids": 5, "Image": "https://i5.walmartimages.com/seo/Toy-Train-Set-Kids-Battery-Operated-Sounds-Lights-Santa-Claus-Christmas-Holiday-Under-The-Tree-Great-Gift-Idea-Boys-Girls-Toddlers_91838d3a-8761-4a1c-b14d-665df35f0523.51f076548d698acd214462c678b3212b.jpeg", "Status": "Active" },
          { "Name": "Interactive Learning Tablet", "CurrentBid": 30, "NumberBids": 10, "Image": "https://m.media-amazon.com/images/I/81OLBhCiZ6L.jpg", "Status": "Active" },
          { "Name": "Art Supplies Kit", "CurrentBid": 15, "NumberBids": 8, "Image": "https://i5.walmartimages.com/seo/Triani-150Pcs-Kids-Art-Supplies-Portable-Painting-Drawing-Kit-Oil-Pastels-Crayons-Colored-Pencils-Watercolor-Pens-Set-Girls-Boys-Teens-3-12_2f6f765f-a356-438e-9e6b-7f176893a6f5.b6db73640d95587aa4ea7669ee1866fb.jpeg", "Status": "Active" },
          { "Name": "Outdoor Adventure Backpack", "CurrentBid": 35, "NumberBids": 12, "Image": "https://i.ebayimg.com/images/g/CAIAAOSwo2digslq/s-l1200.webp", "Status": "Active" },
          { "Name": "Superhero Costume Set", "CurrentBid": 28, "NumberBids": 9, "Status": "Active" },
          { "Name": "Board Game Bundle", "CurrentBid": 22, "NumberBids": 6, "Status": "Active" },
          { "Name": "Musical Instrument Kit", "CurrentBid": 40, "NumberBids": 15, "Status": "Active" },
          { "Name": "Kids' Movie Night Package", "CurrentBid": 18, "NumberBids": 11, "Status": "Active" },
          { "Name": "LEGO Building Blocks Set", "CurrentBid": 32, "NumberBids": 14, "Status": "Active" },
        
      ]
    }
  ];

  return (
    <div>
      <Header />
      <Container maxWidth="sm">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore_feed" element={<ExplorePage aucs_list={aucs_list}/>} />
            <Route path="/your_bids" element={<YourBids />} />
            <Route path="/auction_page" element={<AuctionPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
