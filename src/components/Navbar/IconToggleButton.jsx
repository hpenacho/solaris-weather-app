import { ReactComponent as AnimatedCloudyDay } from '../../assets/icons/animated/cloudy-day.svg'
import { Tooltip } from '@mui/material';
import { IconButton } from '@mui/material';
import { Icon } from '@mui/material';

const IconToggleButton = ({ iconStyle, setIconStyle }) => {

    const toggleStyle = () => {
        setIconStyle((iconStyle) => (iconStyle === 'static' ? 'animated' : 'static'));
        window.localStorage.setItem('iconStyle', iconStyle === 'static' ? 'animated' : 'static')
    };

    return (
        <Tooltip title="Toggle static/animated icons" placement="top">
            <IconButton onClick={() => toggleStyle()} color="inherit" sx={{ width: 50, height: 50 }}>
                {iconStyle === 'static' ?
                    <Icon sx={{ fontSize: 50 }}>
                        <AnimatedCloudyDay />
                    </Icon>
                    :
                    <img height='50px' alt="weatherIcon" src={`https://openweathermap.org/img/wn/02d@2x.png`} />}
            </IconButton>
        </Tooltip>
    );
}

export default IconToggleButton;