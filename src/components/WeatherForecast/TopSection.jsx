import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { Stack } from '@mui/material';

const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const TopSection = ({ location, weatherData }) => {

    let wikiLink = "";
    if (location.langs !== undefined) {
        wikiLink = location.langs.find(element => element.link).link
    }

    return (
        <Container sx={{ backgroundColor: '#212121' }}>

            {location && weatherData &&
                <>
                    <Grid container pt={1} justifyContent={"space-between"}>
                        <Grid item>
                            <Typography variant={"h4"}> <b> {capitalize(weatherData.current.weather[0].description)} </b></Typography>
                        </Grid>
                        <Grid border={1} borderColor={"gray"} borderRadius={5} item>
                            {wikiLink &&
                                <Tooltip
                                    TransitionComponent={Zoom}
                                    title={`Open ${location.name} on Wikipedia`}
                                    placement="top">
                                    <IconButton
                                        href={wikiLink}
                                        target="_blank">
                                        <InfoTwoToneIcon />
                                    </IconButton>
                                </Tooltip>
                            }
                            <Tooltip
                                TransitionComponent={Zoom}
                                title={`Open ${location.name} on GoogleMaps`}
                                placement="top">
                                <IconButton
                                    href={`https://www.google.com/maps/place/${location.name}/@${location.coord.lat},${location.coord.lon}`}
                                    target="_blank">
                                    <LocationOnTwoToneIcon sx={{ color: "lightgreen" }} />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justifyContent="flex-start">


                        <Grid item >
                            <Grid px={1} container direction="row" alignItems="center">
                                <Typography variant='h6' mr={1}> {location.name} </Typography>
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

export default TopSection;