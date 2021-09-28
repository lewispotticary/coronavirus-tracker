import React, {useEffect, useState} from 'react'

import './App.css';

//Material UI 
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';

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
        const Country = data.map(item => item.Slug);
        setCountries(Country);    
      })
  },[]);

  return (
    <div className="App">
      <Typography variant="h4" m={2}>Covid-19 Statistics By Country</Typography>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Country"
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}

export default App;
