import { ListItem } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { SvgIcon } from '@mui/material';

const Item = ({ icon, iconSize, text, textSize, subtitle, sx }) => {
    return (
        <ListItem>
            <ListItemIcon>
                <SvgIcon fontSize={iconSize}>
                    {icon}
                </SvgIcon>
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{
                fontSize: textSize,
                fontWeight: 'medium'
            }} primary={text} secondary={subtitle} sx={sx} />
        </ListItem >
    )
}

export default Item;