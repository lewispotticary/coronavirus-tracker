import React, {useEffect, useState} from 'react'

//Components
import { Cards, Chart, CountryPicker } from './components';

//Material UI 

import Typography from '@mui/material/Typography';

//Styles
import styles from './App.module.css';

function App() {

  //useState

  const [countries, setCountries] = useState([]);

  const [countrySelect, setCountrySelect] = useState("");

  //useEffect

  useEffect(() => {
    fetch("https://api.covid19api.com/countries")
      .then(response => {
        return response.json();
      })
      .then(data => {

        //Sort data by alphabetical order
        data.sort(function(a, b){
          if(a.Country < b.Country) { return -1; }
          if(a.Country > b.Country) { return 1; }
          return 0;
        })

        //Set countries state to the ordered data
        setCountries(data);    
      })
  },[]);

  return (
    <div className={styles.container}>
      <Typography variant="h4" m={2}>Covid-19 Statistics By Country</Typography>
      <CountryPicker countries={countries} setCountrySelect={setCountrySelect}/>
    </div>
  );
}

export default App;
