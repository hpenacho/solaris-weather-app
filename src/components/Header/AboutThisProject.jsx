import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { DialogContentText } from '@mui/material';
import { Divider } from '@mui/material';
import { Link } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

const AboutThisProject = {
    title: 'About this project',
    icon: <LibraryBooksIcon />,
    content:
        <Grid container px={1}>
            <Grid container py={1.5} justifyContent='center'>
                <center>
                    <DialogContentText fontFamily={'Exo, sans-serif'} mb={1.6} color='inherit' variant='h6'>
                        Solaris Weather App, my first project in React.js <br />
                    </DialogContentText>
                </center>
            </Grid>

            <Grid container justifyContent={'space-between'} >
                <Grid item md={7.2} xs={12} order={{ xs: 2, sm: 2, md: 1 }}>
                    <b>Purpose</b>
                    <Divider />
                    <DialogContentText mb={1.5} variant='body2' id="aboutme-academics">
                        I first decided to create this web-app after finishing the University of Helsinki MERN Stack course.  <br />
                        This was an opportunity to develop a project where I could apply what I learned in a more practical manner beyond the isolated exercises proposed by the course.
                    </DialogContentText>
                    <b>Design Patterns</b>
                    <Divider />
                    <DialogContentText mb={1.5} variant='body2' id="aboutme-career">
                        Whenever possible, I tried to maintain a fair level of abstraction towards my components, such that they could be reused without duplicating code. <br />
                        In an attempt to make the code tidier and more easily readable, I separated component logic from UI whenever practical, but did not shy away from using the power of JSX whenever needed. <br />
                        Hooks and state variables were frequently put to use, although for my next projects I plan to use Redux for easier state management. <br />
                        API calls are kept to a minimum.
                    </DialogContentText>
                </Grid>
                <Grid item md={4} xs={12} my={3} order={{ xs: 1, sm: 1, md: 2 }}>
                    <Box borderRadius={10}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <img alt={"project"} width={230} height={230} style={{ borderRadius: "50%" }} />
                    </Box>
                </Grid>
            </Grid>

            <Grid item>
                <b>Resources / Libraries used</b>
                <Divider />
                <DialogContentText mb={1.5} variant='body2'>
                    This web-app fetches its meteorological data from <Link fontWeight='bold' color="inherit" rel="noopener" target="_blank" href="https://openweathermap.org/">OpenWeather</Link>, specifically I make use of the <Link fontWeight='bold' color="inherit" rel="noopener" target="_blank" href="https://openweathermap.org/api/one-call-api">One Call API</Link> to gather the bulk of my weather forecast for a particular location. <br />
                    The <Link fontWeight='bold' color="inherit" rel="noopener" target="_blank" href="https://openweathermap.org/api/geocoding-api"> Geo Coding API</Link> is used to derive an aproximation of the user's location whenever geo-location is requested. <br />
                    In terms of external libraries, the foundation of the project was built using Create-React-App, although I plan to transition to Next.js for future projects. <br />
                    The remaining libraries worth mentioning are: MaterialUI 5 for the UI, Axios for API requests, React-elastic-carousel for the carousel component and notistack for stackable and customizable notifications. <br />
                </DialogContentText>
            </Grid>
            <Grid item>
                <b>More about this project</b>
                <Divider />
                <DialogContentText mb={1.5} variant='body2'>
                    You can find more about this project <Link fontWeight='bold' color="inherit" rel="noopener" target="_blank" href="https://github.com/hpenacho/solaris-weather-app">here</Link>.
                </DialogContentText>
            </Grid>
        </Grid>


}

export default AboutThisProject;