import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Menu, MenuItem, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Skywaylogo from "../image_placeholder/alwasit.png";

const Header = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userdata')
        navigate('/login');
    };

    const isAdmin = () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const payload = JSON.parse(atob(token.split('.')[1]));
                return payload.isAdmin || false;
            } catch (error) {
                console.error("Failed to decode token:", error);
                return false;
            }
        }
        return false;
    };

    const isLoggedIn = () => {
        return localStorage.getItem('token') !== null;
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleNavigation = (path) => {
        navigate(path);
        handleMenuClose(); // Close the menu after navigation
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="logo" onClick={() => handleNavigation('/')}>
                    <img src={Skywaylogo} alt="Client Logo" style={{ height: '40px' }} />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    My Application
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {isAdmin() && (
                        <>
                            <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
                            <Button color="inherit" onClick={() => navigate('/list')}>Applicants</Button>
                            <Button color="inherit" onClick={() => navigate('/requestlist')}>Request List</Button>
                            <Button color="inherit" onClick={() => navigate('/signup')}>Add Agent</Button>
                            <Button color="inherit" onClick={() => navigate('/reportlist')}>Report List</Button>
                            <Button color="inherit" onClick={() => navigate('/applicanthistory')}>Applicant History</Button>
                            <Button color="inherit" onClick={() => navigate('/setting')}>Settings</Button>
                        </>
                    )}

                    {!isAdmin() && isLoggedIn() && (
                        <>
                            {/* <Button color="inherit" onClick={() => navigate('/')}>Home</Button> */}
                            {/* <Button color="inherit" onClick={() => navigate('/list')}>Applicants</Button> */}
                            <Button color="inherit" onClick={() => navigate('/listforagent')}>Applicants</Button>
                            <Button color="inherit" onClick={() => navigate('/applicantsvideos')}>Applicants Videos</Button>
                            <Button color="inherit" onClick={() => navigate('/requestforagent')}>Add Request</Button>
                            {/* <Button color="inherit" onClick={() => navigate('/signup')}>Add Agent</Button> */}
                            {/* <Button color="inherit" onClick={() => navigate('/setting')}>Settings</Button> */}
                        </>
                    )}
                    {!isLoggedIn() && (
                        <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
                    )}
                    {isLoggedIn() && (
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    )}
                </Box>
                <Hidden mdUp>
                    <IconButton color="inherit" onClick={handleMenuClick}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        {isAdmin() && (
                            <>
                                <MenuItem onClick={() => handleNavigation('/')}>Home</MenuItem>
                                <MenuItem onClick={() => handleNavigation('/list')}>Applicants</MenuItem>
                                <MenuItem onClick={() => handleNavigation('/requestlist')}>Request List</MenuItem>
                                <MenuItem onClick={() => handleNavigation('/signup')}>Add User</MenuItem>
                                <MenuItem onClick={() => handleNavigation('/reportlist')}>Report List</MenuItem>
                                <MenuItem onClick={() => handleNavigation('/applicanthistory')}>Applicant History</MenuItem>
                                <MenuItem onClick={() => handleNavigation('/setting')}>Settings</MenuItem>
                                
                            </>
                        )}

                         {!isAdmin() && isLoggedIn() && (
                            <>
                                {/* <MenuItem onClick={() => handleNavigation('/')}>Home</MenuItem> */}
                                <MenuItem onClick={() => handleNavigation('/listforagent')}>Applicants</MenuItem>
                                <MenuItem onClick={() => handleNavigation('/applicantsvideos')}>Applicants Videos</MenuItem>
                                <MenuItem onClick={() => handleNavigation('/requestforagent')}>Add Request</MenuItem>
                                {/* <MenuItem onClick={() => handleNavigation('/signup')}>Add User</MenuItem> */}
                                {/* <MenuItem onClick={() => handleNavigation('/setting')}>Settings</MenuItem> */}
                            </>
                        )}
                        {!isLoggedIn() && (
                            <MenuItem onClick={() => handleNavigation('/login')}>Login</MenuItem>
                        )}
                        {isLoggedIn() && (
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        )}
                    </Menu>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default Header;