import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { useSnackbar } from 'notistack';
import { Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { Stack } from '@mui/material';
import FavoritedIcon from '@mui/icons-material/Star';
import Badge from '@mui/material/Badge';

const FavoritesList = ({ favoriteLocations, setFavoriteLocations, setLocation }) => {
    const { enqueueSnackbar } = useSnackbar();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (option) => {
        setLocation(option)
        enqueueSnackbar((`Loaded ${option.name} weather data from favorites!`), { variant: 'success' })
        setAnchorEl(null);
    };

    return (
        <div>
            <Tooltip
                TransitionComponent={Zoom}
                title={'Quick access to your favorite locations!'}
                placement="bottom">
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                    sx={{ marginX: 0.27 }}
                >
                    <Badge badgeContent={favoriteLocations.length} color='warning'>
                        <BookmarksIcon />
                    </Badge>
                </IconButton>
            </Tooltip>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: 216,

                    },
                }}
            >

                {favoriteLocations.length < 1 ?
                    <Stack alignItems={'center'} px={2} py={1}>
                        <Typography color='textColor.weaker'> Your favorited locations will appear here.</Typography>
                        <Stack direction='row' spacing={1}>
                            <Typography alignItems='center' textAlign='center' color='textColor.weaker'> Add some! </Typography>
                            <FavoritedIcon color='warning' />
                        </Stack>
                    </Stack>
                    :
                    <Stack direction={'column-reverse'}>
                        {favoriteLocations.map((option) => (
                            <MenuItem sx={{ display: 'flex', justifyContent: 'space-between' }} key={option.id} onClick={() => handleMenuItemClick(option)}>
                                <Typography variant="inherit" noWrap pr={1.5}>
                                    {option.name}
                                </Typography>
                                <Typography width={'25px'} color='textColor.weaker'>
                                    {option.country}
                                </Typography>
                            </MenuItem>

                        ))}
                    </Stack>
                }
            </Menu>
        </div>
    );
}

export default FavoritesList