import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Stack } from '@mui/material';



const ThreeHourlyForecast = ({ weatherInfo }) => {

    console.log(weatherInfo)

    return (
        <ListItemButton sx={{ minHeight: 120 }}>
            <Stack alignItems="center">
                <ListItemText primary={1} />
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={2} />
                <ListItemText primary={3} />
            </Stack>
        </ListItemButton>
    )
}

export default ThreeHourlyForecast;