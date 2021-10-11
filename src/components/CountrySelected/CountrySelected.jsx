import React, {useEffect} from 'react'

import styles from './CountrySelected.module.css'

function CountrySelected({countryInfo, countrySelect, setCountrySelect, image, setImage}) {

    const countrySelectHandler = () => {
        if (countryInfo.country === undefined) {
            const countrySelect = "Worldwide";
            const image = "";
            setImage(image);
            setCountrySelect(countrySelect);
        }
        else{
            const countrySelect = `${countryInfo.country}, ${countryInfo.countryInfo.iso3}`;
            const image = countryInfo.countryInfo.flag;
            setImage(image);
            setCountrySelect(countrySelect);
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
