import React, {useEffect} from "react";

//Material UI 


import {Select, MenuItem, InputLabel, FormControl} from '@mui/material';

import styles from './CountryPicker.module.css';


import headerImage from './img/headerImage.png';

const CountryPicker = ({countries, setCountries, country, setCountry, setCountryInfo, setTableData}) => {

    useEffect(() => {
        const getWorldwideData = async () => {
            await fetch("https://disease.sh/v3/covid-19/all")
                .then((response) => response.json())
                .then((data) => {
                    setCountryInfo(data);
                })
        }
        getWorldwideData();
    },[]);

    //Fetch all countries 

    useEffect(() => {
       const getCountriesData = async () => {
           await fetch("https://disease.sh/v3/covid-19/countries")
           .then((response) => response.json())
           .then((data) => {
                setTableData(data.sort(function(a,b){return b.cases - a.cases}));
                const countries = data.map((country) => (
                    {
                        name: country.country,
                        value: country.countryInfo.iso2
                    }
                ))
                setCountries(countries);
           })
       } 
       getCountriesData();
    },[]);

    const onCountryChange = async (event) => {
        const countryCode = event.target.value;

        const url = countryCode === "worldwide" ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${countryCode}`

        await fetch(url)
           .then((response) => response.json())
           .then((data) => {
                setCountry(countryCode);
                
                setCountryInfo(data);
           })
    }

    return(
        <div>
            <div className={styles.appHeader}>
                
                <img src={headerImage} alt="header image" className={styles.headerImage}/>

                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
                    <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Country"
                    autoWidth
                    defaultValue=""
                    value={country}
                    onChange={onCountryChange}
                    >
                    <MenuItem value="worldwide">Worldwide</MenuItem>
                    {countries.map((country) => {
                        return(<MenuItem value={country.value} key={Math.random() * 1000}>{country.name}</MenuItem>)
                    })}
                    </Select>
                </FormControl>
            </div>
        </div>      
    );
}

export default CountryPicker;