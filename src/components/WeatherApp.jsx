import React, { useState } from 'react'
import InitService from '../services/InitService'
import Box from '@mui/material/Box'
import { Container } from '@mui/material'
import NavBarSection from './Navbar/NavBarSection'
import ForecastContainer from './ForecastContainer'

const WeatherApp = ({ theme, setTheme }) => {

    const [filter, setFilter] = useState('')
    const [location, setLocation] = useState('')
    const [unitType, setUnitType] = useState("celsius")
    const [iconStyle, setIconStyle] = useState("animated")
    const [timeframe, setTimeframe] = useState(3)
    const cities = InitService.initializeCities()

    return (
        < Container maxWidth="md" >
            <Box sx={{ boxShadow: 8, borderRadius: 7, backgroundColor: "primary.main" }}>
                <NavBarSection
                    filter={filter}
                    setFilter={setFilter}
                    setLocation={setLocation}
                    cities={cities}
                    unitType={unitType}
                    setUnitType={setUnitType}
                    setIconStyle={setIconStyle}
                    theme={theme}
                    setTheme={setTheme}
                    timeframe={timeframe}
                    setTimeframe={setTimeframe} />
                <ForecastContainer
                    location={location}
                    setLocation={setLocation}
                    iconStyle={iconStyle}
                    unitType={unitType}
                    timeframe={timeframe} />
            </Box>
        </Container >
    )
}

export default WeatherApp;