import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Stack } from '@mui/material';
import WeatherIcon from './WeatherIcon'
import Button from '@mui/material/Button';

const HourlyForecast = ({ hour, iconID, iconStyle, currentTemp, rain, snow }) => {

    return (
        <>
            <Button fullWidth sx={{ textTransform: "none" }} >
                <Stack alignItems="center" >
                    <ListItemText> {hour}h </ListItemText>
                    <ListItemIcon>
                        <WeatherIcon iconID={iconID} iconStyle={iconStyle} />
                    </ListItemIcon>
                    <ListItemText>  {currentTemp}° </ListItemText>
                    <ListItemText primary={rain} />
                    <ListItemText primary={snow} />
                </Stack>
            </Button>
        </>
    )
}

export default HourlyForecast;