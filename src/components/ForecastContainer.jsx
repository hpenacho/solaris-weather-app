import { useState, useEffect } from 'react'
import WeatherService from '../services/WeatherService'
import InfoSection from "./InfoSection/Info"
import MiddleSection from "./MiddleSection/HourlyForecast"
import BottomSection from "./BottomSection/DailyForecast"

const ForecastContainer = ({ location, setLocation, countries, iconStyle, unitType, timeframe }) => {
    const [weatherData, setWeatherData] = useState();

    useEffect(() => {
        if (location) {
            WeatherService.fetchWeather(location.coord.lat, location.coord.lon)
                .then(response => {
                    setWeatherData(response)
                })
        }
    }, [location])

    return (
        <>
            <InfoSection
                location={location}
                setLocation={setLocation}
                countries={countries}
                weatherData={weatherData} />

            <MiddleSection
                weatherData={weatherData}
                iconStyle={iconStyle}
                unitType={unitType}
                timeframe={timeframe} />

            <BottomSection
                weatherData={weatherData}
                iconStyle={iconStyle}
                unitType={unitType} />
        </>
    )
}

export default ForecastContainer;