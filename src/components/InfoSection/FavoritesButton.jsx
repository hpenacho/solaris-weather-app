import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { IconButton } from '@mui/material';
import NotFavoritedIcon from '@mui/icons-material/StarBorder';
import FavoritedIcon from '@mui/icons-material/Star';

const FavoritesButton = ({ location, country }) => {

    return (
        <Tooltip
            TransitionComponent={Zoom}
            title={`Add/remove to favorites`}
            placement="bottom">
            <IconButton style={{
                maxWidth: '40px', maxHeight: '40px'
            }}>
                <NotFavoritedIcon />
            </IconButton>
        </Tooltip >

    )
}

export default FavoritesButton