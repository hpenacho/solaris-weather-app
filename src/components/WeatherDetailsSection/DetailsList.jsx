import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import { ReactComponent as Barometer } from '../../assets/icons/misc/wi-barometer.svg'
import { ReactComponent as Humidity } from '../../assets/icons/misc/wi-humidity.svg'
import InvertColorsTwoToneIcon from '@mui/icons-material/InvertColorsTwoTone';
import FilterDramaTwoToneIcon from '@mui/icons-material/FilterDramaTwoTone';
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import { Divider } from '@mui/material';
import { Stack } from '@mui/material';
import { SvgIcon } from '@mui/material';
import unitTypeSwitcher from '../../tools/unitTypeSwitcher';
import Item from './Item';
import SubItem from './SubItem';

const DetailsList = ({ forecastDetails, unitType }) => {
    const [openTemp, setOpenTemp] = useState(false);

    return (
        <List
            sx={{ width: '100%', borderRadius: 4, bgcolor: 'detailsModal.section' }}
        >
            <ListItemButton onClick={() => setOpenTemp(!openTemp)}>
                <ListItemIcon>
                    <SvgIcon fontSize='large'>
                        <DeviceThermostatOutlinedIcon />
                    </SvgIcon>
                </ListItemIcon>
                {isNaN(forecastDetails.temp) &&
                    <>
                        <ListItemText primaryTypographyProps={{ fontSize: 17.5, fontWeight: 'medium', }}
                            primary='Temperature' />
                        {openTemp ? <ExpandLess /> : <ExpandMore />}
                    </>
                }
                {!isNaN(forecastDetails.temp) &&
                    <>
                        <ListItemText
                            primaryTypographyProps={{ fontSize: 20, fontWeight: 'medium', }}
                            primary={`${Math.round(unitTypeSwitcher(forecastDetails.temp, unitType))}°`} secondary='Temperature' />
                        {openTemp ? <ExpandLess /> : <ExpandMore />}
                    </>
                }
            </ListItemButton>
            <Collapse in={openTemp} timeout="auto" unmountOnExit>
                <List component="div">
                    <Stack direction="row" justifyContent={'center'}>
                        <Stack direction="row" >
                            {!isNaN(forecastDetails.temp) &&
                                <>
                                    <SubItem
                                        icon={<DeviceThermostatOutlinedIcon />}
                                        iconSize={'medium'}
                                        text={`${Math.round(unitTypeSwitcher(forecastDetails.feels_like, unitType))}°`}
                                        textSize={17.5}
                                        subtitle='Feels Like'
                                    />
                                    <Divider orientation="vertical" variant="middle" flexItem />
                                </>
                            }
                        </Stack>
                        <Stack direction="row" >
                            {isNaN(forecastDetails.temp) &&
                                <>
                                    <SubItem
                                        icon={<DeviceThermostatOutlinedIcon sx={{ color: '#F15421' }} />}
                                        iconSize={'medium'}
                                        text={`${Math.round(unitTypeSwitcher(forecastDetails.temp.max, unitType))}°`}
                                        textSize={17.5}
                                        subtitle='Max'
                                    />
                                    <Divider orientation="vertical" variant="middle" flexItem />
                                    <SubItem
                                        icon={<DeviceThermostatOutlinedIcon sx={{ color: '#589ceb' }} />}
                                        iconSize={'medium'}
                                        text={`${Math.round(unitTypeSwitcher(forecastDetails.temp.min, unitType))}°`}
                                        textSize={17.5}
                                        subtitle='Min'
                                    />
                                    <Divider orientation="vertical" variant="middle" flexItem />
                                </>
                            }
                            <SubItem
                                icon={<DeviceThermostatOutlinedIcon />}
                                iconSize={'medium'}
                                text={`${unitTypeSwitcher(forecastDetails.dew_point, unitType).toFixed(1)}°`}
                                textSize={17.5}
                                subtitle={'Dew Point'}
                            />
                        </Stack>
                    </Stack>
                </List>
            </Collapse >
            <Stack direction={{ xs: 'column', sm: "row" }} justifyContent={'center'}>
                <Item
                    icon={<Humidity />}
                    iconSize={'large'}
                    text={`${Math.round(forecastDetails.humidity)}%`}
                    textSize={20}
                    subtitle='Humidity'
                />
                {forecastDetails.pop !== 0 &&
                    <>
                        <Divider sx={{ display: { xs: 'none', sm: 'block' } }} orientation="vertical" variant="middle" flexItem />
                        <Item
                            icon={<InvertColorsTwoToneIcon />}
                            iconSize={'large'}
                            text={`${Math.round(forecastDetails.pop * 100)}%`}
                            textSize={20}
                            subtitle='Chance of Precipitation'
                        />
                    </>
                }
            </Stack>
            <Stack direction={{ xs: 'column', sm: "row" }} justifyContent={'center'}>
                <Item
                    icon={<AirRoundedIcon />}
                    iconSize={'large'}
                    text={`${forecastDetails.wind_deg} at ${forecastDetails.wind_speed} km/h`}
                    textSize={18}
                    subtitle='Wind direction and speed'
                />
                <Divider sx={{ display: { xs: 'none', sm: 'block' } }} orientation="vertical" variant="middle" flexItem />
                <Item
                    icon={<AirRoundedIcon />}
                    iconSize={'large'}
                    text={`${forecastDetails.wind_gust} km/h`}
                    textSize={18}
                    subtitle='Wind Gusts'
                />
            </Stack>
            <Stack direction={{ xs: 'column', sm: "row" }} justifyContent={'center'}>
                <Item
                    icon={<FilterDramaTwoToneIcon />}
                    iconSize={'large'}
                    text={`${forecastDetails.clouds}%`}
                    textSize={20}
                    subtitle='Cloud Coverage'
                />
                {forecastDetails.visibility &&
                    <>
                        <Divider sx={{ display: { xs: 'none', sm: 'block' } }} orientation="vertical" variant="middle" flexItem />
                        <Item
                            icon={<VisibilityTwoToneIcon />}
                            iconSize={'large'}
                            text={`${forecastDetails.visibility} m`}
                            textSize={20}
                            subtitle='Visibility'
                        />
                    </>
                }
            </Stack>
            <Stack direction={{ xs: 'column', sm: "row" }} justifyContent={'center'}>
                <Item
                    icon={<Barometer />}
                    iconSize={'large'}
                    text={`${forecastDetails.pressure} hpa`}
                    textSize={20}
                    subtitle='Air Pressure'
                />
                {forecastDetails.uvi !== 0 &&
                    <>
                        <Divider sx={{ display: { xs: 'none', sm: 'block' } }} orientation="vertical" variant="middle" flexItem />
                        <Item
                            icon={<BeachAccessIcon />}
                            iconSize={'large'}
                            text={`${forecastDetails.uvi}`}
                            textSize={20}
                            subtitle='UV Index'
                        />
                    </>
                }
            </Stack>
        </List >
    );
}

export default DetailsList;