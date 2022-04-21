import { Box } from '@mui/material'
import SearchLocation from './SearchLocation'
import TimeframeForecast from './TimeframeForecast'
import TemperatureSwitch from './TemperatureSwitch'
import { Grid } from '@mui/material'
import IconToggleButton from './IconToggleButton'
import SettingsMenu from './SettingsMenu'
import FindMyLocation from './FindMyLocation'
import FavoritesList from './FavoritesList'

const NavBarSection = ({ setLocation, cities, countries, unitType, iconStyle, setIconStyle, setUnitType, timeframe, setTimeframe, favoriteLocations, setFavoriteLocations }) => {

    return (
        <Box py={1} px={{ xs: 2, md: 5 }}>

            <Grid container alignItems={'center'} justifyContent={{ xs: 'center', md: 'space-between' }}>
                <Grid item sx={{ display: { xs: 'none', md: 'block' } }}>
                    <TimeframeForecast timeframe={timeframe} setTimeframe={setTimeframe} />
                </Grid>


                <Grid item >
                    <Box
                        sx={{
                            borderRadius: 8, backgroundColor: 'secondary.main', py: 0.9, my: 0.6, display: 'flex', alignItems: 'center'
                        }}
                    >
                        <FindMyLocation setLocation={setLocation} cities={cities} />
                        <SearchLocation
                            setLocation={setLocation}
                            cities={cities}
                            countries={countries} />
                        <Grid item>
                            <FavoritesList
                                favoriteLocations={favoriteLocations}
                                setFavoriteLocations={setFavoriteLocations}
                                setLocation={setLocation}
                            />
                        </Grid>
                        <Grid item sx={{ display: { xs: 'block', md: 'none' } }}>
                            <SettingsMenu
                                iconStyle={iconStyle}
                                setIconStyle={setIconStyle}
                                timeframe={timeframe}
                                setTimeframe={setTimeframe}
                                unitType={unitType}
                                setUnitType={setUnitType}
                            />
                        </Grid>
                    </Box>
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

            </Grid>
        </Box >
    )

}

export default NavBarSection
