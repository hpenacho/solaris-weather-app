import { Grid } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ThreeHourlyForecast from './ThreeHourlyForecast';

let formatHour = (date) => {
    let formattedDate = new Date(date)
    let hour = formattedDate.getHours()

    return hour;
}

let slicedForecast = [];
const MiddleSection = ({ weatherInfo }) => {

    if (weatherInfo) {
        slicedForecast = weatherInfo.list
            .slice(0, 8)
    }

    return (
        <>
            <List disablePadding>
                <Grid container direction="row" justifyContent="space-evenly">
                    {weatherInfo &&
                        slicedForecast.map(element =>
                            <Grid item key={element.dt}>
                                <ListItem disablePadding >
                                    <ThreeHourlyForecast
                                        hour={formatHour(element.dt_txt)}
                                        iconID={element.weather[0].icon}
                                        currentTemp={Math.round(element.main.temp)}
                                        rain={element.rain && element.rain["3h"]}
                                        snow={element.snow && element.snow["3h"]} />
                                </ListItem>
                            </Grid>
                        )}
                </Grid>
            </List >
        </>
    )
}

export default MiddleSection;