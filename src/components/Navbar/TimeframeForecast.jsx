import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from '@mui/material';

const TimeframeForecast = ({ timeframe, setTimeframe }) => {

    const handleUnit = (event, chosenUnit) => {
        if (chosenUnit !== null) {
            setTimeframe(chosenUnit)
        }
    };

    return (

        <ToggleButtonGroup
            value={timeframe}
            exclusive
            onChange={handleUnit}
            aria-label="timeframe"
        >
            <ToggleButton sx={{ textTransform: "none", height: 24, paddingX: 0.5, borderRadius: 4 }} value={1} aria-label="1h">
                <Typography fontStyle='italic' fontSize={20}> 1h</Typography>
            </ToggleButton>
            <ToggleButton sx={{ textTransform: "none", height: 24, paddingX: 0.5, borderRadius: 4 }} value={3} aria-label="3h">
                <Typography fontStyle='italic' fontSize={20}> 3h</Typography>
            </ToggleButton>
            <ToggleButton sx={{ textTransform: "none", height: 24, paddingX: 0.5, borderRadius: 4 }} value={6} aria-label="6h">
                <Typography fontStyle='italic' fontSize={20}> 6h</Typography>
            </ToggleButton>
        </ToggleButtonGroup>

    );
}

export default TimeframeForecast;