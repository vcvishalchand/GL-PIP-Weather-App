import React from 'react';
import { AppBar, Container, CssBaseline, Card, Toolbar, Typography, Grid, Paper, Avatar } from '@mui/material';
import { Cloud, WbSunny, Opacity } from '@mui/icons-material';
import SearchCity from '../components/SearchCity';
import WeatherDetails from '../components/WeatherDetails';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const WeatherDetailPage = (props) => {

  const navigate = useNavigate();
  const location = useLocation();
  const { weatherData } = location?.state;

  const handleSearch = () => {
    navigate(-1);
  };

  return (
    <div>
      <CssBaseline />
      <Header weatherData={weatherData} handleSearch={handleSearch} />
      <Container>
        <Grid container spacing={3} style={{ marginTop: '20px', height: '75vh' }}>
          <Grid item xs={12} md={6}>
            <Card>
              <WeatherDetails weatherData={weatherData} />
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default WeatherDetailPage;
