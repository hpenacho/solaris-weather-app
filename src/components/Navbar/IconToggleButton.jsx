import * as React from 'react';
import { ReactComponent as AnimatedCloudyDay } from '../../assets/icons/animated/cloudy-day.svg'
import { Tooltip } from '@mui/material';
import { IconButton } from '@mui/material';
import { SvgIcon } from '@mui/material';

const IconToggleButton = ({ iconStyle, setIconStyle }) => {

    const toggleStyle = () => {
        setIconStyle((iconStyle) => (iconStyle === 'static' ? 'animated' : 'static'));
    };

    return (
        <Tooltip title="Toggle static/animated icons" placement="top">
            <IconButton onClick={() => toggleStyle()} color="inherit" sx={{ width: 47, height: 47 }}>
                {iconStyle === 'static' ?
                    <SvgIcon sx={{ fontSize: 47 }}>
                        <AnimatedCloudyDay /> </SvgIcon>
                    :
                    <img height='50px' alt="weatherIcon" src={`https://openweathermap.org/img/wn/02d@2x.png`} />}
            </IconButton>
        </Tooltip>
    );
}

export default IconToggleButton;