import React, { useRef } from 'react'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Stack } from '@mui/material';
import WeatherIcon from './WeatherIcon'
import Button from '@mui/material/Button';
import { formatHour } from '../../tools/dateFormatter'
import WeatherDetails from './WeatherDetails'

const HourlyForecast = ({ hourlyForecast, timezoneOffset, iconStyle }) => {

    const ref = useRef()
    const handleClick = () => {
        ref.current.handleClickOpen()
    }

    return (
        <>
            <Button fullWidth sx={{ textTransform: "none" }} onClick={handleClick}>
                <Stack alignItems="center" >
                    <ListItemText> {formatHour(hourlyForecast.dt + timezoneOffset)}h </ListItemText>
                    <ListItemIcon >
                        <svg width="100px" height="100px">
                            <WeatherIcon iconID={hourlyForecast.weather[0].icon} iconStyle={iconStyle} />
                        </svg>
                    </ListItemIcon>
                    <ListItemText> {Math.round(hourlyForecast.temp)}° </ListItemText>
                </Stack>
            </Button>
            <WeatherDetails forecastDetails={hourlyForecast} localTime={hourlyForecast.dt + timezoneOffset} iconStyle={iconStyle} ref={ref} />
        </>
    )
}

export default HourlyForecast;