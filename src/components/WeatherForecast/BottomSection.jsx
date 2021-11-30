import { Grid } from '@mui/material';
import DailyForecast from './DailyForecast';
import Box from '@mui/material/Box'

const BottomSection = ({ weatherInfo }) => {

    return (

        <Grid container direction="row" justifyContent="space-between">
            <Grid item>
                <Box>
                    <DailyForecast weatherInfo={weatherInfo} />
                </Box>
            </Grid>
        </Grid>
    )
}

export default BottomSection;