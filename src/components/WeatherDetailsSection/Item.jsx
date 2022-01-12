import { ListItem } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { SvgIcon } from '@mui/material';

//fontSize: `${iconSize ? iconSize : 35}`
const Item = ({ icon, iconSize, text, textSize, subtitle, sx }) => {
    return (
        <ListItem>
            <ListItemIcon>
                <SvgIcon sx={{ ...(iconSize && { fontSize: iconSize }), ...(!iconSize && { fontSize: 35 }) }}>
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

//...(job.status === 'aborted' && {
    //color: color1,
    //backgroundColor: bgcolor1,