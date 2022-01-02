import { Container } from '@mui/material'
import SearchLocation from './SearchLocation'
import TimeframeForecast from './TimeframeForecast'
import TemperatureSwitch from './TemperatureSwitch'
import { Grid } from '@mui/material'
import ThemeModeButton from './ThemeModeButton'
import IconToggleButton from './IconToggleButton'

const NavBarSection = ({ filter, setFilter, setLocation, cities, unitType, iconStyle, setIconStyle, theme, setTheme, setUnitType, timeframe, setTimeframe }) => {

    return (
        <Container>
            <Grid container justifyContent='space-between' direction='row' alignItems='center'>
                <Grid item>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ThemeModeButton theme={theme} setTheme={setTheme} />
                        </Grid>
                        <Grid item>
                            <IconToggleButton iconStyle={iconStyle} setIconStyle={setIconStyle} />
                        </Grid>
                    </Grid>
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
        </Container>
    )

}

export default NavBarSection
