import React from "react";
import City from "./City"
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

//-------------------------------
let filteredCities = []
const CityList = ({ cities, filter, setCity }) => {
    if (filter !== '') {
        filteredCities = cities.filter(c => c.name.startsWith(filter))
    }

    if (filteredCities.length > 5) {
        filteredCities = filteredCities
            .sort((x, y) => y.stat.population - x.stat.population)
            .slice(0, 5)
    }
    console.log(filteredCities)

    return (

        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="secondary mailbox folders">
                <List>
                    {filter !== '' &&
                        filteredCities.map(city =>
                            <ListItem disablePadding key={city.id}>
                                <City cityInfo={city} setCity={setCity} />
                            </ListItem>
                        )
                    }
                </List>
            </nav>
        </Box>
    )
}

export default CityList