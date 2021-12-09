import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';

const TopSection = ({ location }) => {

    return (
        <Container disableGutters sx={{ backgroundColor: '#212121' }}>

            {location &&
                <>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Grid px={1} container direction="row" alignItems="center">
                                <Typography variant='h5' mr={1}> {location.name} </Typography>
                                <img loading="lazy" width="30" style={{ borderRadius: 3 }} alt="flag"
                                    src={`https://flagcdn.com/w20/${location.country.toLowerCase()}.png`}
                                    srcSet={`https://flagcdn.com/w40/${location.country.toLowerCase()}.png 2x`}
                                />
                            </Grid>
                        </Grid>

                        <Grid item >
                            time info
                        </Grid>
                    </Grid>
                </>
            }


        </Container >
    )
}

export default TopSection;