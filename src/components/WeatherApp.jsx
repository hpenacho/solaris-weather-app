import { useState } from 'react'
import InitService from '../services/InitService'
import Box from '@mui/material/Box'
import { Container } from '@mui/material'
import NavBarSection from './Navbar/NavBarSection'
import ForecastContainer from './ForecastContainer'
import useSettings from '../hooks/useSettings'

const WeatherApp = () => {

    const cities = InitService.initializeCities()
    const countries = InitService.initializeCountries()
    const [location, setLocation] = useState(cities.find(city => city.name === 'Lisbon'))
    const [unitType, setUnitType] = useState('')
    const [iconStyle, setIconStyle] = useState('')
    const [timeframe, setTimeframe] = useState('')
    const [favoriteLocations, setFavoriteLocations] = useState([])

    useSettings(setUnitType, setIconStyle, setTimeframe, setFavoriteLocations);

    return (
        < Container maxWidth="lg" >
            <Box sx={{ boxShadow: 8, borderRadius: 7, backgroundColor: "primary.main" }}>

                <NavBarSection
                    setLocation={setLocation}
                    cities={cities}
                    countries={countries}
                    unitType={unitType}
                    setUnitType={setUnitType}
                    iconStyle={iconStyle}
                    setIconStyle={setIconStyle}
                    timeframe={timeframe}
                    setTimeframe={setTimeframe}
                    favoriteLocations={favoriteLocations}
                    setFavoriteLocations={setFavoriteLocations}
                />

                <ForecastContainer
                    location={location}
                    countries={countries}
                    iconStyle={iconStyle}
                    unitType={unitType}
                    timeframe={timeframe}
                    favoriteLocations={favoriteLocations}
                    setFavoriteLocations={setFavoriteLocations}
                />
            </Box>
        </Container >
    )
}

export default WeatherApp;