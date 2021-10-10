import React, {useEffect} from "react";

//Material UI 
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const CountryPicker = ({countries, setCountrySelect, setCountries, countrySelect}) => {

    //Fetch all countries 

    useEffect(() => {
       const getCountriesData = async () => {
           await fetch("https://disease.sh/v3/covid-19/countries")
           .then((response) => response.json())
           .then((data) => {
                console.log(data);
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

    return(
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Country"
                autoWidth
                defaultValue=""
                >
                {countries.map((country) => {
                    return(<MenuItem value={country.value} key={Math.random() * 1000}>{country.name}</MenuItem>)
                })}
                </Select>
            </FormControl>
        </div>      
    );
}

export default CountryPicker;