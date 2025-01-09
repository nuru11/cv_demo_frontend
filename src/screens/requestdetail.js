import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Chip,
  Divider,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import Header from "../screens/header";

const DetailPage = () => {
  const id = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = `https://testcvapi.ntechagent.com/api/agentsrequest/${id.id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_URL]);

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h6">Loading...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth={false} style={{ padding: '0 ' }}>
      <Header />
      <Container maxWidth="md" sx={{ mt: 4, background: "" }}>
        <Typography variant="h4" gutterBottom>
          Worker Details
        </Typography>
        <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: 3, background: "" }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Agent: {data.agent}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={12}>
                <Typography variant="body1"><strong>Age:</strong> {data.age}</Typography>
                <Typography variant="body1"><strong>Marital Status:</strong> {data.maritalStatus}</Typography>
                <Typography variant="body1"><strong>Education:</strong> {data.educationAttainment}</Typography>
                <Typography variant="body1"><strong>Position:</strong> {data.position}</Typography>
                <Typography variant="body1"><strong>Arabic Degree:</strong> {data.arabicDegree}</Typography>
                <Typography variant="body1"><strong>English Degree:</strong> {data.englishDegree}</Typography>
                <Typography variant="body1"><strong>Experienced:</strong> {data.experienced}</Typography>
              </Grid>
            </Grid>



           
            {data.message && <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Message
            </Typography>}
           {data.message && <Grid container spacing={2} justifyContent="left" alignItems="center">
              <Grid item xs={12}>
                <div style={{ 
                  wordWrap: "break-word", 
                  overflowWrap: "break-word", 
                  overflow: "hidden", 
                  maxWidth: "100%", 
                  whiteSpace: "pre-wrap"
                }}>
                  {data.message}
                </div>
              </Grid>
            </Grid>}

            {/* {data.babySitting === "false" && 
            data.cleaning === "false" && 
            data.washing === "false" && 
            data.cooking === "false" && 
            data.elderCare === "false" && 
            data.ironingClothes === "false" && 
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Services Required
            </Typography>} */}
            {
            [data.babySitting, data.cleaning, data.washing, data.cooking, data.elderCare, data.ironingClothes].some(entry => entry === "true") ?
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Services Required
            </Typography> :
            <div></div>

            }
            <Grid container spacing={2}>
              {data.babySitting === "true" && (
                <Grid item xs={12} sm={6}>
                  <Chip label="Baby Sitting" color="primary" />
                </Grid>
              )}
              {data.cleaning === "true" && (
                <Grid item xs={12} sm={6}>
                  <Chip label="Cleaning" color="primary" />
                </Grid>
              )}
              {data.washing === "true" && (
                <Grid item xs={12} sm={6}>
                  <Chip label="Washing" color="primary" />
                </Grid>
              )}
              {data.cooking === "true" && (
                <Grid item xs={12} sm={6}>
                  <Chip label="Cooking" color="primary" />
                </Grid>
              )}
              {data.elderCare === "true" && (
                <Grid item xs={12} sm={6}>
                  <Chip label="Elder Care" color="primary" />
                </Grid>
              )}
              {data.ironingClothes === "true" && (
                <Grid item xs={12} sm={6}>
                  <Chip label="Ironing Clothes" color="primary" />
                </Grid>
              )}
            </Grid>

            <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => window.history.back()}>
              Back to List
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Container>
  );
};

export default DetailPage;