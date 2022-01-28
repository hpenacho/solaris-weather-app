import { ListItem } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { SvgIcon } from '@mui/material';

const SubItem = ({ icon, text, textSize, subtitle }) => {
    return (
        <ListItem>
            <ListItemIcon sx={{ display: { xs: 'none', sm: 'block' } }}>
                <SvgIcon fontSize={'medium'}>
                    {icon}
                </SvgIcon>
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{
                fontSize: textSize,
                fontWeight: 'medium',
            }} primary={text}
                secondary={subtitle}
                sx={{ whiteSpace: 'nowrap' }} />
        </ListItem >
    )
}

export default SubItem;