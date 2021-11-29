import React from "react";
import City from "./City"
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import { useSpring, animated } from 'react-spring'

let filteredCities = []
const CityList = ({ cities, filter, setLocation, setShowWeather }) => {
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

    return (

        <Box sx={{ width: '100%', borderRadius: 3 }}>
            <List>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={1}
                >
                    {filter !== '' &&
                        filteredCities.map(city =>
                            <ListItem disablePadding key={city.id} sx={{
                                border: 1, bgcolor: "#e8eaf6", borderRadius: 3, '&:hover': {
                                    background: "#c5e1a5",
                                }
                            }}>
                                <City cityInfo={city} setLocation={setLocation} setShowWeather={setShowWeather} />
                            </ListItem>
                        )
                    }
                </Stack>
            </List>
        </Box >
    )
}

export default CityList