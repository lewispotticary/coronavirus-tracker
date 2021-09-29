import React from "react";

//Material UI 
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const CountryList = ({countries}) => {
    return(
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Country"
                autoWidth
                defaultValue={0}
                >
                    {countries.map((item,i) => (
                        <MenuItem value={i} key={Math.random() * 1000}>{item}</MenuItem>
                    ))} 
                </Select>
            </FormControl>
            
        
        </div>      
    );
}

export default CountryList;