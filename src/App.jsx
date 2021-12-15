import React, { useState } from 'react'
import InitService from './services/InitService'
import Box from '@mui/material/Box'
import darktheme from './assets/Themes'
import { ThemeProvider } from '@mui/material/styles'
import { Container } from '@mui/material'
import { CssBaseline } from '@mui/material';
import { Grid } from '@mui/material';
import Header from './components/Header/HeaderSection'
import NavBarSection from './components/Navbar/NavBarSection'
import ForecastContainer from './components/WeatherForecast/ForecastContainer'

const App = () => {
  const [filter, setFilter] = useState('')
  const [location, setLocation] = useState('') //temp Lisbon
  const [theme, setTheme] = useState(darktheme)
  const [unitType, setUnitType] = useState("metric")
  const [iconStyle, setIconStyle] = useState("animated")
  const [forecastInterval, setForecastInterval] = useState(3)

  const cities = InitService.initializeCities()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Grid container >
        <Header />
        < Container maxWidth="md" >
          <Box sx={{ boxShadow: 8, borderRadius: 7, backgroundColor: "#161616" }}>
            <NavBarSection
              filter={filter}
              setFilter={setFilter}
              setLocation={setLocation}
              cities={cities}
              setUnitType={setUnitType}
              setIconStyle={setIconStyle}
              setForecastInterval={setForecastInterval} />
            <ForecastContainer
              location={location}
              unitType={unitType}
              iconStyle={iconStyle}
              forecastInterval={forecastInterval} />
          </Box>
        </Container >
      </Grid>
    </ThemeProvider>
  );
}

export default App;
