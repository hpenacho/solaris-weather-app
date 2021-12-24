import React, { useState } from 'react'
import InitService from './services/InitService'
import Box from '@mui/material/Box'
import darkTheme from './assets/darkTheme'
import { ThemeProvider } from '@mui/material/styles'
import { Container } from '@mui/material'
import { CssBaseline } from '@mui/material';
import { Grid } from '@mui/material';
import Header from './components/Header/HeaderSection'
import NavBarSection from './components/Navbar/NavBarSection'
import ForecastContainer from './components/WeatherForecast/ForecastContainer'

const App = () => {
  const [filter, setFilter] = useState('')
  const [location, setLocation] = useState('')
  const [theme, setTheme] = useState(darkTheme)
  const [unitType, setUnitType] = useState("celsius")
  const [iconStyle, setIconStyle] = useState("static")
  const [timeframe, setTimeframe] = useState(3)

  const cities = InitService.initializeCities()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Grid container >
        <Header />
        < Container maxWidth="md" >
          <Box sx={{ boxShadow: 8, borderRadius: 7, backgroundColor: "primary.main" }}>
            <NavBarSection
              filter={filter}
              setFilter={setFilter}
              setLocation={setLocation}
              cities={cities}
              unitType={unitType}
              setUnitType={setUnitType}
              setIconStyle={setIconStyle}
              theme={theme}
              setTheme={setTheme}
              timeframe={timeframe}
              setTimeframe={setTimeframe} />
            <ForecastContainer
              location={location}
              setLocation={setLocation}
              iconStyle={iconStyle}
              unitType={unitType}
              timeframe={timeframe} />
          </Box>
        </Container >
      </Grid>
    </ThemeProvider>
  );
}

export default App;
