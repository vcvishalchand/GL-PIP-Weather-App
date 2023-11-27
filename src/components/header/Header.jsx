import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Avatar } from '@mui/material';
import { WbSunny } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import SearchCity from '../SearchCity';

const Header = ({ weatherData, handleSearch, searchBox = true } = {}) => {
    
    return (
        <AppBar position="static">
            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <Toolbar>
                        <Link to="/">
                            <Avatar style={{ marginRight: 10 }}>
                                <WbSunny />
                            </Avatar>
                        </Link>
                        <Typography variant="h6"> Weather App</Typography>
                    </Toolbar>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Toolbar>
                        {weatherData && <Typography variant="h8">{`${weatherData?.name} ${weatherData?.sys?.country} ${Math.round(weatherData?.main?.temp)}`}&#8451;</Typography>}
                    </Toolbar>
                </Grid>
                <Grid item xs={12} md={6}>
                    {searchBox && <SearchCity handleSearch={handleSearch} />}
                </Grid>

            </Grid>
        </AppBar>
    );
};

export default Header;
