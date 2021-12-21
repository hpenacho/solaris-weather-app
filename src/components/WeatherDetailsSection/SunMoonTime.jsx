import { ListItem } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { SvgIcon } from '@mui/material';

const SunMoonTime = ({ time, title, icon, color }) => {

    return (
        <ListItem sx={{ paddingY: 0 }}>
            <ListItemIcon>
                <SvgIcon sx={{ color: { color }, fontSize: 37 }}> {icon} </SvgIcon>
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{
                fontSize: 14,
                fontWeight: 'medium'
            }} primary={time}
                secondary={title} />
        </ListItem>
    )
}

export default SunMoonTime;