import React from 'react';
import { useState, useEffect } from "react";
import { Button, Container } from "@mui/material";
import { Stack } from "@mui/system";
import Banner from "../Banner/Banner";
import { AuctionCard } from "../AuctionCard/AuctionCard";
import InfoDialog from '../Dialog/Dialog';
import DialogContentText from '@mui/material/DialogContentText';
import './ExplorePage.css'
import { SearchBar } from '../SearchBar/SearchBar';
import { useState } from "react";

const ExplorePage = ({ aucs_list }) => {
    const [description, SetDescription] = useState("");
    const [openDescription, setOpenDescription] = useState(false);

    const handleClickOpenDescription = (list_item) => {
        const auction_desciption = list_item.Description;
        SetDescription(auction_desciption);
        setOpenDescription(true);
    };

    const handleCloseDescription = () => {
        setOpenDescription(false);
    };

    return (
        <Container>
            <InfoDialog
                title={"About"}
                open={openDescription}
                handleClose={handleCloseDescription}
            >
                <div>
                    <DialogContentText>
                        {description}
                    </DialogContentText>
                </div>
            </InfoDialog>

            <Container maxWidth="sm">
                <SearchBar setFilteredAuctions={setFilteredAuctions} aucs_list={aucs_list}/>
                <Stack spacing={2} className="feed-stack">
                    {aucs_list &&
                        Object.values(filteredAuctions)
                            .map((item, index) => (
                                <AuctionCard
                                    key={index}
                                    auctionInfo={item}
                                    handleOpenDescription={() => handleClickOpenDescription(item)} />
                            ))}
                </Stack>
            </Container>
            <Banner currentPage={"explore_feed"} />
        </Container>
    )
}

export default ExplorePage