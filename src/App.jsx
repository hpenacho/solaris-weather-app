import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';
import WeatherApp from './components/WeatherApp'
import HeaderSection from './components/Header/HeaderSection'
import FooterSection from './components/Footer/FooterSection'
import { Grid } from '@mui/material';
import useDarkMode from './hooks/useDarkMode';

const App = () => {
  const [theme, setTheme] = useDarkMode()

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
          <WeatherApp />
          <FooterSection />
        </Grid>
      </SnackbarProvider>
    </ThemeProvider >
  );
}

export default App;
