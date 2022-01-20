import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { DialogContentText } from '@mui/material';
import { Divider } from '@mui/material';
import { Link } from '@mui/material';
import { Grid } from '@mui/material';
import Image from 'mui-image'
import photo from '../../assets/images/face1.jpg'

const AboutThisProject = {
    title: 'About this project',
    icon: <LibraryBooksIcon />,
    content: <Grid container px={1}>
        <Grid container justifyContent='center'>
            <DialogContentText mb={1.6} variant='h6'>
                Solaris Weather App, my first project in React.js <br />
            </DialogContentText>
        </Grid>

        <Grid container justifyContent={'space-between'} >
            <Grid item md={7.2} xs={12} order={{ xs: 2, sm: 2, md: 1 }}>
                <b>Purpose</b>
                <Divider />
                <DialogContentText mb={1.5} variant='body2'>
                    I first decided to create this web-app after finishing the University of Helsinki MERN Stack course.  <br />
                    This was an opportunity to develop a project wherein I could apply what I learned in a more practical manner beyond the isolated exercises proposed by the course.
                </DialogContentText>

                <b>Design Patterns</b>
                <Divider />
                <DialogContentText mb={1.5} variant='body2'>

                </DialogContentText>
            </Grid>
            <Grid item md={4} xs={12} my={3} order={{ xs: 1, sm: 1, md: 2 }}>
                <Image
                    src={photo}
                    style={{ borderRadius: 300, maxWidth: 220, maxHeight: 220 }}
                    duration={4000}
                />

            </Grid>
        </Grid>


        <Grid item>
            <b>Libraries</b>
            <Divider />
            <DialogContentText mb={1.5} variant='body2'>
                Some of the libraries used
            </DialogContentText>
        </Grid>
        <Grid item>
            <b>More</b>
            <Divider />
            <DialogContentText mb={1.5} variant='body2'>
                You can find more about this project <Link fontWeight='bold' color="inherit" rel="noopener" target="_blank" href="https://github.com/hpenacho/solaris-weather-app">here</Link>.
            </DialogContentText>
        </Grid>
    </Grid>


}

export default AboutThisProject;