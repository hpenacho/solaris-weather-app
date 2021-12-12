import React, { useState, useEffect } from 'react'
import WeatherService from '../../services/WeatherService'
import TopSection from "./TopSection"
import MiddleSection from "./MiddleSection"
import ComplementaryInfo from './ComplementaryInfo'
import BottomSection from "./BottomSection"

const ForecastContainer = ({ location }) => {
    const [unitType, setUnitType] = useState("metric")
    const [language, setLanguage] = useState("en")
    const [iconStyle, setIconStyle] = useState("animated")
    const [forecastInterval, setForecastInterval] = useState(3)
    const [weatherData, setWeatherData] = useState();

    useEffect(() => {
        if (location) {
            WeatherService.fetchWeather(location.coord.lat, location.coord.lon, unitType, language)
                .then(response => {
                    setWeatherData(response)
                })
        }
    }, [location, unitType, language])

    return (
        <>
            <TopSection location={location} setUnitType={setUnitType} setLanguage={setLanguage} setIconStyle={setIconStyle} setForecastInterval={setForecastInterval} />
            <MiddleSection weatherData={weatherData} iconStyle={iconStyle} forecastInterval={forecastInterval} />
            <BottomSection weatherData={weatherData} iconStyle={iconStyle} />
        </>
    )
}

export default ForecastContainer;