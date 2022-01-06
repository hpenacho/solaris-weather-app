import * as React from 'react';
import Paper from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FindMyLocation from './FindMyLocation';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSnackbar } from 'notistack';
import { Tooltip } from '@mui/material';
import Zoom from '@mui/material/Zoom';

const SearchLocation = ({ filter, setFilter, setLocation, cities }) => {
    const { enqueueSnackbar } = useSnackbar();

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    const handleKeyPress = async (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    const handleSearch = async () => {
        filter = capitalize(filter);
        const location = cities.find(city => city.name === filter)

        if (location && location.name !== "") {
            setLocation(location)
            enqueueSnackbar((`Displaying ${filter} weather data`), { variant: 'success' })
            setFilter("");
        }

        else {
            enqueueSnackbar(('Location not found'), { variant: 'error' })
        }
    }

    return (
        <Paper
            sx={{ borderRadius: 8, backgroundColor: 'secondary.main', py: 0.7, my: 0.7, display: 'flex', alignItems: 'center', width: 300 }}
        >
            <FindMyLocation setLocation={setLocation} enqueueSnackbar={enqueueSnackbar} />
            <TextField variant='outlined' value={filter} onChange={handleFilterChange} onKeyPress={handleKeyPress} label="Search..." />
            <Tooltip TransitionComponent={Zoom} title={'Search'} placement="top">
                <IconButton aria-label="search" onClick={handleSearch}>
                    <SearchIcon />
                </IconButton>
            </Tooltip>
        </Paper>
    )
}

export default SearchLocation;