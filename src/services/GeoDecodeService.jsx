import axios from 'axios'
const baseUrl = "https://api.openweathermap.org/geo/1.0/reverse?"

const geoDecode = async (latitude, longitude) => {
    const { data } = await axios.get(baseUrl, {
        params: {
            lat: latitude,
            lon: longitude,
            limit: 5,
            APPID: process.env.REACT_APP_API_KEY
        }
    });

    return data
}

export default geoDecode;