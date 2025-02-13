import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
  Box,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

import Header from "../../screens/header"; 




const Signup = () => {
  const agentName2 = localStorage.getItem('userdata');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [agentName, setAgentName] = useState('');
  const [selectedAgent, setSelectedAgent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

 

  const agents = ['Wahat', 'Tamkeen', 'Hulul', 'mawahib', 'Tawziif ', 'Najah'];

  const handleAgentChange = (event) => {
    const { value } = event.target;
    setSelectedAgent(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!selectedAgent) {
      setError('Please select an agent.');
      setOpenSnackbar(true);
      return;
    }

    setAgentName(selectedAgent); // Set agentName to the selected agent

    try {
      const response = await fetch(`https://testcvapi.ntechagent.com/api/auth/register?agentname=${agentName2}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          isAdmin: false, 
          agentName: selectedAgent
        }),
      });

      if (response.ok) {
        setSuccess('Signup successful! You can now log in.');
        // Optionally redirect to login page
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Signup failed');
      }
    } catch (error) {
      setError('An error occurred, please try again.');
    } finally {
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth={false} style={{ padding: '0 ' }}>
      {/* <div>{isAdmin}  dddddddddd</div> */}
      <Header />
      <Container maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Box sx={{ width: '100%', padding: 3, boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
          <Typography variant="h5" align="center" gutterBottom>
            Add Agent
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
           
            <Typography variant="subtitle1" gutterBottom>
              Select an Agent:
            </Typography>
            {agents.map((agent) => (
              <FormControlLabel
                key={agent}
                control={
                  <Checkbox
                    checked={selectedAgent === agent}
                    value={agent}
                    onChange={handleAgentChange}
                  />
                }
                label={agent}
              />
            ))}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Sign Up
            </Button>
          </form>

          <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
            <Alert onClose={handleCloseSnackbar} severity={error ? 'error' : 'success'}>
              {error || success}
            </Alert>
          </Snackbar>
        </Box>
      </Container>
    </Container>
  );
};

export default Signup;