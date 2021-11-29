import React, { useState, useEffect } from 'react'
import WeatherService from '../../services/WeatherService'
import TopSection from "./TopSection"
import MiddleSection from "./MiddleSection"
import BottomSection from "./BottomSection"
import ComplementaryInfo from './ComplementaryInfo'
import { Paper } from "@mui/material"

const ForecastContainer = ({ location }) => {
    const [unitType, setUnitType] = useState("metric")
    const [language, setLanguage] = useState("en")
    const [weatherInfo, setWeatherInfo] = useState();

    useEffect(() => {
        if (location) {
            WeatherService.fetchWeather(location, unitType, language)
                .then(response => {
                    setWeatherInfo(response)
                    console.log(response)
                })
        }
    }, [location, unitType, language])

    return (
        <Paper sx={{ borderRadius: 0, borderBottomLeftRadius: 15, WebkitBorderBottomRightRadius: 15 }}>
            <TopSection weather={weatherInfo} setUnitType={setUnitType} setLanguage={setLanguage} />
            <MiddleSection weatherInfo={weatherInfo} />
            <ComplementaryInfo weatherInfo={weatherInfo} />
            <BottomSection weatherInfo={weatherInfo} />
        </Paper>
    )
}

export default ForecastContainer;