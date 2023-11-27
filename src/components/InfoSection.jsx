import React from 'react';
import { Typography, Grid, Divider } from '@mui/material';

const InfoSection = ({ title, value, show = true }) => {

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="body1" color="textSecondary">
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body1" color="textSecondary" style={{ textAlign: 'right' }}>
                        {value}
                    </Typography>
                </Grid>

            </Grid>
            {show && <Divider style={{ margin: '10px 0' }} />}
        </>
    );
};

export default InfoSection;
