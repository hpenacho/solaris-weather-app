import { Grid } from '@mui/material';
import DailyForecast from './DailyForecast';
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';

let slicedForecast = [];
const BottomSection = ({ dailyWeatherInfo, iconStyle }) => {

    if (dailyWeatherInfo) {
        slicedForecast = dailyWeatherInfo.daily
            .slice(0, 7)
    }

    return (
        <List disablePadding>
            <Grid container direction="row" justifyContent="space-between">
                {dailyWeatherInfo &&
                    slicedForecast.map(element =>
                        <Grid item key={element.dt} >
                            <ListItem disablePadding sx={{ maxWidth: 120 }}>
                                <DailyForecast dailyWeatherInfo={element} iconStyle={iconStyle} />
                            </ListItem>
                        </Grid>
                    )}
            </Grid>
        </List>
    )
}

export default BottomSection;