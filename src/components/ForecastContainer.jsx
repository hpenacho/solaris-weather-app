import InfoSection from "./InfoSection/Info"
import MiddleSection from "./MiddleSection/HourlyForecast"
import BottomSection from "./BottomSection/DailyForecast"
import BottomSectionMobile from './BottomSection/DailyMobile'
import { Box } from '@mui/material'
import useFetchWeather from '../hooks/useFetchWeather'

const ForecastContainer = ({ location, countries, iconStyle, unitType, timeframe, favoriteLocations, setFavoriteLocations }) => {
    const weatherData = useFetchWeather(location)

    return (
        <>
            <InfoSection
                location={location}
                countries={countries}
                weatherData={weatherData}
                favoriteLocations={favoriteLocations}
                setFavoriteLocations={setFavoriteLocations}
            />

            <MiddleSection
                weatherData={weatherData}
                iconStyle={iconStyle}
                unitType={unitType}
                timeframe={timeframe} />

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <BottomSection
                    weatherData={weatherData}
                    iconStyle={iconStyle}
                    unitType={unitType} />
            </Box>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <BottomSectionMobile
                    weatherData={weatherData}
                    iconStyle={iconStyle}
                    unitType={unitType} />
            </Box>
        </>
    )
}

export default ForecastContainer;