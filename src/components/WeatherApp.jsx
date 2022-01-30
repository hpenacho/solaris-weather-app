import { useState } from 'react'
import InitService from '../services/InitService'
import Box from '@mui/material/Box'
import { Container } from '@mui/material'
import NavBarSection from './Navbar/NavBarSection'
import ForecastContainer from './ForecastContainer'
import { useEffect } from 'react'

const WeatherApp = () => {

    const cities = InitService.initializeCities()
    const countries = InitService.initializeCountries()
    const [location, setLocation] = useState(cities.find(city => city.name === 'Lisbon'))
    const [unitType, setUnitType] = useState('')
    const [iconStyle, setIconStyle] = useState('')
    const [timeframe, setTimeframe] = useState('')

    useEffect(() => {
        const unitTypeUserPref = window.localStorage.getItem('unitType')
        const iconStyleUserPref = window.localStorage.getItem('iconStyle')
        const timeframeUserPref = window.localStorage.getItem('timeframe')

        unitTypeUserPref ? setUnitType(unitTypeUserPref) : setUnitType('celsius')
        iconStyleUserPref ? setIconStyle(iconStyleUserPref) : setIconStyle('static')
        timeframeUserPref ? setTimeframe(Number(timeframeUserPref)) : setTimeframe(3)
    }, [])

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