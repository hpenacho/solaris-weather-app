import { Grid } from '@mui/material';

const TopSection = () => {
    return (
        <Grid container direction="row" justifyContent="space-between">
            <Grid item>
                cityname
                flag
            </Grid>
            <Grid item>
                time info
            </Grid>

        </Grid>
    )
}

export default TopSection;