import { Grid } from '@mui/material';
import ThreeHourlyForecast from './ThreeHourlyForecast';
import { Container } from '@mui/material'
import ComplementaryInfo from './ComplementaryInfo'

let formatHour = (date) => {
    let formattedDate = new Date(date)
    let hour = formattedDate.getHours()

    return hour;
}

let slicedForecast = [];
const MiddleSection = ({ weatherInfo, iconStyle }) => {

    if (weatherInfo) {
        slicedForecast = weatherInfo.list
            .slice(0, 8)
    }

    return (
        <Container disableGutters sx={{ backgroundColor: '#212121' }}>
            <Grid container direction="row" sx={{ justifyContent: 'space-between' }} columns={8} >
                {weatherInfo &&
                    slicedForecast.map(element =>
                        <Grid item md={1} key={element.dt} >
                            <ThreeHourlyForecast
                                hour={formatHour(element.dt_txt)}
                                iconID={element.weather[0].icon}
                                iconStyle={iconStyle}
                                currentTemp={Math.round(element.main.temp)}
                                rain={element.rain && element.rain["3h"]}
                                snow={element.snow && element.snow["3h"]} />
                        </Grid>
                    )}
            </Grid>
            <ComplementaryInfo weatherInfo={weatherInfo} />
        </Container>
    )
}

export default MiddleSection;