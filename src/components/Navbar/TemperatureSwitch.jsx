import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { SvgIcon } from '@mui/material';
import { ReactComponent as Celsius } from '../../assets/icons/misc/celsius.svg'
import { ReactComponent as Fahrenheit } from '../../assets/icons/misc/fahrenheit.svg'
import { Tooltip } from '@mui/material';
import Zoom from '@mui/material/Zoom';

const TemperatureSwitch = ({ unitType, setUnitType }) => {

    const handleUnit = (event, chosenUnit) => {
        if (chosenUnit !== null) {
            setUnitType(chosenUnit)
            window.localStorage.setItem('unitType', chosenUnit)
        }
    };

    return (

        <Tooltip TransitionComponent={Zoom} title={'Toggle Celcius/Fahrenheit'} placement="top">
            <ToggleButtonGroup
                value={unitType}
                exclusive
                onChange={handleUnit}
                aria-label="unitType"
            >
                <ToggleButton sx={{ height: 30, borderRadius: 4 }} value="celsius" aria-label="Celsius">
                    <SvgIcon sx={{ fontSize: 21 }}>
                        <Celsius />
                    </SvgIcon>
                </ToggleButton>
                <ToggleButton sx={{ height: 30, borderRadius: 4 }} value="fahrenheit" aria-label="Fahrenheit">
                    <SvgIcon sx={{ fontSize: 21 }}>
                        <Fahrenheit />
                    </SvgIcon>
                </ToggleButton>
            </ToggleButtonGroup>
        </Tooltip>
    );
}

export default TemperatureSwitch;