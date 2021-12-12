import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Stack } from '@mui/material';
import WeatherIcon from './WeatherIcon'
import Button from '@mui/material/Button';

const HourlyForecast = ({ hour, iconID, iconStyle, currentTemp }) => {

    return (
        <>
            <Button fullWidth sx={{ textTransform: "none" }} >
                <Stack alignItems="center" >
                    <ListItemText> {hour}h </ListItemText>
                    <ListItemIcon>
                        <WeatherIcon iconID={iconID} iconStyle={iconStyle} />
                    </ListItemIcon>
                    <ListItemText>  {currentTemp}° </ListItemText>
                </Stack>
            </Button>
        </>
    )
}

export default HourlyForecast;