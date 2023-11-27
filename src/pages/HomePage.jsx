import React from 'react';
import {
  Container, CssBaseline, Card, CardHeader,
  CardContent, Typography, Grid
} from '@mui/material';
import SearchCity from '../components/SearchCity';
import { useNavigate, useLocation } from "react-router-dom";
import ErrorMessage from '../utils/ErrorMessage';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const HomePage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  // const { cod, message } = location.state || '';

  const handleSearch = (city) => {
    navigate('/weather', { state: city });
  };

  return (
    <div>
      <CssBaseline />
      <Header searchBox={false} />
      <Container>
        <Grid container justifyContent="center" alignItems="center" style={{ height: '75vh' }}>
          <Grid item>
            <Card sx={{ textAlign: 'center', padding: 5 }}>
              <CardHeader title={
                <div>
                  <Typography variant="h2" gutterBottom>
                    Welcome to Weather App
                  </Typography>
                  {(location.state == null) ?
                    <Typography variant="h5" gutterBottom>
                      Please Enter City name to get the Wearther Information
                    </Typography> :
                    <ErrorMessage message='Please Enter Valid City name' />}
                </div>
              } />
              <CardContent>
                <SearchCity handleSearch={handleSearch} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
