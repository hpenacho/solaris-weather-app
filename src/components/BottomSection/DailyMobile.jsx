import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'; import { useState } from 'react';
import { Typography } from '@mui/material';

export default function SwipeableTemporaryDrawer() {
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

    const list = (anchor) => (
        <Box
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            color='inherit'
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box py={4} display="flex"
            justifyContent="center"
            alignItems="center"
            height={40}
            key={'bottom'}>
            <Button sx={{ textTransform: "none", backgroundColor: 'secondary.main', borderRadius: 3 }} color='inherit' onClick={toggleDrawer('bottom', true)}>
                <Typography fontFamily={'Exo, sans-serif'} sx={{ fontSize: 19 }}>Open Daily Forecast</Typography>
                <KeyboardArrowUpRoundedIcon />
            </Button>
            <SwipeableDrawer
                anchor={'bottom'}
                open={state['bottom']}
                onClose={toggleDrawer('bottom', false)}
                onOpen={toggleDrawer('bottom', true)}
            >
                {list('bottom')}
            </SwipeableDrawer>
        </Box>
    );
}