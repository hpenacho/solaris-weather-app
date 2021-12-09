import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InitService from '../../services/InitService'

export default function Grouped() {

    const locations = InitService.initializeCities().map(x => {
        return { name: x.name, country: x.country }
    }) //probably insert coords here too, and pass them to service

    const countries = InitService.initializeCountries()

    const options = countries.filter(x => locations.map(y => {
        if (y.country === x.code) {
            return { ...y, x }
        }
        return null;
    }))

    console.log("AQUI", options)
    /*const options = locations.filter(location => location.country === countries.code).map((option) => {
        const countryName = option.label
        return {
            countryName: countryName,
            ...option,
        };
    }); */

    return (
        <Autocomplete
            id="grouped-demo"
            options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
            groupBy={(option) => option.firstLetter}
            getOptionLabel={(option) => option.name}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="With categories" />}
        />
    );
}