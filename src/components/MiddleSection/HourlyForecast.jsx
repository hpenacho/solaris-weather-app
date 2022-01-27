import HourlyForecast from './HourlyForecastItem';
import ComplementaryInfo from '../ComplementarySection/ComplementaryInfo'
import { Box } from '@mui/material';
import Carousel from 'react-elastic-carousel'


let slicedForecast = [];
const MiddleSection = ({ weatherData, iconStyle, unitType, timeframe }) => {

    if (weatherData) {
        slicedForecast = weatherData.hourly
            .filter((element, index) => { return index % timeframe === 0; })
    }

    const breakPoints = [
        { width: 1, itemsToShow: 4, itemsToScroll: 4 },
        { width: 600, itemsToShow: 8, itemsToScroll: 8 },
    ]

    return (
        <Box pb={{ xs: 1.5, sm: 0 }} pt={1} disableGutters sx={{ backgroundColor: 'secondary.main' }}>
            {weatherData &&
                <>
                    <Carousel
                        breakPoints={breakPoints}
                        showArrows={false}
                    >

                        {slicedForecast.map(element =>
                            <Box key={element.dt}>
                                <HourlyForecast
                                    hourlyForecast={element}
                                    timezoneOffset={weatherData.timezone_offset}
                                    iconStyle={iconStyle}
                                    unitType={unitType} />
                            </Box>
                        )}
                    </Carousel>
                    <ComplementaryInfo weatherData={weatherData} />
                </>
            }
        </Box>
    )
}

export default MiddleSection;