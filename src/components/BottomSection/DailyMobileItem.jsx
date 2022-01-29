import { useRef } from 'react'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconStyler from '../../tools/IconStyler';
import { formatTime } from '../../tools/dateFormatter';
import { Box } from '@mui/system';

const DailyMobileItem = ({ dailyWeatherInfo, timezoneOffset, iconStyle, unitType }) => {
    const ref = useRef()
    const handleClick = () => {
        ref.current.handleClickOpen()
    }

    let weekday = formatTime(dailyWeatherInfo.dt, { weekday: 'long' })
    let date = formatTime(dailyWeatherInfo.dt, { year: 'numeric', month: 'numeric', day: 'numeric' })
    return (
        <>
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
                <ListItemText primary={'18°'} primaryTypographyProps={{ fontWeight: 'bold', color: '#F15421', fontSize: 16 }} />
                <ListItemText primary={'4°'} primaryTypographyProps={{ fontWeight: 'bold', color: '#589ceb', fontSize: 15 }} />
            </Box>
        </>
    )
}

export default DailyMobileItem;