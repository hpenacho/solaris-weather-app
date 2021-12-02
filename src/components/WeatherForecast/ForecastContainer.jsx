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
    const [iconStyle, setIconStyle] = useState("default")
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
            <TopSection weather={weatherInfo} setUnitType={setUnitType} setLanguage={setLanguage} setIconStyle={setIconStyle} />
            <MiddleSection weatherInfo={weatherInfo} iconStyle={iconStyle} />
            <ComplementaryInfo weatherInfo={weatherInfo} />
            <BottomSection weatherInfo={weatherInfo} iconStyle={iconStyle} />
        </Paper>
    )
}

export default ForecastContainer;