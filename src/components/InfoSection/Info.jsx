import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

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
                    <Grid container pt={1} justifyContent={"space-between"}>
                        <Grid item>
                            <Typography letterSpacing={2} fontSize={35} variant={"h4"} color='textColor.default'> <b> {capitalize(weatherData.current.weather[0].description)} </b></Typography>
                        </Grid>
                        <Grid p={0.5} backgroundColor='primary.main' borderRadius={9} item>
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
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justifyContent="flex-start">
                        <Grid item >
                            <Grid container direction="row" alignItems="center">
                                <Typography variant='h5'> {location.name},</Typography>
                                <Typography mr={1} sx={{ color: 'textColor.subdued' }} variant='h5'>{country.label} </Typography>
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