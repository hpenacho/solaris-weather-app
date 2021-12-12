import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

const TopSection = ({ location }) => {

    let wikiLink = "";
    if (location.langs !== undefined) {
        wikiLink = location.langs.find(element => element.link).link
    }


    return (
        <Container sx={{ backgroundColor: '#212121' }}>

            {location &&
                <>
                    <Grid container alignItems="center" justifyContent="flex-start">
                        <Grid item>
                            <Grid px={1} container direction="row" alignItems="center">
                                <Typography variant='h6' mr={1}> {location.name} </Typography>
                                <img loading="lazy" width="30" alt="flag"
                                    src={`https://flagcdn.com/${location.country.toLowerCase()}.svg`}
                                />
                            </Grid>
                        </Grid>

                        {wikiLink &&
                            <Grid item>
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
                            </Grid>
                        }

                        <Grid item>
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
                </>
            }


        </Container >
    )
}

export default TopSection;