import { Grid } from '@mui/material';
import DailyForecast from './DailyForecast';
import { Container } from '@mui/material'

let slicedForecast = [];
const BottomSection = ({ weatherData, iconStyle }) => {

    if (weatherData) {
        slicedForecast = weatherData.daily
            .slice(0, 7)
    }

    return (
        <Container disableGutters>
            <Grid container direction="row" sx={{ justifyContent: 'space-between' }} columns={7}>
                {weatherData &&
                    slicedForecast.map(element =>

                        <Grid sx={{ borderRight: 1, borderColor: "#212121" }} item xs={1} key={element.dt} >
                            <DailyForecast dailyWeatherInfo={element} iconStyle={iconStyle} />
                        </Grid>

                    )}

            </Grid>
        </Container >
    )
}

export default BottomSection;