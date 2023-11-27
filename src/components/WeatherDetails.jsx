import React from 'react';
import { Typography, Grid, CardHeader, CardContent, CardActions, Button, Divider } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import moment from 'moment';
import InfoSection from './InfoSection';
import { Title } from '../constants/Constants';

const WeatherInfo = (props) => {

    const { wind, main, dt, visibility, clouds } = props?.weatherData;

    return (
        <Grid>
            <CardHeader title={
                <div>
                    <Typography variant="subtitle2" component="div">
                        CURRENT WEATHER DETAILS
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
                        <InfoSection title={Title.MAX_UV_INDEX} value={wind?.deg} />
                        <InfoSection title={Title.WIND} value={wind?.deg} />
                        <InfoSection title={Title.WIND_GUSTS} value={wind?.gust} />
                        <InfoSection title={Title.HUMIDITY} value={main?.humidity} />
                        <InfoSection title={Title.INDOOR_HUMIDITY} value={wind?.deg} show={false} />
                    </Grid>

                    {/* Right section */}
                    <Grid item xs={6}>
                        <InfoSection title={Title.DEW_POINT} value={wind?.deg} />
                        <InfoSection title={Title.PRESSURE} value={main?.pressure} />
                        <InfoSection title={Title.CLOUD_COVER} value={clouds?.all} />
                        <InfoSection title={Title.VISIBILITY} value={visibility} />
                        <InfoSection title={Title.CLOUD_CEILING} value={main?.feels_like} show={false} />
                    </Grid>
                </Grid>
            </CardContent >
        </Grid >
    );
};

export default WeatherInfo;
