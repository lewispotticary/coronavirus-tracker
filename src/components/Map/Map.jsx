import React, {useEffect} from 'react'

import styles from './Map.module.css';

import 'leaflet/dist/leaflet.css';

import MapView from '../MapView/MapView';

import {Card, CardContent, Typography, Grid} from '@mui/material';

import { MapContainer, TileLayer, Marker, Popup, useMapEvent, useMap, Circle} from 'react-leaflet';

function Map({mapCenter, zoom, tableData}) {
    return (
        <div>
            <Grid container justify="center">
                <Grid item component={Card} xs={12} md={12} className={styles.card}>
                    <CardContent>
                    <MapContainer mapCenter={mapCenter} zoom={zoom} scrollWheelZoom={false} className={styles.map}>
                        <MapView mapCenter={mapCenter} zoom={zoom} />
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {tableData.map((data) => (
                            <Circle center={[data.countryInfo.lat, data.countryInfo.long]} fillOpacity={0.4} radius={200000}>
                            
                            </Circle>
                        ))}
                        
                    </MapContainer>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
    
}

export default Map
