import React, {useEffect} from 'react'

import styles from './Chart.module.css';

import {Card, CardContent, Typography, Grid} from '@mui/material';

import {Line} from 'react-chartjs-2';

function Chart({setCasesChartData, casesChartData, selection, setDeathChartData, deathChartData}) {
    const organiseChartData = (data, casesType = selection) => {
        const chartDataArray = [];
        let lastDataPoint;
        for(let date in data.cases) {
            if (lastDataPoint){
                const newDataPoint = {
                    x: date,
                    y: data[casesType][date] - lastDataPoint
                }
                chartDataArray.push(newDataPoint);
            }
            lastDataPoint = data[casesType][date];
        }
        console.log(chartDataArray);
        return chartDataArray;
}


    useEffect(() => {
        const getHistoricalData = async () => {
            await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
                .then((response) => response.json())
                .then((data) => {
                    var selection = "cases";
                    var casesChartDataArray = organiseChartData(data, selection);
                    setCasesChartData(casesChartDataArray);
                    var selection = "deaths";
                    var deathChartDataArray = organiseChartData(data, selection);
                    setDeathChartData(deathChartDataArray);
                    
                })
        }
        getHistoricalData();
    },[]);

    return (
        <div className={styles.chartContainer}>
            <Grid container justify="center">
                <Grid item component={Card} xs={12} md={12} className={styles.card}>
                    <CardContent>
                        <Typography variant="h5">Worldwide New Cases and Deaths</Typography>
                        {casesChartData?.length > 0 && (
                            <div>
                                <Line 
                                data={{
                                    datasets: [{
                                        backgroundColor: "rgba(92, 151, 191, 1)",
                                        borderColor: "#5333ed",
                                        data: casesChartData,
                                        label: "Cases",
                                    },{
                                        backgroundColor: "rgba(226, 106, 106, 1)",
                                        borderColor: "#CC1034",
                                        data: deathChartData,
                                        label: "Deaths",
                                    }
                                   
                    
                                ],
                                }}
                                height={200}
                                width={400}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive: true,
                                
                                }}
                                />
                            </div>
                        )}
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Chart
