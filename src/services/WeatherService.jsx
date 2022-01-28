import axios from 'axios'
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
    }

    );
    return data
}

const geoDecode = async (latitude, longitude) => {
    const { data } = await axios.get("https://api.openweathermap.org/geo/1.0/reverse?", {
        params: {
            lat: latitude,
            lon: longitude,
            limit: 5,
            APPID: process.env.REACT_APP_API_KEY
        }
    });

    return data
}

export default {
    fetchWeather: fetchWeather,
    geoDecode: geoDecode
}