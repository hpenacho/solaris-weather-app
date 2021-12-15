import { Grid } from '@mui/material';
import DailyForecast from './DailyForecast';
import { Container } from '@mui/material'

let slicedForecast = [];
const BottomSection = ({ weatherData, iconStyle }) => {

    if (weatherData) {
        console.log(weatherData.daily[7])
        slicedForecast = weatherData.daily
            .slice(0, 6)
    }

    return (
        <Container disableGutters >
            <Grid container direction="row" sx={{ justifyContent: 'space-between' }} columns={7}>
                {weatherData &&
                    slicedForecast.map(element =>
                        <Grid sx={{ borderRight: 1, borderColor: "#212121" }} item xs={1} key={element.dt} >
                            <DailyForecast dailyWeatherInfo={element} iconStyle={iconStyle} />
                        </Grid>
                    )}
                {weatherData &&
                    <Grid item xs={1} key={weatherData.daily[7].dt} >
                        <DailyForecast dailyWeatherInfo={weatherData.daily[7]} iconStyle={iconStyle} />
                    </Grid>
                }
            </Grid>
        </Container >
    )
}

export default BottomSection;