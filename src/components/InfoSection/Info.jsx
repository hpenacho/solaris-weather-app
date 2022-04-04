import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { Box } from '@mui/system';

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
                    <Grid container direction='row' pt={1} justifyContent={"space-between"} alignItems='center'>
                        <Grid item xs={8}>
                            <Typography letterSpacing={2} fontSize={{ xs: 21, sm: 30 }} fontFamily={'Exo, sans-serif'} color='textColor.default'> <b> {capitalize(weatherData.current.weather[0].description)} </b></Typography>
                        </Grid>
                        <Grid item>
                            <Box p={0.5} backgroundColor='primary.main' borderRadius={9}>
                                {wikiLink &&
                                    <Tooltip
                                        TransitionComponent={Zoom}
                                        title={`Open location on Wikipedia`}
                                        placement="left">
                                        <IconButton
                                            href={wikiLink}
                                            target="_blank">
                                            <InfoTwoToneIcon />
                                        </IconButton>
                                    </Tooltip>
                                }
                                <Tooltip
                                    TransitionComponent={Zoom}
                                    title={`Open location on GoogleMaps`}
                                    placement="bottom">
                                    <IconButton
                                        href={`https://www.google.com/maps/place/${location.name}/@${location.coord.lat},${location.coord.lon}`}
                                        target="_blank">
                                        <LocationOnTwoToneIcon />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justifyContent="flex-start">
                        <Grid item >
                            <Grid container direction="row" alignItems="center">
                                <Typography fontFamily={'Exo, sans-serif'} fontSize={{ xs: 18, sm: 28 }}> {location.name},</Typography>
                                <Typography fontFamily={'Exo, sans-serif'} fontSize={{ xs: 18, sm: 28 }} mr={1} sx={{ color: 'textColor.subdued' }}>{country.label} </Typography>
                                <img loading="lazy" width="30" alt="flag"
                                    src={`https://flagcdn.com/${location.country.toLowerCase()}.svg`}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            }
        </Container >
    )
}

export default Info;