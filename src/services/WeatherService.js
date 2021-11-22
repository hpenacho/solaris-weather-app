import axios from 'axios'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'
const APIkey = '&appid=' + process.env.REACT_APP_API_KEY

const getCityWeather = (city) => {
    const request = axios.get(baseUrl + 'q=' + city + APIkey)

    return request.then(response => response.data)

}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getCityWeather: getCityWeather
}