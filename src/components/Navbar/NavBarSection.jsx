import { Container } from '@mui/material'
import SearchLocation from './SearchLocation'
import TimeframeForecast from './TimeframeForecast'
import TemperatureSwitch from './TemperatureSwitch'
import { Grid } from '@mui/material'
import FindMyLocation from './FindMyLocation'

const NavBarSection = ({ filter, setFilter, setLocation, setGeoLocated, cities, unitType, setUnitType, timeframe, setTimeframe }) => {

    return (
        <Container>
            <Grid container justifyContent='space-between' direction='row' alignItems='center'>
                <Grid item>
                    <FindMyLocation setLocation={setLocation} setGeoLocated={setGeoLocated} />
                </Grid>
                <Grid item>
                    <center>  <SearchLocation filter={filter} setFilter={setFilter} setLocation={setLocation} cities={cities} /></center>
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
