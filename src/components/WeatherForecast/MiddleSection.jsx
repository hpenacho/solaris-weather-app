import { Grid } from '@mui/material';
import HourlyForecast from './HourlyForecast';
import { Container } from '@mui/material'
import ComplementaryInfo from './ComplementaryInfo'

let formatHour = (date) => {
    let formattedDate = new Date(date * 1000)
    let hour = formattedDate.getHours()

    return hour;
}

let slicedForecast = [];
const MiddleSection = ({ weatherData, iconStyle, forecastInterval }) => {

    if (weatherData) {
        console.log(weatherData, "aqui estamos")
        slicedForecast = weatherData.hourly
            .filter((element, index) => { return index % forecastInterval === 0; })
            .slice(0, 8)
    }

    return (
        <Container disableGutters sx={{ backgroundColor: '#212121' }}>
            <Grid container direction="row" sx={{ justifyContent: 'space-between' }} columns={8} >
                {weatherData &&
                    slicedForecast.map(element =>
                        <Grid item md={1} key={element.dt} >
                            <HourlyForecast
                                hour={formatHour(element.dt + weatherData.timezone_offset)}
                                iconID={element.weather[0].icon}
                                iconStyle={iconStyle}
                                currentTemp={Math.round(element.temp)}
                                rain={element.rain && element.rain["1h"]}
                                snow={element.snow && element.snow["1h"]} />
                        </Grid>
                    )}
            </Grid>
            <ComplementaryInfo weatherInfo={weatherData} />
        </Container>
    )
}

export default MiddleSection;