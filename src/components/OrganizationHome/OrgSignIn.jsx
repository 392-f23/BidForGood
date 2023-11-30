import {
    Stack,
    TextField,
    Button,
    Alert,
} from "@mui/material";
import "./Org.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const OrgSignIn = () => {
    const [username, setUsername] = useState("PuppiesRUs");
    const [password, setPassword] = useState("iheartpuppies");
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const submitForm = () => {
        if (
            username === "" ||
            password === ""
        ) {
            setShowAlert(true);
            return;
        }

        setShowAlert(false);
        navigate("/org_current_auction");
    };

    const handleNewSignUp = () => {
        navigate("/org_signup");
    }

    return (
        <Stack spacing={3} style={{ padding: 20}}>
            <h2 className="sign-up-title">Organization Sign In</h2>

            {showAlert && (
                <Alert severity="error">Fill in all required fields.</Alert>
            )}

            <TextField
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                id="outlined-basic"
                placeholder="Username"
                variant="outlined"
                label="Username"
                required
            />

            <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    // placeholder="Password"
                    label="Password"
                    required
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>

            <Button sx={{backgroundColor:'green'}} className="signin-btn" onClick={submitForm} variant="contained">
                Sign In
            </Button>

            <h4 className="signup-btn" onClick={handleNewSignUp}>Sign Up</h4>
        </Stack>
    );
};
