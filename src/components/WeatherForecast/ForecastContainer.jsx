import React, { useState, useEffect } from 'react'
import WeatherService from '../../services/WeatherService'
import TopSection from "./TopSection"
import MiddleSection from "./MiddleSection"
import BottomSection from "./BottomSection"

const ForecastContainer = ({ location, unitType, iconStyle, forecastInterval }) => {
    const [weatherData, setWeatherData] = useState();

    useEffect(() => {
        if (location) {
            WeatherService.fetchWeather(location.coord.lat, location.coord.lon, unitType)
                .then(response => {
                    setWeatherData(response)
                })
        }
    }, [location, unitType])

    return (
        <>
            <TopSection location={location} weatherData={weatherData} />
            <MiddleSection weatherData={weatherData} iconStyle={iconStyle} forecastInterval={forecastInterval} />
            <BottomSection weatherData={weatherData} iconStyle={iconStyle} />
        </>
    )
}

export default ForecastContainer;