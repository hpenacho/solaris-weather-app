import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InitService from '../../services/InitService'

export default function LocationSearch() {

    const cities = InitService.initializeCities()
    const locations = cities.map(x => {
        return { name: x.name, country: x.country }
    })

    console.log(locations)
    return (
        <Autocomplete
            id="country-select-demo"
            sx={{ width: 300 }}
            options={locations}
            filterOptions={(x) => x}
            autoHighlight
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.country.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.country.toLowerCase()}.png 2x`}
                        alt=""
                    />
                    {option.name} ({option.country})
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a location"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}