import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid, CardHeader, CardContent, CardActions, Button } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import moment from 'moment';
import InfoSection from './InfoSection';
import { Title, CURRENT_WEATHER } from '../constants/Constants'
import { FirstLetterCaps } from '../utils/Utils'


const WeatherInfo = (props) => {

    const { wind, weather, main, dt } = props?.weatherData;

    return (
        <Grid>
            <CardHeader title={
                <div>
                    <Typography variant="subtitle2" component="div">
                        {CURRENT_WEATHER}
                    </Typography>
                    <Typography variant="subtitle2" component="div">
                        <strong>{moment.unix(dt).format('hh:mm A')}</strong>
                    </Typography>
                </div>
            } />
            <CardContent>
                <Grid container spacing={4}>
                    {/* Left section */}
                    <Grid item xs={6}>
                        <Grid container direction="column" alignItems="center">
                            <Typography variant="h2" color="textSecondary">
                                <CloudIcon fontSize="inherit" sx={{ fontSize: '0.7em', color: 'primary' }} /> {Math.round(main?.temp)} &#8451;
                            </Typography>
                        </Grid>
                    </Grid>

                    {/* Right section */}
                    <Grid item xs={6}>
                        <InfoSection title={Title.AIR_QUALITY} value={wind?.deg} />
                        <InfoSection title={Title.WIND} value={wind?.speed} />
                        <InfoSection title={Title.WIND_GUSTS} value={wind?.gust} show={false} />
                    </Grid>

                </Grid>
            </CardContent >
            <CardActions>
                <Grid container justifyContent="space-between">
                    <Typography variant="subtitle1" color="textSecondary" style={{ marginTop: 5, marginLeft: 9 }}>
                        {FirstLetterCaps(weather[0]?.description)}
                    </Typography>
                    <Button size="small" endIcon={<ArrowForwardIcon />}>
                        <Link to="/weather/details" state={props}>MORE DETAILS</Link>
                    </Button>
                </Grid>
            </CardActions>
        </Grid >
    );
};

export default WeatherInfo;
