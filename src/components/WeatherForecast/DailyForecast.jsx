import Button from '@mui/material/Button';
import WeatherIcon from './WeatherIcon';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { getWeekDay } from '../../tools/dateFormatter'


let weekDay = ''
const DailyForecast = ({ dailyWeatherInfo, iconStyle }) => {

    if (dailyWeatherInfo) {
        weekDay = getWeekDay(dailyWeatherInfo.dt);
    }

    return (
        <Button fullWidth sx={{ textTransform: "none" }} >
            <Grid container justifyContent="center" alignItems="center">
                <Grid item>
                    <Typography variant="h6"> {weekDay} </Typography>
                    <svg width="55px" height="55px">
                        <WeatherIcon iconID={dailyWeatherInfo.weather[0].icon} iconStyle={iconStyle} />
                    </svg>
                </Grid>
                <Grid item mx={1}>
                    <Grid item>
                        <Typography><b> {Math.round(dailyWeatherInfo.temp.max)}° </b> </Typography>
                    </Grid>
                    <Grid item>
                        <Typography> {Math.round(dailyWeatherInfo.temp.min)}° </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Button >
    )
}

export default DailyForecast;