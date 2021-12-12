import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import AlertModal from './AlertModal'
import Chip from '@mui/material/Chip';
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import InvertColorsTwoToneIcon from '@mui/icons-material/InvertColorsTwoTone';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

const ComplementaryInfo = ({ weatherData }) => {

    return (
        <Container>
            {weatherData &&
                <Grid pb={1} container alignItems="center" justifyContent="flex-start">
                    <Grid item>
                        <Grid pr={1} container direction="row" alignItems="center">
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

                    {weatherData.alerts &&
                        weatherData.alerts.map((element, index) =>
                            <Grid item key={index}>
                                <AlertModal alertData={element} index={index} />
                            </Grid>
                        )}
                </Grid>
            }
        </Container>
    )
}

export default ComplementaryInfo