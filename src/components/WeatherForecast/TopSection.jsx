import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';

const TopSection = () => {
    return (
        <Grid container direction="row" justifyContent="space-between">
            <Grid item>
                <Paper sx={{ backgroundColor: 'purple', height: 50, width: 100 }}>
                </Paper>
            </Grid>
            <Grid item>
                <Paper sx={{ backgroundColor: 'blue', height: 50, width: 100 }}></Paper>
            </Grid>

        </Grid>
    )
}

export default TopSection;