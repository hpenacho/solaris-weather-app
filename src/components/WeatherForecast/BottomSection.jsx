import ListItem from '@mui/material/ListItem';
import { Grid, Stack } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DailyForecast from './DailyForecast';
import Box from '@mui/material/Box'

const BottomSection = ({ weatherInfo }) => {

    return (

        <Grid container direction="row" justifyContent="space-between">
            <Grid item>
                <Box>
                    <DailyForecast weatherInfo={weatherInfo} />
                </Box>
            </Grid>
        </Grid>
    )
}

export default BottomSection;