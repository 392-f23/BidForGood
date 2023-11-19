import React from 'react';
import { Button, Container } from "@mui/material";
import { Stack } from "@mui/system";
import Banner from "../Banner/Banner";
import { AuctionCard } from "../AuctionCard/AuctionCard";
import './ExplorePage.css'
import { SearchBar } from '../SearchBar/SearchBar';
import { useState } from "react";

const ExplorePage = ({aucs_list}) => {
    const [filteredAuctions, setFilteredAuctions] = useState(aucs_list);

    return (
        <Container>
            <Container maxWidth="sm">
                <SearchBar setFilteredAuctions={setFilteredAuctions} aucs_list={aucs_list}/>
                <Stack spacing={2} className="feed-stack">
                    {aucs_list &&
                        Object.values(filteredAuctions)
                            .map((item, index) => (
                                <AuctionCard
                                    key={index}
                                    auctionInfo={item}/>
                            ))}
                </Stack>
            </Container>
            <Banner currentPage={"explore_feed"} />
        </Container>
    )
}

export default ExplorePage