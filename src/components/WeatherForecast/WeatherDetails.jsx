import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import WeatherIcon from './WeatherIcon'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/system';

let formatDate = (date) => {
    let formattedDate = new Date(date * 1000)
    return formattedDate.toDateString();
}

const WeatherDetails = ({ weatherDetails }) => {
    let date = ""
    if (weatherDetails) {
        date = formatDate(weatherDetails.current.dt)
    }
    console.log("DETAILS", weatherDetails)
    return (
        <>
            {weatherDetails &&
                <Box sx={{ border: 1, borderColor: "red", backgroundColor: "gray" }}>
                    <Stack alignItems="center">
                        <ListItemText> {date} </ListItemText>
                        <ListItemIcon>

                        </ListItemIcon>
                        <ListItemText>   </ListItemText>
                        <ListItemText />
                        <ListItemText />
                    </Stack>
                </Box>
            }
        </>
    )
}

export default WeatherDetails