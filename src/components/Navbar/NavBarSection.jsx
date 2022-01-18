import { Box } from '@mui/material'
import SearchLocation from './SearchLocation'
import TimeframeForecast from './TimeframeForecast'
import TemperatureSwitch from './TemperatureSwitch'
import { Grid } from '@mui/material'
import IconToggleButton from './IconToggleButton'

const NavBarSection = ({ filter, setFilter, setLocation, cities, unitType, iconStyle, setIconStyle, theme, setTheme, setUnitType, timeframe, setTimeframe }) => {

    return (
        <Box p={1}
            sx={{
                alignItems: 'center'
            }}
        >
            <Grid container justifyContent='space-between' direction='row' alignItems='center'>
                <Grid item>
                    <IconToggleButton iconStyle={iconStyle} setIconStyle={setIconStyle} />
                </Grid>

                <Grid item>
                    <Grid container direction='row'>
                        <center>
                            <SearchLocation
                                filter={filter}
                                setFilter={setFilter}
                                setLocation={setLocation}
                                cities={cities} />
                        </center>
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container spacing={2}>
                        <Grid item>
                            <TimeframeForecast timeframe={timeframe} setTimeframe={setTimeframe} />
                        </Grid>
                        <Grid item>
                            <TemperatureSwitch unitType={unitType} setUnitType={setUnitType} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    )

}

export default NavBarSection
