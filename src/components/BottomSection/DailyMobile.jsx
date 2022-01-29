import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'; import { useState } from 'react';
import { Typography } from '@mui/material';
import DailyMobileItem from './DailyMobileItem';
import React from "react";
import { Divider } from '@mui/material';

export default function SwipeableTemporaryDrawer({ weatherData, iconStyle, unitType }) {
    const [state, setState] = useState({
        bottom: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    let slicedForecast;
    if (weatherData) {
        slicedForecast = weatherData.daily
            .slice(0, 7)
    }

    const list = (anchor) => (
        <Box
            sx={{ borderTopLeftRadius: 15 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center" height={20} backgroundColor={'secondary.main'} sx={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                <Box

                    sx={{
                        width: 35,
                        height: 7,
                        borderRadius: 3,
                        backgroundColor: 'primary.main',
                    }} >

                </Box>
            </Box>
            <List sx={{ paddingBottom: 0, backgroundColor: 'secondary.main' }}>
                {weatherData &&
                    slicedForecast.map((element, index) => (
                        <React.Fragment key={element.dt}>
                            <DailyMobileItem
                                dailyWeatherInfo={element}
                                timezoneOffset={weatherData.timezone_offset}
                                iconStyle={iconStyle}
                                unitType={unitType}
                            />
                            <Divider variant="inset" component="li" />
                        </React.Fragment>
                    ))}
                <Typography py={0.5} textAlign={'center'} color={'textColor.weaker'} variant='subtitle2'> Press any day to open contextual data</Typography>
            </List>
        </Box>
    );

    return (
        <Box py={4} display="flex"
            justifyContent="center"
            alignItems="center"
            height={40}
            key={'bottom'}>
            <Button sx={{ boxShadow: 3, textTransform: "none", backgroundColor: 'secondary.main', borderRadius: 3 }} color='inherit' onClick={toggleDrawer('bottom', true)}>
                <Typography fontFamily={'Exo, sans-serif'} sx={{ fontSize: 19 }}>Open Daily Forecast</Typography>
                <KeyboardArrowUpRoundedIcon />
            </Button>
            <SwipeableDrawer
                PaperProps={{ elevation: 0, style: { backgroundColor: "transparent" } }}
                anchor={'bottom'}
                open={state['bottom']}
                onClose={toggleDrawer('bottom', false)}
                onOpen={toggleDrawer('bottom', true)}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                {list('bottom')}
            </SwipeableDrawer>
        </Box>
    );
}