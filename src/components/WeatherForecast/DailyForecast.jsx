import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import Icon from '@mui/material/Icon';
import WeatherIcon from './WeatherIcon'

let getWeekDay = (date) => {
    let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = new Date(date).getDay();
    return weekdays[day];
}
let weekDay = ''
const DailyForecast = ({ dailyWeatherInfo, iconStyle }) => {

    console.log(dailyWeatherInfo)
    if (dailyWeatherInfo) {
        weekDay = getWeekDay(dailyWeatherInfo.dt);
    }

    return (
        <Button sx={{ textTransform: "none", minHeight: 120, borderRadius: 0, borderRight: 1, borderColor: 'grey.800' }}>
            <Stack>
                <Typography variant="h6" > {weekDay} </Typography>
                <Icon> <WeatherIcon iconID={dailyWeatherInfo.weather[0].icon} iconStyle={iconStyle} /> </Icon>
                <Typography variant="body1" > {dailyWeatherInfo.temp.max} </Typography>
                <Typography variant="body2" > {dailyWeatherInfo.temp.min} </Typography>
            </Stack>
        </Button >
    )
}

export default DailyForecast;