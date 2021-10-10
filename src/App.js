import React, { useState } from 'react'

//Components
import { Cards, Chart, CountryPicker } from './components';

//Material UI 

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
