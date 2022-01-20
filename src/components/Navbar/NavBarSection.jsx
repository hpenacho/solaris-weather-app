import { Box } from '@mui/material'
import SearchLocation from './SearchLocation'
import TimeframeForecast from './TimeframeForecast'
import TemperatureSwitch from './TemperatureSwitch'
import { Grid } from '@mui/material'
import IconToggleButton from './IconToggleButton'
import SettingsMenu from './SettingsMenu'

const NavBarSection = ({ filter, setFilter, setLocation, cities, unitType, iconStyle, setIconStyle, setUnitType, timeframe, setTimeframe }) => {

    return (
        <Box py={1} px={{ xs: 2, md: 5 }}>

            <Grid container alignItems={'center'} justifyContent={{ xs: 'space-evenly', sm: 'space-between' }}>
                <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
                    <TimeframeForecast timeframe={timeframe} setTimeframe={setTimeframe} />
                </Grid>
                <Grid item>
                    <SearchLocation
                        filter={filter}
                        setFilter={setFilter}
                        setLocation={setLocation}
                        cities={cities} />
                </Grid>

                <Grid item>
                    <Grid container alignItems={'center'} columnSpacing={2}>
                        <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
                            <IconToggleButton iconStyle={iconStyle} setIconStyle={setIconStyle} />
                        </Grid>
                        <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
                            <TemperatureSwitch unitType={unitType} setUnitType={setUnitType} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={{ display: { sm: 'block', md: 'none' } }}>
                    <SettingsMenu
                        iconStyle={iconStyle}
                        setIconStyle={setIconStyle}
                        timeframe={timeframe}
                        setTimeframe={setTimeframe}
                        unitType={unitType}
                        setUnitType={setUnitType}
                    />
                </Grid>
            </Grid>
        </Box >
    )

}

export default NavBarSection
