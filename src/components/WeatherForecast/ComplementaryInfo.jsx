import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import AlertModal from './AlertModal'
import Chip from '@mui/material/Chip';
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import InvertColorsTwoToneIcon from '@mui/icons-material/InvertColorsTwoTone';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import WeatherDetails from './WeatherDetails'

const ComplementaryInfo = ({ weatherData }) => {

    return (
        <Container >
            {weatherData &&
                <Grid pb={2} mt={1} container alignItems="center" justifyContent="flex-start" spacing={1}>
                    <Grid item>
                        <Grid container direction="row" alignItems="center">
                            <Tooltip TransitionComponent={Zoom} title="Current Humidity">
                                <Chip icon={<InvertColorsTwoToneIcon />}
                                    label={`${weatherData.current.humidity}%`}
                                    variant="outlined" />
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <Tooltip TransitionComponent={Zoom} title="Current wind direction and speed">
                            <Chip icon={<AirRoundedIcon />}
                                label={`${weatherData.current.wind_deg} at ${weatherData.current.wind_speed} km/h`}
                                variant="outlined" />
                        </Tooltip>
                    </Grid>

                    {weatherData.current.uvi !== 0 &&
                        <Grid item >
                            <Tooltip TransitionComponent={Zoom} title="Ultra Violet Index">
                                <Chip icon={<BeachAccessIcon />}
                                    label={weatherData.current.uvi}
                                    variant="outlined" />
                            </Tooltip>
                        </Grid>
                    }
                    {weatherData.alerts &&
                        weatherData.alerts.map((element, index) =>
                            <Grid item key={index}>
                                <AlertModal alertData={element} index={index} />
                            </Grid>
                        )}
                    <Grid item>
                        <WeatherDetails></WeatherDetails>
                    </Grid>
                </Grid>

            }
        </Container>
    )
}

export default ComplementaryInfo