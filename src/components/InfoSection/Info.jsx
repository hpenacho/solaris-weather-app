import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import { Stack } from "@mui/material";
import { Box } from '@mui/system';
import InfoButton from './InfoButton';
import FavoritesButton from './FavoritesButton';

const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const Info = ({ location, countries, weatherData }) => {
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
                    <Grid justifyContent={{ xs: 'center', sm: 'space-between' }} container direction='row' columnSpacing={2} alignItems='center'>
                        <Grid item pt={1}>
                            <Stack direction='row' alignItems='center' spacing={1.5}>
                                <FavoritesButton
                                    location={location}
                                    country={country}
                                />
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

                        <Grid item>

                        </Grid>

                        <Grid item>
                            <Stack direction='row' borderRadius={9}>
                                {wikiLink &&
                                    <InfoButton
                                        title={`Open location on Wikipedia`}
                                        icon={<InfoTwoToneIcon />}
                                        placement="left"
                                        link={wikiLink}
                                    />
                                }
                                <InfoButton
                                    title={`Open location on GoogleMaps`}
                                    icon={<LocationOnTwoToneIcon />}
                                    placement="bottom"
                                    link={`https://www.google.com/maps/place/${location.name}/@${location.coord.lat},${location.coord.lon}`}
                                />
                            </Stack>
                        </Grid>
                    </Grid>
                </>
            }
        </Container >
    )
}

export default Info;