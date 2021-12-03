import { Grid } from '@mui/material';
import DailyForecast from './DailyForecast';
import Box from '@mui/material/Box'

const BottomSection = ({ dailyWeatherInfo, iconStyle }) => {

    return (

        <Grid container direction="row" justifyContent="space-between">
            {dailyWeatherInfo &&
                dailyWeatherInfo.daily.map(element =>
                    <Grid item key={element.dt} >
                        <Box>
                            <DailyForecast dailyWeatherInfo={element} iconStyle={iconStyle} />
                        </Box>
                    </Grid>
                )}
        </Grid>
    )
}

export default BottomSection;