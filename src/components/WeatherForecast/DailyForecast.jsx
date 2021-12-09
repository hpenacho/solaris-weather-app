import Button from '@mui/material/Button';
import WeatherIcon from './WeatherIcon';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

let getWeekDay = (date) => {
    let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = new Date(date * 1000).getDay();
    return weekdays[day];
}
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
                    <SvgIcon sx={{ fontSize: 60 }}>
                        <WeatherIcon iconID={dailyWeatherInfo.weather[0].icon} iconStyle={iconStyle} />
                    </SvgIcon>
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