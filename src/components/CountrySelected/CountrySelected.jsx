import React, {useEffect} from 'react'

import styles from './CountrySelected.module.css'

function CountrySelected({countryInfo, countrySelect, setCountrySelect, image, setImage, setMapCenter, setZoom}) {

    const countrySelectHandler = () => {
        if (countryInfo.country === undefined) {
            const countrySelect = "Worldwide";
            const image = "";
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
            setZoom(4);
        }
    }

    useEffect(() => {
        countrySelectHandler();
    }, [countryInfo])

    return (
        <div className={styles.appCountry}>
            <h1>{countrySelect}</h1>
            <img className={styles.countryFlag} src={image} alt="" />
        </div>
    )
}

export default CountrySelected;
