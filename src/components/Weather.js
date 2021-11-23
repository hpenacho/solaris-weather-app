import React, { useState, useEffect } from 'react'
import WeatherService from '../services/WeatherService'

const Weather = ({ city }) => {
    const [weatherInfo, setWeatherInfo] = useState();

    useEffect(() => {
        if (city) {
            WeatherService.getCityWeather(city)
                .then(response => {
                    setWeatherInfo(response)
                })
        }
    }, [city])

    return (
        <div >
            {weatherInfo && <div>
                <p>City: {weatherInfo.name}</p>
                <p>Coordinates: Latitude-{weatherInfo.coord.lat} Longitude-{weatherInfo.coord.lon}</p>
                <p>Weather: {weatherInfo.weather[0].main}</p>
                <p>Current temp: {weatherInfo.main.temp}</p>
                <p>feels like: {weatherInfo.main.feels_like}</p>
                <p>min temp: {weatherInfo.main.temp_min}</p>
                <p>max temp: {weatherInfo.main.temp_max}</p>
                <p>wind: Speed:{weatherInfo.wind.speed} Direction:{weatherInfo.wind.deg}</p>
            </div>}
        </div>
    )

}
export default Weather;