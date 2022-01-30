import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Stack } from "@mui/material";
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import EmailIcon from '@mui/icons-material/Email';

const FooterSection = () => {
    return (
        <Paper elevation={0} sx={{ borderRadius: 0, marginTop: 4, padding: 1 }}>
            <Stack direction='row' justifyContent='center' spacing={4}>
                <IconButton disabled href='https://hugopenacho.com'>
                    <PublicTwoToneIcon fontSize='large' />
                </IconButton>
                <IconButton href='https://github.com/hpenacho'>
                    <GitHubIcon fontSize='large' />
                </IconButton>
                <IconButton href='https://www.linkedin.com/in/hugopenacho/'>
                    <LinkedInIcon fontSize='large' />
                </IconButton>
                <IconButton href='mailto:hpworkdev@gmail.com'>
                    <EmailIcon fontSize='large' />
                </IconButton>
            </Stack>
        </Paper>
    )
}
export default FooterSection;