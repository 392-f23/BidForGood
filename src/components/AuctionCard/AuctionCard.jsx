import React, { useEffect, useState } from 'react'
import { Container, Paper, Button, Chip, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./AuctionCard.css";
import { Link, useNavigate } from "react-router-dom";
import { LinearProgressWithLabel } from '../ProgressBar/ProgressBar';
import ImageSlider from '../ImageSlider/ImageSlider';
import car from '../../images/car.jpg';
import teddy from '../../images/teddy.jpg';
import trip from '../../images/trip.jpeg';

export const AuctionCard = ({ auctionInfo, handleOpenDescription, }) => {

  let images = auctionInfo.Items.map(x=> x.Image)
  const [auctionImages, setAuctionImages] = useState(images);
  const [current, setCurrent] = useState(0);

  useEffect(()=> {
    if (auctionInfo.Items){
    setAuctionImages(auctionInfo.Items.map(x=> x.Image))
    }
  }, [auctionInfo])

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

  const progress = auctionInfo.Progress / auctionInfo.Goal * 100;

  const nextSlide = () => {
    let length = auctionImages.length;
    if (length > 1) {
      let curr = current === length - 1 ? 0 : current + 1;
      setCurrent(curr);
    }
  };

  const prevSlide = () => {
    let length = auctionImages.length;
    if (length > 1) {
      let curr = current === 0 ? length - 1 : current - 1;
      setCurrent(curr);
    }
  };

  console.log(auctionImages, auctionInfo.Name, auctionInfo)


  return (
    <Item className="post-item">
      <div className='post-info'>
        <div className='left-div'>
          <h2 className="post-title"> {auctionInfo.Title} </h2>
          <div className='org-div'>
            <Avatar
              className="profile-pic"
              sx={{ width: 25, height: 25, marginBottom: ".5rem" }}
              src={auctionInfo.Logo ? auctionInfo.Logo : ""}
            ></Avatar>
            <h3> {auctionInfo.Name} </h3>
          </div>
          <p className='post-text description-link' onClick={handleOpenDescription}>See Description</p>
          <p className='post-text'>Starts: {auctionInfo.StartDate} </p>
          <p className='post-text'>Ends: {auctionInfo.EndDate} </p>
          <div>
            <LinearProgressWithLabel value={progress} />
            <p className='post-text'> ${auctionInfo.Progress} / ${auctionInfo.Goal}</p>
          </div>
          <p className='post-text'>Active Auctions: {auctionInfo.ActiveAuctions}</p>
        </div>
        <div className='right-div'>
          <ImageSlider
            imagePath={auctionImages[current]}
            onRightClick={nextSlide}
            onLeftClick={prevSlide}
            arrows={auctionImages.length > 1} />
        </div>
        </div>
        <div className='bottom-div'>
          <Button className='enter-button' variant="contained" onClick={() => handleClick(auctionInfo)}>
            Enter
          </Button>
        </div>
    </Item>
  )
}