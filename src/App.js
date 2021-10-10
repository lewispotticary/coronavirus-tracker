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

  const [countrySelect, setCountrySelect] = useState("");

  return (
    <div className={styles.container}>
      <Typography variant="h4" m={2}>Covid-19 Tracker</Typography>
      <CountryPicker countries={countries} setCountrySelect={setCountrySelect} setCountries={setCountries} countrySelect={countrySelect}/>
      
    </div>
  );
}

export default App;
