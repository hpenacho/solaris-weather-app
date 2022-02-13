import axios from 'axios'
import { useState, useEffect } from 'react';

const baseUrl = 'https://api.openweathermap.org/data/2.5/'

const fetchWeather = async (latitude, longitude, language) => {
    const { data } = await axios.get(baseUrl + "onecall?", {
        params: {
            lat: latitude,
            lon: longitude,
            exclude: "minutely",
            units: "metric",
            lang: language,
            APPID: process.env.REACT_APP_API_KEY
        }
    });
    return data
}

const useFetchWeather = (location) => {
    const [weatherData, setWeatherData] = useState();
    useEffect(() => {
        if (location) {
            fetchWeather(location.coord.lat, location.coord.lon)
                .then(response => {
                    setWeatherData(response)
                })
        }
    }, [location])

    return (weatherData)
}

export default useFetchWeather;