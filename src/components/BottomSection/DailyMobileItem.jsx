import { useRef } from 'react'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconStyler from '../../tools/IconStyler';
import { formatTime } from '../../tools/dateFormatter';
import { Box } from '@mui/system';
import WeatherDetails from '../WeatherDetailsSection/WeatherDetails';
import ListItem from '@mui/material/ListItem';
import unitTypeSwitcher from '../../tools/unitTypeSwitcher';

const DailyMobileItem = ({ dailyWeatherInfo, timezoneOffset, iconStyle, unitType }) => {
    const ref = useRef()
    const handleClick = () => {
        ref.current.handleClickOpen()
    }

    let weekday = formatTime(dailyWeatherInfo.dt, { weekday: 'long' })
    let date = formatTime(dailyWeatherInfo.dt, { year: 'numeric', month: 'numeric', day: 'numeric' })
    let maxTemp = Math.round(unitTypeSwitcher(dailyWeatherInfo.temp.max, unitType))
    let minTemp = Math.round(unitTypeSwitcher(dailyWeatherInfo.temp.min, unitType))

    return (
        <>
            <ListItem button onClick={handleClick} sx={{ paddingX: 1, paddingY: 0, display: 'flex', justifyContent: 'space-between' }}>
                <ListItemIcon>
                    {iconStyle === 'animated' &&
                        <svg width="60px" height="60px">
                            <IconStyler iconID={dailyWeatherInfo.weather[0].icon} iconStyle={iconStyle} />
                        </svg>
                    }
                    {iconStyle === 'static' &&
                        <IconStyler iconID={dailyWeatherInfo.weather[0].icon} iconStyle={'staticSmall'} />
                    }            </ListItemIcon>

                <ListItemText sx={{ marginLeft: 1 }} primary={weekday} secondary={date} primaryTypographyProps={{ letterSpacing: 1.2, fontSize: 19 }} />

                <Box sx={{ textAlign: 'right' }}>
                    <ListItemText primary={`${maxTemp}°`} primaryTypographyProps={{ fontWeight: 'bold', color: '#F15421', fontSize: 16 }} />
                    <ListItemText primary={`${minTemp}°`} primaryTypographyProps={{ fontWeight: 'bold', color: '#589ceb', fontSize: 15 }} />
                </Box>
            </ListItem>
            <WeatherDetails forecastDetails={dailyWeatherInfo} timezoneOffset={timezoneOffset} iconStyle={iconStyle} unitType={unitType} ref={ref} />
        </>
    )
}

export default DailyMobileItem;