import React, { useState } from 'react'
import { SnackbarProvider } from 'notistack';
import darkTheme from './assets/darkTheme'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';
//import WeatherApp from './components/WeatherApp'
import HeaderSection from './components/Header/HeaderSection'
import FooterSection from './components/Footer/FooterSection'
import { Grid } from '@mui/material';

const App = () => {
  const [theme, setTheme] = useState(darkTheme)

  //<WeatherApp />
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <SnackbarProvider maxSnack={3}>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          minHeight="100vh"
        >
          <HeaderSection theme={theme} setTheme={setTheme} />
          test
          <FooterSection />
        </Grid>
      </SnackbarProvider>
    </ThemeProvider >
  );
}

export default App;
