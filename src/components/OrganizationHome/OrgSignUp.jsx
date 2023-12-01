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

export const OrgSignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [orgName, setOrgName] = useState("");
    const [website, setWebsite] = useState("");
    const [logo, setLogo] = useState("");

    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const submitForm = () => {
        if (
            username === "" ||
            password === "" ||
            orgName === ""
        ) {
            setShowAlert(true);
            return;
        }

        setShowAlert(false);
        navigate("/org_current_auction");
    };

    return (
        <Stack spacing={3} style={{ padding: 20 }}>
            <h2 className="sign-up-title">Organization Sign Up</h2>

            {showAlert && (
                <Alert severity="error">Fill in all required fields.</Alert>
            )}

            <TextField
                onChange={(e) => setOrgName(e.target.value)}
                value={orgName}
                id="outlined-basic"
                placeholder="Organization Name"
                variant="outlined"
                label="Organization Name"
                required
            />

            <TextField
                onChange={(e) => setWebsite(e.target.value)}
                value={website}
                id="outlined-basic"
                placeholder="Organization Website"
                variant="outlined"
                label="Organization Website"
            />

            <TextField
                onChange={(e) => setLogo(e.target.value)}
                value={logo}
                id="outlined-basic"
                placeholder="Organization Logo"
                variant="outlined"
                label="Organization Logo"
            />

            <TextField
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                id="outlined-basic"
                placeholder="Username"
                variant="outlined"
                label="Username"
                required
            />

            <TextField
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="outlined-basic"
                placeholder="Password"
                variant="outlined"
                label="Password"
                required
            />

            <Button onClick={submitForm} variant="contained">
                Sign In
            </Button>
        </Stack>
    );
};
