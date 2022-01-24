import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/system';
import { useSnackbar } from 'notistack';
import FindMyLocation from './FindMyLocation';
import { createFilterOptions } from '@mui/material/Autocomplete';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';

export default function Grouped({ setLocation, cities, countries }) {

    const [inputValue, setInputValue] = useState('');
    const { enqueueSnackbar } = useSnackbar();

    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        limit: 6,
        stringify: (option) => option.name,
    });

    let timerID;
    const handleFilterChange = (event, newInputValue) => {
        clearTimeout(timerID)
        timerID = setTimeout(() => {
            setInputValue(newInputValue.toLowerCase())
        }, 300)

    }

    const handleSearch = async (event, newValue) => {
        if (newValue) {
            const location = newValue
            setLocation(location)
            enqueueSnackbar((`Displaying ${location.name} weather data`), { variant: 'success' })
            setInputValue('')
        }
    }



    const options = cities
        .filter(c => c.name.toLowerCase().includes(inputValue))
        .map((option) => {
            const countryLabel = (countries.find(country => country.code === option.country)).label
            const statPop = String(option.stat.population)

            return {
                countryLabel,
                statPop,
                ...option,
            };
        });


    return (
        <Box
            sx={{
                borderRadius: 8, backgroundColor: 'secondary.main', py: 0.9, my: 0.6, display: 'flex', alignItems: 'center', width: 290
            }}
        >
            <FindMyLocation setLocation={setLocation} enqueueSnackbar={enqueueSnackbar} />
            <Autocomplete
                id="autocomplete-search"
                onChange={handleSearch}
                onInputChange={handleFilterChange}
                options={options.sort((a, b) => -b.statPop.localeCompare(a.statPop))}
                getOptionLabel={(option) => option.name}
                key={(option) => option.id}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                filterOptions={filterOptions}
                sx={{ width: 220 }}
                open={inputValue.length >= 2}
                renderOption={(props, option) => {
                    return (
                        <Box {...props} key={option.id}>
                            <Stack>
                                {option.name}
                                <Typography color="textColor.subdued" variant="body2"> {option.countryLabel} </Typography>
                            </Stack>
                        </Box>
                    )
                }}
                renderInput={(params) =>
                    <TextField {...params} variant='outlined' label="Search..." />
                }
            />
        </Box>
    );
}
