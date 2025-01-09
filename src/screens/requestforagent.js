import React, { useState } from 'react';
import {
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Container,
} from '@mui/material'; 

import Alert from "@mui/material/Alert"
import Snackbar from "@mui/material/Snackbar"
import Header from "../screens/header"

const MyForm = () => {
  const [age, setAge] = useState('any');
  const [customAge, setCustomAge] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('any');
  const [educationAttainment, setEducationAttainment] = useState('any');
  const [position, setPosition] = useState('Housemaid');
  const [customPosition, setCustomPosition] = useState('');
  const [arabicDegree, setArabicDegree] = useState('any');
  const [englishDegree, setEnglishDegree] = useState('any');
  const [experienced, setExperienced] = useState('any');
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const agentName = localStorage.getItem('userdata');

  const [services, setServices] = useState({
    babySitting: 'false',
    cleaning: 'false',
    washing: 'false',
    cooking: 'false',
    elderCare: 'false',
    ironingClothes: 'false',
  });

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
    if (event.target.value !== 'Housemaid and Driver') {
      setCustomPosition('');
    }
  };

  const handleServiceChange = (event) => {
    const { name, checked } = event.target;
    setServices((prev) => ({ ...prev, [name]: checked ? 'true' : 'false' }));
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const requestData = {
      agent: agentName,
      age: age === 'other' ? customAge : age,
      maritalStatus,
      educationAttainment,
      position: position === 'other' ? customPosition : position,
      arabicDegree,
      englishDegree,
      experienced,
      babySitting: services.babySitting,
      cleaning: services.cleaning,
      washing: services.washing,
      cooking: services.cooking,
      elderCare: services.elderCare,
      ironingClothes: services.ironingClothes,

      message
    };

    try {
      const response = await fetch('https://testcvapi.ntechagent.com/api/agentsrequestpost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Data posted successfully:', data);
      setSuccess('Data posted successfully!');
      setOpenSnackbar(true);
      setMessage("")


      setAge("any")
      // setCustomAge("")
      setMaritalStatus("any")
      setEducationAttainment("any")
      setPosition('housemaid')
      setArabicDegree("any")
      setEnglishDegree("any")
      setExperienced("any")

      services.babySitting = "false"
      services.cleaning = "false"
      services.washing = "false"
      services.cooking = "false"
      services.elderCare = "false"
      services.ironingClothes = "false"




      // Optionally, reset the form or show a success message
    } catch (error) {
      console.error('Error posting data:', error);
      setError('Error posting data. Please try again.');
      setOpenSnackbar(true);
    }
  };

  return (
    <Container maxWidth={false} style={{ padding: '0 ' }}>
    <Header /> 
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
      <Typography variant="h5" gutterBottom>Request Worker</Typography>
      {/* <div>{services.babySitting}</div> */}
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel>Age</InputLabel>
          <Select value={age} onChange={(e) => setAge(e.target.value)}>
            <MenuItem value="any">Any</MenuItem>
            <MenuItem value="18-25">18-25</MenuItem>
            <MenuItem value="26-35">26-35</MenuItem>
            <MenuItem value="36-45">36-45</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>

        {age === 'other' && (
          <TextField
            fullWidth
            margin="normal"
            label="Specify Age"
            value={customAge}
            onChange={(e) => setCustomAge(e.target.value)}
          />
        )}

        <FormControl fullWidth margin="normal">
          <InputLabel>Marital Status</InputLabel>
          <Select value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)}>
            <MenuItem value="any">Any</MenuItem>
            <MenuItem value="married">Married</MenuItem>
            <MenuItem value="single">Single</MenuItem>
            <MenuItem value="divorced">Divorced</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Education Attainment</InputLabel>
          <Select value={educationAttainment} onChange={(e) => setEducationAttainment(e.target.value)}>
            <MenuItem value="any">Any</MenuItem>
            <MenuItem value="PRIMARY_SCHOOL">Primary School</MenuItem>
            <MenuItem value="SECONDARY_SCHOOL">Secondary School</MenuItem>
            <MenuItem value="HIGH_SCHOOL">High School</MenuItem>
            <MenuItem value="BACHELORS">Bachelor's Degree</MenuItem>
            <MenuItem value="MASTERS">Master's Degree</MenuItem>
            <MenuItem value="phd">PhD</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Position</InputLabel>
          <Select value={position} onChange={handlePositionChange}>
            <MenuItem value="Housemaid">Housemaid</MenuItem>
            <MenuItem value="Driver">Driver</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>

        {position === 'other' && (
          <TextField
            fullWidth
            margin="normal"
            label="Specify Position"
            value={customPosition}
            onChange={(e) => setCustomPosition(e.target.value)}
          />
        )}

        <FormControl fullWidth margin="normal">
          <InputLabel>Arabic Degree</InputLabel>
          <Select value={arabicDegree} onChange={(e) => setArabicDegree(e.target.value)}>
            <MenuItem value="any">Any</MenuItem>
            <MenuItem value="Poor">Poor</MenuItem>
            <MenuItem value="Good">Good</MenuItem>
            <MenuItem value="beginner">Beginner</MenuItem>
            <MenuItem value="intermediate">Intermediate</MenuItem>
            <MenuItem value="fluent">Fluent</MenuItem>
            <MenuItem value="native">Native</MenuItem>
            <MenuItem value="advanced">Advanced</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>English Degree</InputLabel>
          <Select value={englishDegree} onChange={(e) => setEnglishDegree(e.target.value)}>
            <MenuItem value="any">Any</MenuItem>
            <MenuItem value="Poor">Poor</MenuItem>
            <MenuItem value="Good">Good</MenuItem>
            <MenuItem value="beginner">Beginner</MenuItem>
            <MenuItem value="intermediate">Intermediate</MenuItem>
            <MenuItem value="fluent">Fluent</MenuItem>
            <MenuItem value="native">Native</MenuItem>
            <MenuItem value="advanced">Advanced</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Experienced</InputLabel>
          <Select value={experienced} onChange={(e) => setExperienced(e.target.value)}>
            <MenuItem value="any">Any</MenuItem>
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="NO">No</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          margin="normal"
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          multiline
          rows={4}
        />

        <Box sx={{ border: '1px solid #ccc', padding: 2, borderRadius: 2, marginTop: 3 }}>
          <Typography variant="h6">Services Required</Typography>
          <FormControlLabel
            control={
              <Checkbox
                name="babySitting"
                checked={services.babySitting === 'true'}
                onChange={handleServiceChange}
              />
            }
            label="Baby Sitting"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="cleaning"
                checked={services.cleaning === 'true'}
                onChange={handleServiceChange}
              />
            }
            label="Cleaning"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="washing"
                checked={services.washing === 'true'}
                onChange={handleServiceChange}
              />
            }
            label="Washing"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="cooking"
                checked={services.cooking === 'true'}
                onChange={handleServiceChange}
              />
            }
            label="Cooking"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="elderCare"
                checked={services.elderCare === 'true'}
                onChange={handleServiceChange}
              />
            }
            label="Elder Care"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="ironingClothes"
                checked={services.ironingClothes === 'true'}
                onChange={handleServiceChange}
              />
            }
            label="Ironing Clothes"
          />
        </Box>

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </Box>


     <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                    <Alert onClose={handleCloseSnackbar} severity={error ? 'error' : 'success'}>
                      {error || success}
                    </Alert>
                  </Snackbar>

    </Container>
  );
};

export default MyForm;