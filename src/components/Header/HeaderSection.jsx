import Paper from '@mui/material/Paper';
import DialogSlide from './DialogSlide'
import ProjectTitle from './ProjectTitle';
import { Divider } from '@mui/material';
import { Grid } from '@mui/material';
import ThemeModeButton from './ThemeModeButton';
import AboutMe from './AboutMe';
import AboutThisProject from './AboutThisProject';

const HeaderSection = ({ theme, setTheme }) => {

    return (
        <Paper elevation={0} sx={{ borderRadius: 0, marginBottom: 2.5, paddingX: 2, paddingY: { xs: 1, sm: 2 } }}>
            <Grid container direction="row" justifyContent={'space-between'} alignItems={'center'}>
                <Grid item>
                    <ProjectTitle />
                </Grid>
                <Grid item>
                    <Grid container alignItems={'center'}>
                        <Grid item >
                            <DialogSlide info={AboutThisProject} />
                        </Grid>
                        <Grid item pr={1}>
                            <DialogSlide info={AboutMe} />
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item pl={1}>
                            <ThemeModeButton theme={theme} setTheme={setTheme} ></ThemeModeButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default HeaderSection;