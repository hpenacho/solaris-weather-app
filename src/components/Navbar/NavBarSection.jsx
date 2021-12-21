import { Container } from '@mui/material'
import SearchLocation from './SearchLocation'
import TemperatureSwitch from './TemperatureSwitch'
import { Grid } from '@mui/material'

const NavBarSection = ({ filter, setFilter, setLocation, cities, unitType, setUnitType }) => {

    return (
        <Container>
            <Grid container justifyContent='space-evenly' direction='row'>

                <SearchLocation filter={filter} setFilter={setFilter} setLocation={setLocation} cities={cities} />
                <TemperatureSwitch unitType={unitType} setUnitType={setUnitType} />
            </Grid>
        </Container>
    )

}

export default NavBarSection
