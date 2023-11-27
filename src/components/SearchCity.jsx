import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchCity = ({ handleSearch }) => {

    const [searchCity, setSearchCity] = useState('');
    let city;
    const handleInputChange = (event) => {
        setSearchCity(event.target.value);
    };

    return (
        <TextField
            placeholder='Enter City Name'
            variant="outlined"
            size="small"
            value={searchCity}
            onChange={handleInputChange}
            InputProps={{
                endAdornment: (
                    <IconButton onClick={() => handleSearch(city = searchCity)} size="small">
                        <SearchIcon />
                    </IconButton>
                ),
            }}
        />
    );
};

export default SearchCity;
