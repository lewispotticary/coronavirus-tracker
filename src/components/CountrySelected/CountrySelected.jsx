import React, {useEffect} from 'react'

//Styles
import styles from './CountrySelected.module.css'

//Material UI
import {Card, CardContent, Grid} from '@mui/material';

//Globe image import
import globeImage from './img/globe-image.JPG';

function CountrySelected({countryInfo, countrySelect, setCountrySelect, image, setImage, setMapCenter, setZoom}) {

    const countrySelectHandler = () => {
        if (countryInfo.country === undefined) {
            const countrySelect = "Worldwide";
            const image = globeImage;
            setImage(image);
            setCountrySelect(countrySelect);
            setMapCenter([34.80746, -40.4796]);
            setZoom(3);
        }
        else{
            const countrySelect = `${countryInfo.country}, ${countryInfo.countryInfo.iso3}`;
            const image = countryInfo.countryInfo.flag;
            setImage(image);
            setCountrySelect(countrySelect);
            setMapCenter([countryInfo.countryInfo.lat, countryInfo.countryInfo.long]);
            setZoom(6);
        }
    }

    useEffect(() => {
        countrySelectHandler();
    }, [countryInfo])

    return (
        <div className={styles.appCountry}>
            <Grid container justify="center" className={styles.gridContainer}>
                    <Grid item component={Card} xs={12} md={12} className={styles.card}>
                        <CardContent className={styles.cardContent}>
                            <h1>{countrySelect}</h1>
                            <img className={styles.countryFlag} src={image} alt="" />
                        </CardContent>
                    </Grid>
                </Grid> 
        </div>
    )
}

export default CountrySelected;
