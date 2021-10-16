import React, {useEffect} from 'react'
import {Card, CardContent, Typography, Grid} from '@mui/material';
import styles from './table.module.css';
import CountUp from 'react-countup';


function Table({tableData}) {
    return (
        <div>
            <Grid container justify="center">
                <Grid item component={Card} xs={12} md={12} ml={3.15} mr={3.15}>
                    <CardContent>
                        <Typography variant="h5">Live Cases by Country</Typography>
                            <div className={styles.table}>
                            {tableData.map(country => (
                                <tr>
                                    <td><Typography color="textSecondary">{country.country}</Typography></td>
                                    <td><Typography color="textSecondary"><strong><CountUp start={0} end={country.cases} duration={2.5} separator=","/></strong></Typography></td>
                                </tr>
                            ))}
                            </div>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Table
