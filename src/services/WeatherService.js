import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast?'

const fetchWeather = async (location, unitType, language) => {
    const { data } = await axios.get(baseUrl, {
        params: {
            q: location,
            units: unitType,
            lang: language,
            APPID: process.env.REACT_APP_API_KEY
        }
    });

    return data
}

export default {
    fetchWeather: fetchWeather
}