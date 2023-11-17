import React from 'react';
import { Button, Container } from "@mui/material";
import { Stack } from "@mui/system";
import Banner from "../Banner/Banner";
import { AuctionCard } from "../AuctionCard/AuctionCard";
import './ExplorePage.css'

const ExplorePage = ({orgs_list}) => {


    return (
        <Container>
            <Container maxWidth="sm">
                <Stack spacing={2} className="feed-stack">
                    {orgs_list &&
                        Object.values(orgs_list)
                            .map((item, index) => (
                                <AuctionCard
                                    key={index}
                                    orgInfo={item}/>
                            ))}
                </Stack>
            </Container>
            <Banner currentPage={"explore_feed"} />
        </Container>
    )
}

export default ExplorePage