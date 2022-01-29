import { useState, useEffect } from 'react'
import WeatherService from '../services/WeatherService'
import InfoSection from "./InfoSection/Info"
import MiddleSection from "./MiddleSection/HourlyForecast"
import BottomSection from "./BottomSection/DailyForecast"
import BottomSectionMobile from './BottomSection/DailyMobile'
import { Box } from '@mui/material'

const ForecastContainer = ({ location, setLocation, countries, iconStyle, unitType, timeframe }) => {
    const [weatherData, setWeatherData] = useState();

    useEffect(() => {
        if (location) {
            WeatherService.fetchWeather(location.coord.lat, location.coord.lon)
                .then(response => {
                    setWeatherData(response)
                })
        }
    }, [location])

    return (
        <>
            <InfoSection
                location={location}
                setLocation={setLocation}
                countries={countries}
                weatherData={weatherData} />

            <MiddleSection
                weatherData={weatherData}
                iconStyle={iconStyle}
                unitType={unitType}
                timeframe={timeframe} />

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <BottomSection
                    weatherData={weatherData}
                    iconStyle={iconStyle}
                    unitType={unitType} />
            </Box>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <BottomSectionMobile
                    weatherData={weatherData}
                    iconStyle={iconStyle}
                    unitType={unitType} />
            </Box>
        </>
    )
}

export default ForecastContainer;