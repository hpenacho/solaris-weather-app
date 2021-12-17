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


const DetailsList = ({ forecastDetails }) => {
    const [openTemp, setOpenTemp] = React.useState(false);
    const [openWind, setOpenWind] = React.useState(false);

    return (
        <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
        >
            <ListItemButton onClick={() => setOpenWind(!openWind)}>
                <ListItemIcon>
                    <SvgIcon fontSize='large'>
                        <DeviceThermostatOutlinedIcon />
                    </SvgIcon>
                </ListItemIcon>

                {isNaN(forecastDetails.temp) &&
                    <>
                        <ListItemText primaryTypographyProps={{ fontSize: 17, fontWeight: 'medium', }}
                            primary='Temperature' />
                        {openWind ? <ExpandLess /> : <ExpandMore />}
                    </>
                }
                {!isNaN(forecastDetails.temp) &&
                    <>
                        <ListItemText
                            primaryTypographyProps={{ fontSize: 20, fontWeight: 'medium', }}
                            primary={`${Math.round(forecastDetails.temp)}°`} secondary='Temperature' />
                        {openWind ? <ExpandLess /> : <ExpandMore />}
                    </>
                }
            </ListItemButton>
            <Collapse in={openWind} timeout="auto" unmountOnExit>
                <List component="div">

                    <Stack direction="row" justifyContent={'center'}>
                        <Stack direction="row" >
                            {!isNaN(forecastDetails.temp) &&
                                <>
                                    <ListItem>
                                        <ListItemText primaryTypographyProps={{
                                            fontSize: 16,
                                            fontWeight: 'medium'
                                        }} primary={`${Math.round(forecastDetails.feels_like)}°`}
                                            secondary='Feels Like' />
                                    </ListItem>
                                    <Divider orientation="vertical" variant="middle" flexItem />
                                </>
                            }
                        </Stack>
                        <Stack direction="row" justifyContent={'center'}>
                            {isNaN(forecastDetails.temp) &&
                                <>
                                    <ListItem>
                                        <ListItemIcon>
                                            <DeviceThermostatOutlinedIcon sx={{ color: '#F15421' }} />
                                        </ListItemIcon>
                                        <ListItemText primaryTypographyProps={{
                                            fontSize: 16,
                                            fontWeight: 'medium'
                                        }} primary={`${Math.round(forecastDetails.temp.max)}°`}
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
                                        }} primary={`${Math.round(forecastDetails.temp.min)}°`}
                                            secondary='Min' />
                                    </ListItem>
                                    <Divider orientation="vertical" variant="middle" flexItem />
                                </>
                            }
                            <ListItem>
                                <ListItemText primaryTypographyProps={{
                                    fontSize: 16,
                                    fontWeight: 'medium'
                                }} primary={`${forecastDetails.dew_point}°`}
                                    secondary='Dew Point' />
                            </ListItem>
                        </Stack>
                    </Stack>
                </List>
            </Collapse >

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
            <ListItemButton onClick={() => setOpenTemp(!openTemp)}>
                <ListItemIcon>
                    <SvgIcon fontSize='large'>
                        <AirRoundedIcon />
                    </SvgIcon>
                </ListItemIcon>
                <ListItemText primary={`${forecastDetails.wind_deg} at ${forecastDetails.wind_speed} km/h`} secondary='Wind direction and speed' />
                {openTemp ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openTemp} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem sx={{ pl: 4 }}>
                        <ListItemText primary={`Gusts: ${forecastDetails.wind_gust} km/h`} />
                    </ListItem>
                </List>
            </Collapse>

            {forecastDetails.visibility &&
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
            }

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