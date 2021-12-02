import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Stack } from '@mui/material';
import WeatherIcon from './WeatherIcon'

const ThreeHourlyForecast = ({ hour, iconID, iconStyle, currentTemp, rain, snow }) => {

    return (
        <>
            <Stack alignItems="center">
                <ListItemText primary={hour} />
                <ListItemIcon>
                    <WeatherIcon iconID={iconID} iconStyle={iconStyle} />
                </ListItemIcon>
                <ListItemText primary={currentTemp} />
                <ListItemText primary={rain} />
                <ListItemText primary={snow} />
            </Stack>
        </>
    )
}

export default ThreeHourlyForecast;