//Material UI
import {Card, CardContent, Typography, Grid} from '@mui/material';

//Styles
import styles from './table.module.css';

//Count up library 
import CountUp from 'react-countup';

//Maps case data related to country into a table
function Table({tableData}) {
    return (
        <div>
            <Grid container justify="center">
                <Grid item component={Card} xs={12} md={12} className={styles.card}>
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
