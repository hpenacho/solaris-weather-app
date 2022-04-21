import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { useSnackbar } from 'notistack';
import { Typography } from '@mui/material';

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
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <BookmarksIcon />
            </IconButton>
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
                {favoriteLocations.map((option) => (

                    <MenuItem dense sx={{ display: 'flex', justifyContent: 'space-between' }} key={option.id} onClick={() => handleMenuItemClick(option)}>
                        <Typography variant="inherit" noWrap pr={1.5}>
                            {option.name}
                        </Typography>
                        <Typography width={'25px'} color='textColor.weaker'>
                            {option.country}
                        </Typography>
                    </MenuItem>

                ))}
            </Menu>
        </div>
    );
}

export default FavoritesList