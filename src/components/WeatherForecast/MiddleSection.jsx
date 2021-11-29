import { Grid } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ThreeHourlyForecast from './ThreeHourlyForecast';

const MiddleSection = ({ weatherInfo }) => {
    console.log(weatherInfo)
    return (
        <>
            <List disablePadding>
                <Grid container direction="row" justifyContent="space-evenly">
                    <Grid item xs={1}>
                        <ListItem disablePadding >
                            <ThreeHourlyForecast weatherInfo={weatherInfo} />
                        </ListItem>
                    </Grid>
                </Grid>
            </List >
        </>
    )
}

export default MiddleSection;