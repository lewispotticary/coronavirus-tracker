import React, { useState } from 'react'

//Components
import { Cards, Chart, CountryPicker } from './components';

//Material UI 

import Typography from '@mui/material/Typography';

//Styles
import styles from './App.module.css';

function App() {

  //useState

  const [countries, setCountries] = useState([]);

  const [country, setCountry] = useState("worldwide");

  const [countryInfo, setCountryInfo] = useState("")

  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        div.
      <Typography variant="h4" m={2}>Covid-19 Tracker</Typography>

      <CountryPicker 
      countries={countries}
      setCountries={setCountries}
      country={country}
      setCountry={setCountry}
      countryInfo={countryInfo}
      setCountryInfo={setCountryInfo}/>
      </div>
      
    </div>
  );
}

export default App;
