import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';
import IconToggleButton from './IconToggleButton';
import TimeframeForecast from './TimeframeForecast';
import TemperatureSwitch from './TemperatureSwitch';
import { Stack } from '@mui/material'

const SettingsMenu = ({ iconStyle, setIconStyle, timeframe, setTimeframe, unitType, setUnitType }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="settings-button"
                aria-controls={open ? 'settings-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color='inherit'
            >
                <SettingsIcon />
            </Button>
            <Menu
                id="settings-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'settings-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <IconToggleButton iconStyle={iconStyle} setIconStyle={setIconStyle} />
                        <TemperatureSwitch unitType={unitType} setUnitType={setUnitType} />
                        <TimeframeForecast timeframe={timeframe} setTimeframe={setTimeframe} />
                    </Stack>
                </MenuItem>
            </Menu>
        </div>
    );
}

export default SettingsMenu;