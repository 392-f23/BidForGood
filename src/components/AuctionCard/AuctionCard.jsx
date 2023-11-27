import React, { useEffect, useState } from 'react'
import { Container, Paper, Button, Chip, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./AuctionCard.css";
import { useNavigate } from "react-router-dom";
import { LinearProgressWithLabel } from '../ProgressBar/ProgressBar';
import ImageSlider from '../ImageSlider/ImageSlider';
import { auctionItemData } from '../../data/auctionItems';

export const AuctionCard = ({ auctionInfo, images, handleOpenDescription, }) => {
  const auctionItems = auctionInfo.Items;
  const auctionTitle = auctionInfo.AuctionName;
  const auctionLogo = auctionInfo.Logo;
  const orgName = auctionInfo.OrganizationName;
  const auctionStart = auctionInfo.StartDate;
  const auctionEnd = auctionInfo.EndDate;
  const auctionProgress = auctionInfo.TotalRaised;
  const auctionGoal = auctionInfo.Goal;
  const activeAuctions = auctionInfo.ActiveAuctions;

  const [auctionImages, setAuctionImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images) {
      // let images = auctionItemData[auctionItems].map(x => x.Image).filter(x => x != null);
      setAuctionImages(images);
    }
  }, [images])

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#abebbc",
    ...theme.typography.body2,
    textAlign: "left",
    padding: "1rem",
    color: theme.palette.text.secondary,
  }));
  const navigate = useNavigate();

  // data passing between pages: https://medium.com/@reidwilliamson2/usenavigate-and-uselocation-hooks-edb28f5e9972
  const handleClick = (data) => {
    navigate("/auction_page", { state: data });
  };

  const progress = auctionProgress / auctionGoal * 100;

  const nextSlide = () => {
    let length = auctionImages.length;
    if (length > 1) {
      let curr = currentImageIndex === length - 1 ? 0 : currentImageIndex + 1;
      setCurrentImageIndex(curr);
    }
  };

  const prevSlide = () => {
    let length = auctionImages.length;
    if (length > 1) {
      let curr = currentImageIndex === 0 ? length - 1 : currentImageIndex - 1;
      setCurrentImageIndex(curr);
    }
  };

  return (
    <Item className="post-item">
      <div className='post-info'>
        <div className='left-div'>
          <h2 className="post-title"> {auctionTitle} </h2>
          <div className='org-div'>
            <Avatar
              className="profile-pic"
              sx={{ width: 25, height: 25, marginBottom: ".5rem" }}
              src={auctionLogo ? auctionLogo : ""}
            ></Avatar>
            <h3> {orgName} </h3>
          </div>
          <p className='post-text description-link' onClick={handleOpenDescription}>See Description</p>
          <p className='post-text'>Starts: {auctionStart} </p>
          <p className='post-text'>Ends: {auctionEnd} </p>
          <div>
            <LinearProgressWithLabel value={progress} darkMode={false}/>
            <p className='post-text'> ${auctionProgress} / ${auctionGoal}</p>
          </div>
          <p className='post-text'>Active Auctions: {activeAuctions}</p>
        </div>
        {auctionImages.length > 0 &&
          <div className='right-div'>
            <ImageSlider
              imagePath={auctionImages[currentImageIndex]}
              onRightClick={nextSlide}
              onLeftClick={prevSlide} 
              arrows={auctionImages.length > 1} />
          </div>
        }
      </div>
      <div className='bottom-div'>
        <Button className='enter-button mui-btn' variant="contained" onClick={() => handleClick(auctionInfo)}>
          Enter
        </Button>
      </div>
    </Item>
  )
}