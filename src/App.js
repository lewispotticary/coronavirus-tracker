import React, {useEffect, useState} from 'react'

import './App.css';

//Components
import CountryList from './components/CountryList';

//Material UI 

import Typography from '@mui/material/Typography';


function App() {

  //useState

  const [countries, setCountries] = useState([]);

  //useEffect

  useEffect(() => {
    fetch("https://api.covid19api.com/countries")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        const Country = data.map(item => item.Country);
        Country.sort();
        setCountries(Country);    
      })
  },[]);

  return (
    <div className="App">
      <Typography variant="h4" m={2}>Covid-19 Statistics By Country</Typography>
      <CountryList countries={countries}/>
    </div>
  );
}

export default App;
