import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { SvgIcon } from '@mui/material';
import { ReactComponent as Celsius } from '../../assets/icons/misc/celsius.svg'
import { ReactComponent as Fahrenheit } from '../../assets/icons/misc/fahrenheit.svg'

const TemperatureSwitch = ({ unitType, setUnitType }) => {

    const handleUnit = (event, chosenUnit) => {
        if (chosenUnit !== null) {
            setUnitType(chosenUnit)
        }
    };

    return (

        <ToggleButtonGroup
            value={unitType}
            exclusive
            onChange={handleUnit}
            aria-label="unitType"
        >
            <ToggleButton sx={{ height: 24, paddingX: 0.5, borderRadius: 4 }} value="celsius" aria-label="Celsius">
                <SvgIcon sx={{ fontSize: 20 }}>
                    <Celsius />
                </SvgIcon>

            </ToggleButton>
            <ToggleButton sx={{ height: 24, paddingX: 0.5, borderRadius: 4 }} value="fahrenheit" aria-label="Fahrenheit">
                <SvgIcon sx={{ fontSize: 20 }}>
                    <Fahrenheit />
                </SvgIcon>
            </ToggleButton>
        </ToggleButtonGroup>

    );
}

export default TemperatureSwitch;