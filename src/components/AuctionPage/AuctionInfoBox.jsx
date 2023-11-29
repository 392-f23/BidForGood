import React from 'react';
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { LinearProgressWithLabel } from '../ProgressBar/ProgressBar';

export const AuctionInfoBox = ({ auctionInfo, timeLeft }) => {
    const auctionProgress = auctionInfo.TotalRaised;
    const auctionGoal = auctionInfo.Goal;
    const activeAuctions = auctionInfo.ActiveAuctions;
    const closedAuctions = auctionInfo.ClosedAuctions;

    const [progress, setProgress] = React.useState(
        (auctionProgress / auctionGoal) * 100
    );

    return (
        <Box
            sx={{
                borderRadius: 1,
                bgcolor: "rgb(17, 138, 49)",
                padding: "10px",
            }}
        >
            <LinearProgressWithLabel value={progress} darkMode={true} />

            <Box
                sx={{
                    ml: "15%",
                    color: "white",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        margin: "10px 0px",
                    }}
                >
                    <div>
                        ${auctionProgress} of {auctionGoal} raised
                    </div>
                    <div>
                        Auctions: {activeAuctions} Active |{" "}
                        {closedAuctions} Closed{" "}
                    </div>
                    <div style={{textAlign: 'center', color: 'white', margin: '.3rem 0 0 0', fontWeight: '600'}}>{timeLeft} Remaining</div>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "end",
                    justifyContent: "space-between",
                }}
            >
                <Button
                    variant="contained"
                    sx={{
                        fontSize: "0.75em",
                        justifyContent: "left",
                        backgroundColor: "rgb(42, 209, 86) !important",
                    }}
                    endIcon={<LocalPhoneIcon />}
                >
                    Contact
                </Button>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "right",
                    }}
                >
                    <Typography sx={{ mr: 0.5 }} variant="body1" color="white">
                        LIVE
                    </Typography>
                    <Brightness1Icon sx={{ color: "red" }} />
                </Box>
            </Box>
        </Box>
    )
}
