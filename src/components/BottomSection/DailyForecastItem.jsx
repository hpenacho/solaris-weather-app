import { useRef } from 'react'
import Button from '@mui/material/Button';
import IconStyler from '../../tools/IconStyler';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { getWeekDay } from '../../tools/dateFormatter'
import WeatherDetails from '../WeatherDetailsSection/WeatherDetails'
import unitTypeSwitcher from '../../tools/unitTypeSwitcher';

let weekDay = ''
const DailyForecast = ({ dailyWeatherInfo, timezoneOffset, iconStyle, unitType }) => {

    if (dailyWeatherInfo) {
        weekDay = getWeekDay(dailyWeatherInfo.dt);
    }

    const ref = useRef()
    const handleClick = () => {
        ref.current.handleClickOpen()
    }

    return (
        <>
            <Button fullWidth sx={{ textTransform: "none" }} onClick={handleClick}>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item>
                        <Typography color='textColor.default' variant="h6"> {weekDay} </Typography>
                        {iconStyle === 'animated' &&
                            <svg width="60px" height="60px">
                                <IconStyler iconID={dailyWeatherInfo.weather[0].icon} iconStyle={iconStyle} />
                            </svg>
                        }
                        {iconStyle === 'static' &&
                            <IconStyler iconID={dailyWeatherInfo.weather[0].icon} iconStyle={'staticSmall'} />
                        }

                    </Grid>
                    <Grid item mx={1} >
                        <Grid container direction='column'>
                            <Grid item>
                                <Typography fontSize={20} color='textColor.default'> {Math.round(unitTypeSwitcher(dailyWeatherInfo.temp.max, unitType))}°  </Typography>
                            </Grid>
                            <Grid item>
                                <Typography color='textColor.default'> {Math.round(unitTypeSwitcher(dailyWeatherInfo.temp.min, unitType))}° </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Button >
            <WeatherDetails forecastDetails={dailyWeatherInfo} timezoneOffset={timezoneOffset} iconStyle={iconStyle} unitType={unitType} ref={ref} />
        </>
    )
}

export default DailyForecast;