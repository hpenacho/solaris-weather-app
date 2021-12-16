import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SearchLocation = ({ filter, setFilter, setLocation, cities }) => {

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    const search = async (e) => {
        if (e.key === 'Enter') {

            const location = cities.find(city => city.name === filter)

            /* if (location !== undefined && location.langs) {
                 // const test = cities.includes(cities.find(city => city.langs[1] === filter
                 //))
                 console.log(location.langs)
             } */

            if (location)
                setLocation(location)
            else {
                console.log("No such location")
            }
        }
    }

    return (
        <Box p={0.5}>
            <TextField value={filter} onChange={handleFilterChange} onKeyPress={search} sx={{ borderRadius: 5 }} id="outlined-basic" label="Search..." variant="outlined" />
        </Box>
    )
}

export default SearchLocation;