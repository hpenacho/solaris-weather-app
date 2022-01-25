import PersonPinIcon from '@mui/icons-material/PersonPin';
import { DialogContentText } from '@mui/material';
import { Divider } from '@mui/material';
import { Link } from '@mui/material';
import { Grid } from '@mui/material';
import Image from 'mui-image'
import photo from '../../assets/images/face1.jpg'

const AboutMe = {
    title: 'About me',
    icon: <PersonPinIcon />,
    content:
        <Grid container px={1}>
            <Grid container justifyContent='center'>
                <center>
                    <DialogContentText mb={1.6} color='inherit' variant='h6' id="aboutme-intro">
                        Hi, my name is Hugo and I'm a fullstack web developer! <br />
                    </DialogContentText>
                </center>
            </Grid>

            <Grid container justifyContent={'space-between'} >
                <Grid item md={7.2} xs={12} order={{ xs: 2, sm: 2, md: 1 }}>
                    <b>Academics</b>
                    <Divider />
                    <DialogContentText mb={1.5} variant='body2' id="aboutme-academics">
                        During my studies I first started coding in C in order to grasp the basics of algorithms, before proceeding to Java and C# where I learned OOP and how to apply object-oriented principles to my projects. <br />
                        SQL server, HTML, CSS and JavaScript also became an integral part of my repertoire. <br />
                    </DialogContentText>

                    <b>Career</b>
                    <Divider />
                    <DialogContentText mb={1.5} variant='body2' id="aboutme-career">
                        Fast forward a year and a half of hard studying and I managed to have my internship (later hired) at Siemens after finishing my course, where I had the chance to work predominantly on Angular and .Net projects. <br />
                        By this time the pandemic had started, so my initial professional experience in this field was fully remote, which has had its own perks and unique challenges, but has been a very rewarding experience regardless! <br />
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
                <b>Further Learning</b>
                <Divider />
                <DialogContentText mb={1.5} variant='body2' id="aboutme-furtherlearning">
                    I came to understand that, as in life, one must keep constantly learning in this industry in order to stay relevant. <br />
                    I took it upon myself to finish a <Link fontWeight='bold' color="inherit" rel="noopener" target="_blank" href="https://fullstackopen.com/en/">M.E.R.N. Stack MOOC</Link> accredited by the University of Helsinki, after work hours. <br />
                    Soon after, I felt the need to put into practice what I had learned, and that's how this project came to be!
                </DialogContentText>
            </Grid>
            <Grid item>
                <b>Hobbies</b>
                <Divider />
                <DialogContentText mb={1.5} variant='body2' id="aboutme-hobbies">
                    Exercise is my biggest passion right next to coding! <br />
                    When I'm not working on a side project, you may find me outside practicing Calisthenics, Surfing and more.
                </DialogContentText>
            </Grid>
            <Grid item>
                <b>More</b>
                <Divider />
                <DialogContentText mb={1.5} variant='body2' id="aboutme-more">
                    You can find more about my learning path, career, what I have to offer, and my skillset on my <Link fontWeight='bold' color="inherit" rel="noopener" target="_blank" href="https://www.linkedin.com/in/hugopenacho/">LinkedIn</Link>.
                </DialogContentText>
            </Grid>
        </Grid>
}

export default AboutMe;