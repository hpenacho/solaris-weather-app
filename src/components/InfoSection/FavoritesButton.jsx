import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { IconButton } from '@mui/material';
import NotFavoritedIcon from '@mui/icons-material/StarBorder';
import FavoritedIcon from '@mui/icons-material/Star';
import { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';

const FavoritesButton = ({ location, favoriteLocations, setFavoriteLocations }) => {
    const [isFavorite, setIsFavorite] = useState()
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setIsFavorite(favoriteLocations.some(element => element.id === location.id))
    }, [location.id, favoriteLocations])

    const handleClick = () => {
        let alteredFavorites;

        if (!location.id) {
            enqueueSnackbar((`This particular location is missing an id, find it through the search bar and click favorite from there.`), { variant: 'error' })
            return;
        }

        function removeFavorite() {
            alteredFavorites = favoriteLocations.filter(x => x.id !== location.id)
            enqueueSnackbar((`${location.name} removed from favorites.`), { variant: 'default' })
        }

        function addFavorite() {
            alteredFavorites = favoriteLocations.concat(location)
            enqueueSnackbar((`${location.name} was added to your favorites!`), { variant: 'success' })
        }

        isFavorite ?
            removeFavorite()
            :
            addFavorite()

        window.localStorage.setItem('favorites', JSON.stringify(alteredFavorites))
        setFavoriteLocations(alteredFavorites)
    };

    return (
        <Tooltip
            TransitionComponent={Zoom}
            title={`Add/remove to favorites`}
            placement="bottom">
            <IconButton
                style={{ maxWidth: '40px', maxHeight: '40px' }}
                onClick={handleClick}
            >
                {isFavorite ?
                    <FavoritedIcon color='warning' />
                    :
                    <NotFavoritedIcon />
                }
            </IconButton>
        </Tooltip >

    )
}

export default FavoritesButton