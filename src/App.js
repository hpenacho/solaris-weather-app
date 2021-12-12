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
  //const [showWeather, setShowWeather] = useState(false)

  const cities = InitService.initializeCities()

  //style={{ background: "radial-gradient(circle, rgba(28,28,28,1) 0%, rgba(9,9,9,1) 50%, rgba(9,9,9,1) 100%)" }}

  /*
  <Box sx={{ borderRadius: 3 }} p={5}>

            <Modal />
            <Box p={3} sx={{ bgcolor: "#0D0D0D", borderRadius: 3 }}>
              <Box
                sx={{
                  mx: "auto", borderRadius: 3
                }}
              >
                <SearchBar filter={filter} setFilter={setFilter} setLocation={setLocation} setShowWeather={setShowWeather} />
                <hr />
                {!showWeather ?
                  <CityList cities={cities} filter={filter} setLocation={setLocation} setShowWeather={setShowWeather} />
                  :
                  <Weather location={location} unitType={unitType} language={language} />
                }
              </Box>

            </Box>

          </Box>
           */
  return (
    <div >
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Grid container >
          <Header />
          < Container maxWidth="md" >
            <Box sx={{ boxShadow: 8, borderRadius: 7, backgroundColor: "#161616" }}>
              <NavBarSection filter={filter} setFilter={setFilter} setLocation={setLocation} cities={cities} />
              <ForecastContainer location={location} />
            </Box>
          </Container >
        </Grid>
      </ThemeProvider>
    </div >
  );
}

export default App;
