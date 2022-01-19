import { Box } from '@mui/material'
import SearchLocation from './SearchLocation'
import TimeframeForecast from './TimeframeForecast'
import TemperatureSwitch from './TemperatureSwitch'
import { Grid } from '@mui/material'
import IconToggleButton from './IconToggleButton'

const NavBarSection = ({ filter, setFilter, setLocation, cities, unitType, iconStyle, setIconStyle, setUnitType, timeframe, setTimeframe }) => {

    return (
        <Box p={1} sx={{ alignItems: 'center' }}>
            <Grid container columnSpacing={{ xs: 3, sm: 2, md: 1 }} justifyContent={{ xs: 'center', md: 'space-between' }} alignItems='center'>
                <Grid item order={{ xs: 2, md: 1 }} md={3}>
                    <Grid container alignItems='center' columnSpacing={1.5}>
                        <Grid item>
                            <IconToggleButton iconStyle={iconStyle} setIconStyle={setIconStyle} />
                        </Grid>
                        <Grid item>
                            <TemperatureSwitch unitType={unitType} setUnitType={setUnitType} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                    <Grid container justifyContent={'center'}>
                        <SearchLocation
                            filter={filter}
                            setFilter={setFilter}
                            setLocation={setLocation}
                            cities={cities} />
                    </Grid>
                </Grid>
                <Grid container md={3} order={{ xs: 3 }} justifyContent={'center'}>
                    <TimeframeForecast timeframe={timeframe} setTimeframe={setTimeframe} />
                </Grid>
            </Grid>
        </Box >
    )

}

export default NavBarSection
