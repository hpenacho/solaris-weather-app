import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/system';
import { useSnackbar } from 'notistack';
import { createFilterOptions } from '@mui/material/Autocomplete';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';

export default function SearchLocation({ setLocation, cities, countries }) {
    const [open, setOpen] = useState(false)
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
        }, 600)
        setOpen(true)
    }

    const handleSearch = (event, newValue) => {
        if (newValue) {
            const location = newValue
            setLocation(location)
            enqueueSnackbar((`Displaying ${location.name} weather data`), { variant: 'success' })
            setOpen(false)
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
        <>
            <Autocomplete
                id="autocomplete-search"
                onChange={handleSearch}
                onInputChange={handleFilterChange}
                options={options}
                getOptionLabel={(option) => option.name || ""}
                key={(option) => option.id}
                isOptionEqualToValue={(option, value) => option.value === value.value}
                filterOptions={filterOptions}
                open={inputValue.length >= 2 && open}
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
                    <TextField {...params} sx={{ width: { xs: 190, sm: 235 } }} variant='outlined' label="Search..." />
                }
            />
        </>
    );
}
