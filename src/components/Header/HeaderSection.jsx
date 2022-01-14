import Paper from '@mui/material/Paper';
import * as React from 'react';
import DialogSlide from './DialogSlide'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Grid from '@mui/material/Grid'
import ProjectTitle from './ProjectTitle';


const HeaderSection = () => {

    const AboutMe = {
        title: 'About me',
        icon: <PersonPinIcon />,
        contentText: 'Lorem Ipsum badabing badabong'
    }

    const AboutThisProject = {
        title: 'About this project',
        icon: <LibraryBooksIcon />,
        contentText: 'Lorem Ipsum badabing badabong Lorem Ipsum badabing badabong Lorem Ipsum badabing badabong'
    }

    return (
        <Paper elevation={0} sx={{ marginBottom: 2.5, padding: 3.5 }}>
            <Grid container spacing={0} direction="row" justifyContent={'space-between'}>

                <Grid item>
                    <ProjectTitle />
                </Grid>

                <Grid item>
                    <Grid container>
                        <DialogSlide info={AboutThisProject} />
                        <DialogSlide info={AboutMe} />
                    </Grid>
                </Grid>
            </Grid>

        </Paper>
    )
}

export default HeaderSection;