import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import WeatherIcon from './WeatherIcon'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

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
            <Stack alignItems="center">
                <ListItemText> {weekDay}</ListItemText>
                <ListItemIcon> <WeatherIcon iconID={dailyWeatherInfo.weather[0].icon} iconStyle={iconStyle} /></ListItemIcon>
                <ListItemText> <b> {Math.round(dailyWeatherInfo.temp.max)}° </b></ListItemText>
                <ListItemText> {Math.round(dailyWeatherInfo.temp.min)}°</ListItemText>
            </Stack>
        </Button >
    )
}

export default DailyForecast;