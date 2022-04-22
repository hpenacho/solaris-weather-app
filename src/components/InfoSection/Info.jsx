import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Stack } from "@mui/material";
import InfoButton from './InfoButton';
import FavoritesButton from './FavoritesButton';

const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const Info = ({ location, countries, weatherData, favoriteLocations, setFavoriteLocations }) => {

    let wikiLink = "";
    if (location) {
        if (location.langs !== undefined) {
            wikiLink = location.langs.find(element => element.link)
            if (wikiLink) {
                wikiLink = wikiLink.link
            }
        }
        if (wikiLink === "" || wikiLink === undefined) {
            wikiLink = `https://en.wikipedia.org/wiki/${location.name}`
        }

    }
    const country = countries.find(country => country.code === location.country)

    return (
        <Container sx={{ backgroundColor: 'secondary.main' }}>
            {location && weatherData &&
                <>
                    <Stack justifyContent={'space-between'} direction='row' spacing={1} alignItems='center'>
                        <Grid item pt={1}>
                            <Stack direction='row' alignItems='center'>
                                <Stack>
                                    <Typography letterSpacing={2} fontSize={{ xs: 21, sm: 30 }} fontFamily={'Exo, sans-serif'} color='textColor.default'> <b> {capitalize(weatherData.current.weather[0].description)} </b></Typography>
                                    <Grid container direction="row" alignItems="center">
                                        <Typography fontFamily={'Exo, sans-serif'} fontSize={{ xs: 18, sm: 28 }}> {location.name},</Typography>
                                        <Typography fontFamily={'Exo, sans-serif'} fontSize={{ xs: 18, sm: 28 }} mr={1} sx={{ color: 'textColor.subdued' }}>{country.label} </Typography>
                                        <img loading="lazy" width="30" alt="flag"
                                            src={`https://flagcdn.com/${location.country.toLowerCase()}.svg`}
                                        />
                                    </Grid>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Stack direction='row' alignItems={'center'}>
                            <FavoritesButton
                                location={location}
                                favoriteLocations={favoriteLocations}
                                setFavoriteLocations={setFavoriteLocations}
                            />
                            <Stack>
                                {wikiLink &&
                                    <InfoButton
                                        title={`Open location on Wikipedia`}
                                        icon={<MenuBookIcon />}
                                        placement="left"
                                        link={wikiLink}
                                    />
                                }
                                <InfoButton
                                    title={`Open location on GoogleMaps`}
                                    icon={<LocationOnIcon />}
                                    placement="left"
                                    link={`https://www.google.com/maps/place/${location.name}/@${location.coord.lat},${location.coord.lon}`}
                                />
                            </Stack>
                        </Stack>
                    </Stack>
                </>
            }
        </Container >
    )
}

export default Info;