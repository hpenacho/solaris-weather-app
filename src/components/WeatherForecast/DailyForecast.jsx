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
        <Button sx={{ textTransform: "none", minHeight: 120, maxWidth: 120, borderRadius: 0, borderRight: 1, borderColor: 'grey.800' }}>
            <Stack alignItems="center">
                <ListItemText> {weekDay}</ListItemText>
                <ListItemIcon fontSize=""> <WeatherIcon iconID={dailyWeatherInfo.weather[0].icon} iconStyle={iconStyle} /></ListItemIcon>
                <ListItemText> {Math.round(dailyWeatherInfo.temp.max)} </ListItemText>
                <ListItemText> {Math.round(dailyWeatherInfo.temp.min)}</ListItemText>
            </Stack>
        </Button >
    )
}

export default DailyForecast;