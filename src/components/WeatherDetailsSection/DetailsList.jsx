import * as React from 'react';
import List from '@mui/material/List';
import { ListItem } from '@mui/material';
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

const DetailsList = ({ forecastDetails, unitType }) => {
    const [openTemp, setOpenTemp] = React.useState(false);

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
                        <ListItemText primaryTypographyProps={{ fontSize: 17, fontWeight: 'medium', }}
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
                                    <ListItem>
                                        <ListItemIcon>
                                            <SvgIcon>
                                                <DeviceThermostatOutlinedIcon />
                                            </SvgIcon>
                                        </ListItemIcon>

                                        <ListItemText primaryTypographyProps={{
                                            fontSize: 16,
                                            fontWeight: 'medium'
                                        }} primary={`${Math.round(unitTypeSwitcher(forecastDetails.feels_like, unitType))}°`}
                                            secondary='Feels Like' />
                                    </ListItem>
                                    <Divider orientation="vertical" variant="middle" flexItem />
                                </>
                            }
                        </Stack>
                        <Stack direction="row" >
                            {isNaN(forecastDetails.temp) &&
                                <>
                                    <ListItem>
                                        <ListItemIcon>
                                            <DeviceThermostatOutlinedIcon sx={{ color: '#F15421' }} />
                                        </ListItemIcon>
                                        <ListItemText primaryTypographyProps={{
                                            fontSize: 16,
                                            fontWeight: 'medium'
                                        }} primary={`${Math.round(unitTypeSwitcher(forecastDetails.temp.max, unitType))}°`}
                                            secondary='Max'
                                        />
                                    </ListItem>
                                    <Divider orientation="vertical" variant="middle" flexItem />
                                    <ListItem >
                                        <ListItemIcon>
                                            <DeviceThermostatOutlinedIcon sx={{ color: '#589ceb' }} />
                                        </ListItemIcon>
                                        <ListItemText primaryTypographyProps={{
                                            fontSize: 16,
                                            fontWeight: 'medium'
                                        }} primary={`${Math.round(unitTypeSwitcher(forecastDetails.temp.min, unitType))}°`}
                                            secondary='Min' />
                                    </ListItem>
                                    <Divider orientation="vertical" variant="middle" flexItem />
                                </>
                            }
                            <ListItem>
                                <ListItemIcon>
                                    <SvgIcon >
                                        <DeviceThermostatOutlinedIcon />
                                    </SvgIcon>
                                </ListItemIcon>
                                <ListItemText primaryTypographyProps={{
                                    fontSize: 16,
                                    fontWeight: 'medium'
                                }} primary={`${unitTypeSwitcher(forecastDetails.dew_point, unitType).toFixed(1)}°`}
                                    sx={{ whiteSpace: 'nowrap' }}
                                    secondary={'Dew Point'}
                                />
                            </ListItem>
                        </Stack>
                    </Stack>
                </List>
            </Collapse >

            <Stack direction="row" justifyContent={'center'}>
                <ListItem>
                    <ListItemIcon>
                        <SvgIcon fontSize='large'>
                            <Humidity />
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{
                        fontSize: 20,
                        fontWeight: 'medium'
                    }} primary={`${Math.round(forecastDetails.humidity)}%`} secondary='Humidity' />
                </ListItem>

                {forecastDetails.pop !== 0 &&
                    <>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <ListItem>
                            <ListItemIcon>
                                <SvgIcon fontSize='large'>
                                    <InvertColorsTwoToneIcon />
                                </SvgIcon>
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={{
                                fontSize: 20,
                                fontWeight: 'medium'
                            }} primary={`${Math.round(forecastDetails.pop * 100)}%`} secondary='Chance of Precipitation' />
                        </ListItem>
                    </>
                }
            </Stack>
            <Stack direction="row" justifyContent={'center'}>
                <ListItem>
                    <ListItemIcon>
                        <SvgIcon fontSize='large'>
                            <AirRoundedIcon />
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary={`${forecastDetails.wind_deg} at ${forecastDetails.wind_speed} km/h`} secondary='Wind direction and speed' />
                </ListItem>
                <Divider orientation="vertical" variant="middle" flexItem />
                <ListItem>
                    <ListItemIcon>
                        <SvgIcon fontSize='large'>
                            <AirRoundedIcon />
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary={`${forecastDetails.wind_gust} km/h`} secondary={'Wind Gusts'} />
                </ListItem>

            </Stack>
            <Stack direction="row" justifyContent={'center'}>
                <ListItem>
                    <ListItemIcon>
                        <SvgIcon fontSize='large'>
                            <FilterDramaTwoToneIcon />
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{
                        fontSize: 20,
                        fontWeight: 'medium',
                    }} primary={`${forecastDetails.clouds}%`} secondary='Cloud Coverage' />
                </ListItem>

                {forecastDetails.visibility &&
                    <>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <ListItem>
                            <ListItemIcon>
                                <SvgIcon fontSize='large'>
                                    <VisibilityTwoToneIcon />
                                </SvgIcon>
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={{
                                fontSize: 20,
                                fontWeight: 'medium',

                            }} primary={`${forecastDetails.visibility} m`} secondary='Visibility' />
                        </ListItem>
                    </>
                }
            </Stack>

            <Stack direction="row" justifyContent={'center'}>
                <ListItem>
                    <ListItemIcon>
                        <SvgIcon fontSize='large'>
                            <Barometer />
                        </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{
                        fontSize: 20,
                        fontWeight: 'medium',
                    }} primary={`${forecastDetails.pressure} hpa`} secondary='Air Pressure' />
                </ListItem>

                {forecastDetails.uvi !== 0 &&
                    <>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <ListItem>
                            <ListItemIcon>
                                <SvgIcon fontSize='large'>
                                    <BeachAccessIcon />
                                </SvgIcon>
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={{
                                fontSize: 20,
                                fontWeight: 'medium',
                            }} primary={`${forecastDetails.uvi}`} secondary='UV Index' />
                        </ListItem>
                    </>
                }
            </Stack>
        </List >
    );
}

export default DetailsList;