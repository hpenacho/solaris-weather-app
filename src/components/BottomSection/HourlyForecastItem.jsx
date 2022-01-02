import React, { useRef } from 'react'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Stack } from '@mui/material';
import WeatherIcon from '../WeatherIcon'
import Button from '@mui/material/Button';
import { formatHour } from '../../tools/dateFormatter'
import WeatherDetails from '../WeatherDetailsSection/WeatherDetails'
import unitTypeSwitcher from '../../tools/unitTypeSwitcher';

const HourlyForecast = ({ hourlyForecast, timezoneOffset, iconStyle, unitType }) => {

    const ref = useRef()
    const handleClick = () => {
        ref.current.handleClickOpen()
    }

    return (
        <>
            <Button fullWidth sx={{ textTransform: "none" }} onClick={handleClick}>
                <Stack alignItems="center" >
                    <ListItemText primaryTypographyProps={{ fontSize: 21, color: 'textColor.default', mb: -2 }}>
                        {formatHour(hourlyForecast.dt + timezoneOffset)}h
                    </ListItemText>
                    <ListItemIcon>
                        {iconStyle === 'animated' &&
                            <svg width="100px" height="100px">
                                <WeatherIcon iconID={hourlyForecast.weather[0].icon} iconStyle={iconStyle} />
                            </svg>
                        }
                        {iconStyle === 'static' &&
                            <WeatherIcon iconID={hourlyForecast.weather[0].icon} iconStyle={iconStyle} />
                        }
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ fontSize: 19, color: 'textColor.default', mt: -1 }}>
                        {Math.round(unitTypeSwitcher(hourlyForecast.temp, unitType))}°
                    </ListItemText>
                </Stack>
            </Button>
            <WeatherDetails forecastDetails={hourlyForecast} localTime={hourlyForecast.dt + timezoneOffset} iconStyle={iconStyle} unitType={unitType} ref={ref} />
        </>
    )
}

export default HourlyForecast;