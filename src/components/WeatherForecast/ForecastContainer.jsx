import React, { useState, useEffect } from 'react'
import WeatherService from '../../services/WeatherService'
import TopSection from "./TopSection"
import MiddleSection from "./MiddleSection"
import BottomSection from "./BottomSection"

const ForecastContainer = ({ location, iconStyle, unitType, forecastInterval }) => {
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
            <TopSection location={location} weatherData={weatherData} />
            <MiddleSection weatherData={weatherData} iconStyle={iconStyle} unitType={unitType} forecastInterval={forecastInterval} />
            <BottomSection weatherData={weatherData} iconStyle={iconStyle} unitType={unitType} />
        </>
    )
}

export default ForecastContainer;