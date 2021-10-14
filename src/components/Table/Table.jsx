import React from 'react'
import {Card, CardContent, Typography, Grid} from '@mui/material';

function Table() {
    return (
        <div>
            <Grid container justify="center">
                <Grid item component={Card} xs={12} md={12}>
                    <CardContent>
                        <Typography variant="h5">Live Cases by Country</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Table
