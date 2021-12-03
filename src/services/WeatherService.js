import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/'

const fetchWeather = async (location, unitType, language) => {
    const { data } = await axios.get(baseUrl + "forecast?", {
        params: {
            q: location,
            units: unitType,
            lang: language,
            APPID: process.env.REACT_APP_API_KEY
        }
    });

    return data
}

const fetchDailyWeather = async (latitude, longitude, unitType, language) => {
    const { data } = await axios.get(baseUrl + "onecall?", {
        params: {
            lat: latitude,
            lon: longitude,
            exclude: "minutely,hourly",
            units: unitType,
            lang: language,
            APPID: process.env.REACT_APP_API_KEY
        }
    });

    return data
}


export default {
    fetchWeather: fetchWeather,
    fetchDailyWeather: fetchDailyWeather
}