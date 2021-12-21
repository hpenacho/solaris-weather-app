import { Grid } from '@mui/material';
import HourlyForecast from './HourlyForecast';
import { Container } from '@mui/material'
import ComplementaryInfo from '../ComplementarySection/ComplementaryInfo'

let slicedForecast = [];
const MiddleSection = ({ weatherData, iconStyle, unitType, forecastInterval }) => {

    if (weatherData) {
        slicedForecast = weatherData.hourly
            .filter((element, index) => { return index % forecastInterval === 0; })
            .slice(0, 8)
    }


    return (
        <Container disableGutters sx={{ backgroundColor: '#212121' }}>
            {weatherData &&
                <Grid py={1} container direction="row" sx={{ justifyContent: 'space-between' }} columns={8} >
                    {weatherData &&
                        slicedForecast.map(element =>
                            <Grid item xs={2} sm={1} key={element.dt} >
                                <HourlyForecast
                                    hourlyForecast={element}
                                    timezoneOffset={weatherData.timezone_offset}
                                    iconStyle={iconStyle}
                                    unitType={unitType} />
                            </Grid>
                        )}
                </Grid>}
            <ComplementaryInfo weatherData={weatherData} />
        </Container>
    )
}

export default MiddleSection;