import React from 'react'

//Styles
import styles from './Map.module.css';

//Leaflet CSS import
import 'leaflet/dist/leaflet.css';

//Map view import
import MapView from '../MapView/MapView';

//Count up library 
import CountUp from 'react-countup';

//Material UI
import {Card, CardContent, Typography, Grid, Select, MenuItem, InputLabel, FormControl, Button} from '@mui/material';

//Leaflet components import
import { MapContainer, TileLayer, Popup, Circle} from 'react-leaflet';

function Map({mapCenter, zoom, tableData, setMapData, mapData, circleColour, setCircleColour, circleRadius, setCircleRadius, setMapCenter, setZoom}) {

    //Change circle colour and radius on selection of cases, recovered or deaths
    
    const mapDataHandler = (event) => {
        setMapData(event.target.value);
        if(event.target.value === "cases"){
            setCircleColour("rgba(0, 0, 255, 0.5)")
            setCircleRadius(50);
        }
        else if(event.target.value === "recovered"){
            setCircleColour("rgba(0, 255, 0, 0.5)")
            setCircleRadius(50);
        }
        else if(event.target.value === "deaths"){
            setCircleColour("rgba(255, 0, 0, 0.5)")
            setCircleRadius(1);
        }
    }

    //Set map center and zoom

    const resetHandler = () => {
        setMapCenter([34.80746, -40.4796]);
        setZoom(2);
    }

    //Map data to map and create pop up for each country that includes specific data

    const showDataMap = (caseType = mapData) => 
        tableData.map((data) => (
            <Circle center={[data.countryInfo.lat, data.countryInfo.long]} fillOpacity={0.4} radius={data[caseType] / circleRadius} pathOptions={{ color: circleColour }}>
                <Popup>
                    <div className={styles.infoContainer}>
                        <Typography variant="h5" className={styles.countryName}>{data.country}</Typography>
                        <img className={styles.countryFlag} src={data.countryInfo.flag} alt="" />
                        <b><Typography variant="body2" color="black">{caseType.charAt(0).toUpperCase() + caseType.slice(1)}: <CountUp start={0} end={data[caseType]} duration={2.5}separator=","/></Typography></b>
                    </div>
                </Popup>
            </Circle>
        )
    );

    return (
        <div>
            <Grid container justify="center">
                <Grid item component={Card} xs={12} md={12} className={styles.card}>
                    <CardContent>
                        <div className={styles.mapHeader}>
                            <FormControl fullWidth sx={{ mb: 1, mr: 1}}>
                                <InputLabel id="demo-simple-select-label">Data</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={mapData}
                                    label="Data"
                                    onChange={mapDataHandler}
                                >
                                    <MenuItem value={"cases"}>Cases</MenuItem>
                                    <MenuItem value={"recovered"}>Recovered</MenuItem>
                                    <MenuItem value={"deaths"}>Deaths</MenuItem>
                                </Select>
                            </FormControl>
                            <Button variant="outlined" size="medium" sx={{ mb: 1}} onClick={resetHandler}>Reset</Button>
                        </div>
                            <MapContainer mapCenter={mapCenter} zoom={zoom} scrollWheelZoom={false} className={styles.map}>
                                <MapView mapCenter={mapCenter} zoom={zoom} />
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                {showDataMap()}
                            </MapContainer>
                            
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
    
}

export default Map
