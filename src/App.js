import React, { useState } from 'react'
import Weather from './components/Weather'
import CityList from './components/CityList'
import CityService from './services/CityService'
import SearchBar from './components/SearchBar'
import Box from '@mui/material/Box'
import darktheme from './assets/Themes'
import { ThemeProvider } from '@mui/material/styles'
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material'


const App = () => {
  const [filter, setFilter] = useState('')
  const [city, setCity] = useState('')
  const [theme, setTheme] = useState(darktheme)

  const cities = CityService.initializeCities()
  console.log()

  return (
    < Container maxWidth="md">
      <Box sx={{ bgcolor: "#1D1D1D", borderRadius: 3 }} p={5}>
        <ThemeProvider theme={theme}>
          <Box p={3} sx={{ bgcolor: "#0D0D0D", borderRadius: 3 }}>
            <Box
              sx={{
                mx: "auto", borderRadius: 3
              }}
            >
              <SearchBar filter={filter} setFilter={setFilter} setCity={setCity} />
              <hr />
              <CityList cities={cities} filter={filter} setCity={setCity} />
              <hr />
              <Weather city={city} />
            </Box>

          </Box>
        </ThemeProvider>
      </Box>
    </Container >

  );
}

export default App;
