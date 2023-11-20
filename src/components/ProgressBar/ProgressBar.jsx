import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function LinearProgressWithLabel({ darkMode, value }) {
    return (
        <Box sx={{width: '100%'}}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ mr: 2 }}>
                    <Typography sx={{ ml: 0, mt: 0.5 }} variant="body1" color={darkMode ? "white" : "black"}>Progress</Typography>
                </Box>
                <Box sx={{ width: '100%', mr: 1, mt: 0.5 }}>
                    <Box
                        sx={{
                            width: '100%',
                            height: "1rem",
                            mr: 1,
                            bgcolor: 'rgb(255, 255, 255)',
                            verticalAlign: "middle",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <LinearProgress sx={{
                            backgroundColor: 'white',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: 'green'
                            },
                            ml: 0.4,
                            mr: 1,
                            height: "0.6rem"
                        }}
                            variant="determinate" {...{value: value}} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    darkMode: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};