import React from "react";
import City from "./City"
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

let filteredCities = []
const CityList = ({ cities, filter, setCity }) => {
    if (filter !== '' && filter.length > 2) {
        filteredCities = cities.filter(c => c.name.startsWith(filter))
    }
    else if (filter.length <= 2) {
        filteredCities = []
    }
    if (filteredCities.length > 5) {
        filteredCities = filteredCities
            .sort((x, y) => y.stat.population - x.stat.population)
            .slice(0, 5)
    }
    console.log(filteredCities)

    return (

        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#b0bec5' }}>

            <List>
                {filter !== '' &&
                    filteredCities.map(city =>
                        <ListItem disablePadding key={city.id}>
                            <City cityInfo={city} setCity={setCity} />
                        </ListItem>
                    )
                }
            </List>

        </Box>
    )
}

export default CityList