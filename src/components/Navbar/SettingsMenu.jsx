import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import TimeframeForecast from './TimeframeForecast';
import TemperatureSwitch from './TemperatureSwitch';
import IconToggleButton from './IconToggleButton';
import { Typography } from '@mui/material';

export default function SwipeableTemporaryDrawer({ iconStyle, setIconStyle }) {
    const [state, setState] = React.useState('false');

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
            sx={{ width: 'auto' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Typography> </Typography>
                <ListItem>
                    <IconToggleButton iconStyle={iconStyle} setIconStyle={setIconStyle} />
                    <ListItemText secondary={'Toggle animated/static icons'} />
                </ListItem>
                <Divider />
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key={'top'}>
                <Button onClick={toggleDrawer('top', true)} sx={{ color: 'red' }}>{'top'}</Button>
                <SwipeableDrawer
                    anchor={'top'}
                    open={state['top']}
                    onClose={toggleDrawer('top', false)}
                    onOpen={toggleDrawer('top', true)}
                >
                    {list('top')}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}
