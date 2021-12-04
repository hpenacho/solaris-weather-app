import React, { useState, useEffect } from 'react'
import WeatherService from '../../services/WeatherService'
import TopSection from "./TopSection"
import MiddleSection from "./MiddleSection"
import BottomSection from "./BottomSection"
import Box from '@mui/material/Box';

const ForecastContainer = ({ location }) => {
    const [unitType, setUnitType] = useState("metric")
    const [language, setLanguage] = useState("en")
    const [iconStyle, setIconStyle] = useState("animated")
    const [weatherInfo, setWeatherInfo] = useState();
    const [dailyWeatherInfo, setDailyWeatherInfo] = useState();

    useEffect(() => {
        if (location) {
            WeatherService.fetchWeather(location, unitType, language)
                .then(response => {
                    setWeatherInfo(response)
                })
        }
    }, [location, unitType, language])

    useEffect(() => {
        if (weatherInfo) {
            WeatherService.fetchDailyWeather(weatherInfo.city.coord.lat, weatherInfo.city.coord.lon, unitType, language)
                .then(response => {
                    setDailyWeatherInfo(response)
                })
        }
    }, [weatherInfo, unitType, language])

    return (
        <>
            <TopSection weather={weatherInfo} setUnitType={setUnitType} setLanguage={setLanguage} setIconStyle={setIconStyle} />
            <MiddleSection weatherInfo={weatherInfo} iconStyle={iconStyle} />
            <BottomSection dailyWeatherInfo={dailyWeatherInfo} iconStyle={iconStyle} />
        </>
    )
}

export default ForecastContainer;