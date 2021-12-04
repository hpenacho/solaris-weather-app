import { Grid } from '@mui/material';
import DailyForecast from './DailyForecast';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Container } from '@mui/material'

let slicedForecast = [];
const BottomSection = ({ dailyWeatherInfo, iconStyle }) => {

    if (dailyWeatherInfo) {
        slicedForecast = dailyWeatherInfo.daily
            .slice(0, 7)
    }

    return (
        <Container disableGutters sx={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
            <Grid container direction="row" sx={{ justifyContent: 'space-between' }} columns={7}>
                {dailyWeatherInfo &&
                    slicedForecast.map(element =>
                        <Grid item xs={1} key={element.dt} >
                            <DailyForecast dailyWeatherInfo={element} iconStyle={iconStyle} />
                        </Grid>
                    )}
            </Grid>
        </Container>

    )
}

export default BottomSection;