import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ReactComponent as AnimatedCloudyDay } from '../../assets/icons/animated/cloudy-day.svg'
import { Tooltip } from '@mui/material';

const IconToggleButton = ({ iconStyle, setIconStyle }) => {

    const handleUnit = (event, chosenStyle) => {
        if (chosenStyle !== null) {
            setIconStyle(chosenStyle)
        }
    };

    return (

        <ToggleButtonGroup
            value={iconStyle}
            exclusive
            onChange={handleUnit}
            aria-label="iconStyle"
        >
            <Tooltip title="Click for static icons" placement="top">
                <ToggleButton sx={{ height: 39, paddingX: 0.5, borderRadius: 4 }} value="static" aria-label="Static">
                    <img height='35px' alt="weatherIcon" src={`https://openweathermap.org/img/wn/02d@2x.png`} />
                </ToggleButton>
            </Tooltip>
            <Tooltip title="Click for animated icons" placement="top">
                <ToggleButton sx={{ height: 39, paddingX: 0.5, borderRadius: 4 }} value="animated" aria-label="Animated">
                    <svg width="35px" height="35px">
                        <AnimatedCloudyDay />
                    </svg>
                </ToggleButton>
            </Tooltip>
        </ToggleButtonGroup >

    );
}

export default IconToggleButton;