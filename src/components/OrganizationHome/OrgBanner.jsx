import * as React from "react";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Link } from "react-router-dom";
import ExploreIcon from '@mui/icons-material/Explore';
import PaidIcon from '@mui/icons-material/Paid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const OrgBanner = ({ currentPage }) => {
    return (
        <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100 }}
            elevation={3}
        >
            <BottomNavigation showLabels>
                <BottomNavigationAction
                    className="org-banner-icon"
                    label="Current Auction"
                    component={Link}
                    icon={<ExploreIcon />}
                    style={{ color: `${currentPage === "org_current_auction" ? "darkgreen" : "gray"}` }}
                    to="/org_current_auction"
                />
                <BottomNavigationAction
                    className="org-banner-icon"
                    label="Profile"
                    component={Link}
                    icon={<AccountCircleIcon />}
                    style={{ color: `${currentPage === "org_profile" ? "darkgreen" : "gray"}` }}
                    to="/org_profile"
                />
                <BottomNavigationAction
                    className="org-banner-icon"
                    label="Past Auctions"
                    component={Link}
                    icon={<PaidIcon />}
                    style={{ color: `${currentPage === "org_past_auctions" ? "darkgreen" : "gray"}` }}
                    to="/org_past_auctions"
                />
            </BottomNavigation>
        </Paper>
    );
};

export default OrgBanner;
