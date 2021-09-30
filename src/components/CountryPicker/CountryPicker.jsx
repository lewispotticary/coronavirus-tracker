import React, {useEffect} from "react";

//Material UI 
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const CountryPicker = ({countries, setCountrySelect, setCountries, countrySelect}) => {

    const countrySelectionHandler = () => {
        fetch('https://api.covid19api.com/total/country/' + countrySelect)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            })

            //if data empty then filter out
    }

    useEffect(() => {
        fetch("https://api.covid19api.com/countries")
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log(data);
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
                onChange={e => {
                    setCountrySelect(e.target.value)
                    countrySelectionHandler(e)
                }}
                >
                    {countries.map((item) => {
                        const Country = item.Country;
                        const Slug = item.Slug;
                         return (<MenuItem value={Slug} key={Math.random() * 1000}>{Country}</MenuItem>)
                    })}
                </Select>
            </FormControl>
            
        
        </div>      
    );
}

export default CountryPicker;