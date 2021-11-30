import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Stack } from '@mui/material';
import Icon from './Icon'

const ThreeHourlyForecast = ({ hour, iconID, currentTemp, rain, snow }) => {

    const styleObj = {
        backgroundColor: "red"
    }

    return (
        <>
            <ListItemButton sx={{ minHeight: 120 }}>
                <Stack alignItems="center">
                    <ListItemText primary={hour} />
                    <ListItemIcon>
                        <Icon style={styleObj} iconID={iconID} isAnimated={true} />
                    </ListItemIcon>
                    <ListItemText primary={currentTemp} />
                    <ListItemText primary={rain} />
                    <ListItemText primary={snow} />
                </Stack>
            </ListItemButton>
        </>
    )
}

export default ThreeHourlyForecast;