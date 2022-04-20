import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { IconButton } from '@mui/material';

const InfoButton = ({ title, icon, placement, link }) => {

    return (
        <Tooltip
            TransitionComponent={Zoom}
            title={title}
            placement={placement}>
            <IconButton
                href={link}
                target="_blank">
                {icon}
            </IconButton>
        </Tooltip>
    )
}

export default InfoButton;