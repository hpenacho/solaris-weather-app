import { Grid } from '@mui/material';
import DailyForecast from './DailyForecastItem';
import { Container } from '@mui/material'

let slicedForecast = [];
const BottomSection = ({ weatherData, iconStyle, unitType }) => {

    if (weatherData) {
        slicedForecast = weatherData.daily
            .slice(0, 6)
    }

    return (
        <Container disableGutters >
            <Grid container direction="row" sx={{ justifyContent: 'space-between' }} columns={7}>
                {weatherData &&
                    slicedForecast.map(element =>
                        <Grid sx={{ borderRight: 1, borderColor: "secondary.main" }} item xs={1} key={element.dt} >
                            <DailyForecast
                                dailyWeatherInfo={element}
                                timezoneOffset={weatherData.timezone_offset}
                                iconStyle={iconStyle}
                                unitType={unitType} />
                        </Grid>
                    )}
                {weatherData &&
                    <Grid item xs={1} key={weatherData.daily[6].dt} >
                        <DailyForecast
                            dailyWeatherInfo={weatherData.daily[6]}
                            timezoneOffset={weatherData.timezone_offset}
                            iconStyle={iconStyle}
                            unitType={unitType} />
                    </Grid>
                }
            </Grid>
        </Container >
    )
}

export default BottomSection;