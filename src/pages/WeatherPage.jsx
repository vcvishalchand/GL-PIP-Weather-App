import React, { useState, useEffect } from 'react';
import { AppBar, Container, CssBaseline, Card, Toolbar, Typography, Grid, Avatar, Alert } from '@mui/material';
import { WbSunny } from '@mui/icons-material';
import SearchCity from '../components/SearchCity';
import WeatherInfo from '../components/WeatherInfo';
import getWeatherData from '../apiCall/WeatherService';
import Skeleton from '@mui/material/Skeleton';
import ToastNotification from '../components/ToastNotification';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const WeatherPage = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ msg: '', open: false });;
  const [city, setCity] = useState(location?.state);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWeatherData(city);
        const { message } = data;
        if (data?.cod !== 200) {
          navigate('/', { state: message });
          setError({ ...error, msg: message, open: true });
        }
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        // Handle error (e.g., show an error message)
        console.log('Error', error)
        navigate('/', { state: error?.response?.data });
        setError({ ...error, msg: error, open: true });
      }
    };

    fetchData();
  }, [city]);

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  const handleClose = () => {
    setError({ ...error, open: false });
  };

  return (
    <div>
      <CssBaseline />
      <Header weatherData={weatherData} handleSearch={handleSearch} searchBox={true} />
      <Container>
        <Grid container spacing={3} style={{ marginTop: '20px', height: '75vh' }}>
          <Grid item xs={12} md={6}>
            <Card>
              {loading ? (
                <div style={{ margin: 10 }}>
                  <Skeleton animation="wave" height={20} width="80%" style={{ marginBottom: 6 }} />
                  <Skeleton animation="wave" height={10} width="60%" />
                </div>
              ) : (
                <WeatherInfo weatherData={weatherData} />
              )}
            </Card>
          </Grid>
        </Grid>
        <ToastNotification data={error} handleClose={handleClose} />
      </Container>
      <Footer />
    </div>
  );
};

export default WeatherPage;
