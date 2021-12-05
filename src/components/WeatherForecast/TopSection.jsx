import { Grid } from '@mui/material';
import { Container } from '@mui/material';

const TopSection = () => {
    return (
        <Container disableGutters sx={{ backgroundColor: '#212121' }}>
            <Grid container direction="row" justifyContent="space-between">
                <Grid item>
                    cityname
                    flag
                </Grid>
                <Grid item>
                    time info
                </Grid>

            </Grid>
        </Container>
    )
}

export default TopSection;