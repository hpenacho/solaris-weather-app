import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from '@mui/material';
import { Tooltip } from '@mui/material';
import Zoom from '@mui/material/Zoom';

const TimeframeForecast = ({ timeframe, setTimeframe }) => {

    const handleUnit = (event, chosenUnit) => {
        if (chosenUnit !== null) {
            setTimeframe(chosenUnit)
            window.localStorage.setItem('timeframe', chosenUnit)
        }
    };

    return (

        <Tooltip TransitionComponent={Zoom} title={'Toggle forecast timeframe'} placement="top">
            <ToggleButtonGroup
                value={timeframe}
                exclusive
                onChange={handleUnit}
                aria-label="timeframe"
            >
                <ToggleButton sx={{ textTransform: "none", height: 30, borderRadius: 4 }} value={1} aria-label="1h">
                    <Typography fontStyle='italic' fontSize={21}> 1h</Typography>
                </ToggleButton>
                <ToggleButton sx={{ textTransform: "none", height: 30, borderRadius: 4 }} value={3} aria-label="3h">
                    <Typography fontStyle='italic' fontSize={21}> 3h</Typography>
                </ToggleButton>
                <ToggleButton sx={{ textTransform: "none", height: 30, borderRadius: 4 }} value={6} aria-label="6h">
                    <Typography fontStyle='italic' fontSize={21}> 6h</Typography>
                </ToggleButton>
            </ToggleButtonGroup>
        </Tooltip>
    );
}

export default TimeframeForecast;