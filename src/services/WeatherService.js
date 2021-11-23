import axios from 'axios'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'

const getCityWeather = async (city) => {
    console.log(city)
    const { data } = await axios.get(baseUrl, {
        params: {
            q: city,
            units: 'metric',
            APPID: process.env.REACT_APP_API_KEY
        }
    });

    return data
}

export default {
    getCityWeather: getCityWeather
}