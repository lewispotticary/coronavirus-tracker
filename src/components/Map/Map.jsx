import React, {useEffect} from 'react'

import styles from './Map.module.css';

import 'leaflet/dist/leaflet.css';

import MapView from '../MapView/MapView';

import CountUp from 'react-countup';

import {Card, CardContent, Typography, Grid, Select, MenuItem, InputLabel, FormControl, Button} from '@mui/material';

import { MapContainer, TileLayer, Marker, Popup, useMapEvent, useMap, Circle} from 'react-leaflet';

function Map({mapCenter, zoom, tableData, setMapData, mapData, circleColour, setCircleColour, circleRadius, setCircleRadius, setMapCenter, setZoom}) {
    
    const mapDataHandler = (event) => {
        setMapData(event.target.value);
        if(event.target.value === "cases"){
            setCircleColour("rgba(0, 0, 255, 0.5)")
            setCircleRadius(30);
        }
        else if(event.target.value === "recovered"){
            setCircleColour("rgba(0, 255, 0, 0.5)")
            setCircleRadius(25);
        }
        else if(event.target.value === "deaths"){
            setCircleColour("rgba(255, 0, 0, 0.5)")
            setCircleRadius(1);
        }
    }

    const resetHandler = () => {
        setMapCenter([34.80746, -40.4796]);
        setZoom(2);
    }

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
