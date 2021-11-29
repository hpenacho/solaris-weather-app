import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';

let getWeekDay = (date) => {
    //Create an array containing each day, starting with Sunday.
    let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    //Use the getDay() method to get the day.
    let day = new Date(date).getDay();
    //Return the element that corresponds to that index.
    return weekdays[day];
}
let weekDay = ''
const DailyForecast = ({ weatherInfo }) => {

    console.log(weatherInfo)
    if (weatherInfo) {
        weekDay = getWeekDay(weatherInfo.list[0].dt_txt);
    }

    return (
        <Button sx={{ textTransform: "none", minHeight: 120, borderRadius: 0, borderRight: 1, borderColor: 'grey.800' }}>
            <Stack>
                <Typography variant="body1" > {weekDay} </Typography>
                <Typography variant="body1" component="div" > icon </Typography>
                <Typography component="div" > max temp </Typography>
                <Typography component="div" > min temp </Typography>
                <Typography primary={weekDay} />
            </Stack>
        </Button >
    )
}

export default DailyForecast;