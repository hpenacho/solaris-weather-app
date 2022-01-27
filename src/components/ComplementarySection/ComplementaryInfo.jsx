import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import AlertModal from './AlertModal'
import ComplementaryItem from './ComplementaryItem'
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import InvertColorsTwoToneIcon from '@mui/icons-material/InvertColorsTwoTone';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const ComplementaryInfo = ({ weatherData }) => {

    return (
        <Box px={2} pb={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
            {weatherData &&
                <Grid sx={{ height: 57 }} container alignItems="center" justifyContent="flex-start" spacing={1}>

                    <ComplementaryItem
                        title="Current Humidity"
                        icon={<InvertColorsTwoToneIcon />}
                        label={`${weatherData.current.humidity}%`}
                    />

                    <ComplementaryItem
                        title={"Current wind direction & speed"}
                        icon={<AirRoundedIcon />}
                        label={`${weatherData.current.wind_deg} at ${weatherData.current.wind_speed} km/h`}
                    />

                    {weatherData.current.uvi !== 0 &&
                        <ComplementaryItem
                            title={"Ultra Violet Index"}
                            icon={<BeachAccessIcon />}
                            label={weatherData.current.uvi}
                        />
                    }

                    {weatherData.alerts &&
                        weatherData.alerts.map((element, index) =>
                            <Grid item key={index}>
                                <AlertModal alertData={element} index={index} />
                            </Grid>
                        )}
                </Grid>
            }
        </Box>
    )
}

export default ComplementaryInfo