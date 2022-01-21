import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { DialogContentText } from '@mui/material';
import { Divider } from '@mui/material';
import { Link } from '@mui/material';
import { Grid } from '@mui/material';

const AboutThisProject = {
    title: 'About this project',
    icon: <LibraryBooksIcon />,
    content: <Grid container px={1}>
        <Grid container py={1.5} justifyContent='center'>
            <DialogContentText mb={1.6} variant='h6' id="aboutme-intro">
                Solaris Weather App, my first project in React.js <br />
            </DialogContentText>
        </Grid>
        <Grid item xs={9}>
            <b>Purpose</b>
            <Divider />
            <DialogContentText mb={1.5} variant='body2' id="aboutme-academics">
                I first decided to create this web-app after finishing the University of Helsinki MERN Stack course.  <br />
                This was an opportunity to develop a project where I could apply what I learned in a more practical manner beyond the isolated exercises proposed by the course.
            </DialogContentText>
        </Grid>
        <Grid item xs={9}>
            <b>Design Patterns</b>
            <Divider />
            <DialogContentText mb={1.5} variant='body2' id="aboutme-career">
                Whenever possible, I tried to maintain a fair level of abstraction towards my components, such that they could be reused without duplicating code. <br />
                In an attempt to make the code tidier and more easily readable, I separated component logic from UI whenever practical. <br />
                React hooks were used abundantly, although for my next projects I plan to use Redux for easier state management. <br />
                API calls are kept to a minimum.
            </DialogContentText>
        </Grid>


        <Grid item xs={9}>
            <b>More about this project</b>
            <Divider />
            <DialogContentText mb={1.5} variant='body2' id="aboutme-hobbies">
                You can find more about this project <Link fontWeight='bold' color="inherit" rel="noopener" target="_blank" href="https://github.com/hpenacho/solaris-weather-app">here</Link>.
            </DialogContentText>
        </Grid>
    </Grid>


}

export default AboutThisProject;