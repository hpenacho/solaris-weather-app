import React, { useState } from 'react'
import { SnackbarProvider } from 'notistack';
import darkTheme from './assets/darkTheme'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';
import WeatherApp from './components/WeatherApp'
import Header from './components/Header/HeaderSection'

const App = () => {
  const [theme, setTheme] = useState(darkTheme)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <SnackbarProvider maxSnack={3}>
        <Header />
        <WeatherApp theme={theme} setTheme={setTheme} />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
