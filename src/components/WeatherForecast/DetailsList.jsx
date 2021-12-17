import * as React from 'react';
import List from '@mui/material/List';
import { ListItem } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import { ReactComponent as Barometer } from '../../assets/icons/misc/wi-barometer.svg'
import InvertColorsTwoToneIcon from '@mui/icons-material/InvertColorsTwoTone';
import FilterDramaTwoToneIcon from '@mui/icons-material/FilterDramaTwoTone';
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import { Divider } from '@mui/material';
import { Stack } from '@mui/material';


const DetailsList = ({ forecastDetails }) => {
    const [openTemp, setOpenTemp] = React.useState(false);
    const [openWind, setOpenWind] = React.useState(false);

    return (
        <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
        >
            <ListItemButton onClick={() => setOpenWind(!openWind)}>
                <ListItemIcon>
                    <DeviceThermostatOutlinedIcon sx={{ fontSize: 32 }} />
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
                    {!isNaN(forecastDetails.temp) &&
                        <>
                            <ListItem sx={{ pl: 4 }}>
                                <ListItemText primaryTypographyProps={{
                                    fontSize: 16,
                                    fontWeight: 'medium'
                                }} primary={`${Math.round(forecastDetails.feels_like)}°`}
                                    secondary='Feels Like' />
                            </ListItem>
                        </>
                    }

                    <Stack direction="row" >
                        {isNaN(forecastDetails.temp) &&

                            <>
                                <ListItem sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <DeviceThermostatOutlinedIcon sx={{ fontSize: 60, color: '#F15421' }} />
                                    </ListItemIcon>
                                    <ListItemText primaryTypographyProps={{
                                        fontSize: 16,
                                        fontWeight: 'medium'
                                    }} primary={`${Math.round(forecastDetails.temp.max)}°`}
                                        secondary='Max'
                                    />
                                </ListItem>
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <ListItem sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <DeviceThermostatOutlinedIcon sx={{ fontSize: 27, color: '#589ceb' }} />
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

                        <ListItem sx={{ pl: 4 }}>
                            <ListItemText primaryTypographyProps={{
                                fontSize: 16,
                                fontWeight: 'medium'
                            }} primary={`${forecastDetails.dew_point}°`}
                                secondary='Dew Point' />
                        </ListItem>

                    </Stack>

                </List>
            </Collapse >

            <ListItem>
                <ListItemIcon>
                    <InvertColorsTwoToneIcon sx={{ fontSize: 32 }} />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: 'medium'
                }} primary={`${Math.round(forecastDetails.pop * 100)}%`} secondary='Chance of Precipitation' />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <FilterDramaTwoToneIcon sx={{ fontSize: 32 }} />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: 'medium',
                    letterSpacing: 0,
                }} primary={`${forecastDetails.clouds}%`} secondary='Cloud Coverage' />
            </ListItem>
            <ListItemButton onClick={() => setOpenTemp(!openTemp)}>
                <ListItemIcon>
                    <AirRoundedIcon sx={{ fontSize: 32 }} />
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
            <ListItem>
                <ListItemIcon>
                    <FilterDramaTwoToneIcon sx={{ fontSize: 32 }} />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: 'medium',
                    letterSpacing: 0,
                }} primary={`${forecastDetails.clouds}%`} secondary='Cloud Coverage' />
            </ListItem>

            <ListItem>
                <ListItemIcon>
                    <FilterDramaTwoToneIcon sx={{ fontSize: 32 }} />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: 'medium',
                    letterSpacing: 0,
                }} primary={`${forecastDetails.clouds}%`} secondary='Cloud Coverage' />
            </ListItem>

            <ListItem>
                <ListItemIcon>
                    <FilterDramaTwoToneIcon sx={{ fontSize: 32 }} />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: 'medium',
                    letterSpacing: 0,
                }} primary={`${forecastDetails.clouds}%`} secondary='Cloud Coverage' />
            </ListItem>

            <ListItem>
                <ListItemIcon>
                    <FilterDramaTwoToneIcon sx={{ fontSize: 32 }} />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: 'medium',
                    letterSpacing: 0,
                }} primary={`${forecastDetails.clouds}%`} secondary='Cloud Coverage' />
            </ListItem>

            <ListItem>
                <ListItemIcon fontSize='large'>
                    <FilterDramaTwoToneIcon />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: 'medium',
                    letterSpacing: 0,
                }} primary={`${forecastDetails.clouds}%`} secondary='Cloud Coverage' />
            </ListItem>
        </List >
    );
}

export default DetailsList;

/*<Typography fontSize={20} gutterBottom>
                            <i><b>Temperature:</b></i> {Math.round(forecastDetails.temp)}°
                        </Typography>

                        <Typography fontSize={20} gutterBottom>
                            <i><b>Feels like:</b></i> {Math.round(forecastDetails.feels_like)}°
                        </Typography>

                        <Typography fontSize={20} gutterBottom>
                            <i>  <b>Chance of precipitation:</b></i>  {Math.round(forecastDetails.pop * 100)}%
                        </Typography>

                        <Typography fontSize={20} gutterBottom>
                            <i>  <b>Clouds:</b></i>  {forecastDetails.clouds}%
                        </Typography>

                        <Typography fontSize={20} gutterBottom>
                            <i>  <b>Dew Point:</b></i>  {forecastDetails.dew_point}°
                        </Typography>

                        <Typography fontSize={20} gutterBottom>
                            <i>  <b>Humidity:</b></i>  {forecastDetails.humidity}%
                        </Typography>

                        <Typography fontSize={20} gutterBottom>
                            <i>  <b>Pressure:</b></i>  {forecastDetails.pressure} hpa
                        </Typography>

                        {forecastDetails.uvi !== 0 &&
                            <Typography fontSize={20} gutterBottom>
                                <i>    <b>UV index:</b></i>  {forecastDetails.uvi}
                            </Typography>
                        }

                        {forecastDetails.visibility &&
                            <Typography fontSize={20} gutterBottom>
                                <i>   <b>Visibility:</b></i> {forecastDetails.visibility}{forecastDetails.visibility === 10000 && "+"} m
                            </Typography>
                        }

                        <Typography fontSize={20} gutterBottom>
                            <i> <b>Wind:</b></i> {forecastDetails.wind_deg} at {forecastDetails.wind_speed} km/h
                        </Typography>

                        <Typography fontSize={20} gutterBottom>
                            <i> <b>Wind Gusts:</b></i> {forecastDetails.wind_gust} km/h
                        </Typography>*/