import React, { useRef } from 'react'
import Button from '@mui/material/Button';
import WeatherIcon from './WeatherIcon';
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
                        <svg width="57px" height="57px">
                            <WeatherIcon iconID={dailyWeatherInfo.weather[0].icon} iconStyle={iconStyle} />
                        </svg>
                    </Grid>
                    <Grid item mx={1} >
                        <Grid item>
                            <Typography fontSize={20} color='textColor.default'> {Math.round(unitTypeSwitcher(dailyWeatherInfo.temp.max, unitType))}°  </Typography>
                        </Grid>
                        <Grid item>
                            <Typography color='textColor.default'> {Math.round(unitTypeSwitcher(dailyWeatherInfo.temp.min, unitType))}° </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Button >
            <WeatherDetails forecastDetails={dailyWeatherInfo} timezoneOffset={timezoneOffset} iconStyle={iconStyle} unitType={unitType} ref={ref} />
        </>
    )
}

export default DailyForecast;