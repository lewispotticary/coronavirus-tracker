import React from "react";

//Material UI 
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const CountryPicker = ({countries, setCountrySelect}) => {

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
                onChange={e => {setCountrySelect(e.target.value)}}
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