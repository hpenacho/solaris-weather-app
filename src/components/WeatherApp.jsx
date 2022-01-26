import { useState } from 'react'
import InitService from '../services/InitService'
import Box from '@mui/material/Box'
import { Container } from '@mui/material'
import NavBarSection from './Navbar/NavBarSection'
import ForecastContainer from './ForecastContainer'

const WeatherApp = () => {

    const cities = InitService.initializeCities()
    const countries = InitService.initializeCountries()
    const [location, setLocation] = useState(cities.find(city => city.name === 'Lisbon'))
    const [unitType, setUnitType] = useState("celsius")
    const [iconStyle, setIconStyle] = useState("static")
    const [timeframe, setTimeframe] = useState(3)

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
                    setTimeframe={setTimeframe} />
                <ForecastContainer
                    location={location}
                    setLocation={setLocation}
                    countries={countries}
                    iconStyle={iconStyle}
                    unitType={unitType}
                    timeframe={timeframe} />
            </Box>
        </Container >
    )
}

export default WeatherApp;