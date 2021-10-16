import React from 'react'
import {Card, CardContent, Typography, Grid} from '@mui/material';
import CountUp from 'react-countup';

import styles from './Cards.module.css'

function Cards({countryInfo}) {
    return (
        <div className={styles.cardContainer}>
            <Grid container justify="center">
                <Grid item component={Card} xs={12} md={3.25} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5"><CountUp start={0} end={countryInfo.cases} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>Today Infected: <CountUp start={0} end={countryInfo.todayCases} duration={2.5} separator=","/>
                        </Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3.25} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5"><CountUp start={0} end={countryInfo.recovered} duration={2.5} separator=","/></Typography>
                        <Typography color="textSecondary" gutterBottom>Today Recovered: <CountUp start={0} end={countryInfo.todayRecovered} duration={2.5}separator=","/></Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3.25} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5"><CountUp start={0} end={countryInfo.deaths} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>Today Deaths: <CountUp start={0} end={countryInfo.todayDeaths} duration={2.5} separator=","/>
                        </Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
