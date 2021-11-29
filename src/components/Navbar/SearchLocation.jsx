import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SearchLocation = ({ filter, setFilter, setLocation }) => {

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    const search = async (e) => {
        if (e.key === 'Enter') {
            setLocation(filter)
        }
    }

    return (
        <Box p={0.5}>
            <TextField value={filter} onChange={handleFilterChange} onKeyPress={search} sx={{ borderRadius: 5 }} id="outlined-basic" label="Search..." variant="outlined" />
        </Box>
    )
}

export default SearchLocation;