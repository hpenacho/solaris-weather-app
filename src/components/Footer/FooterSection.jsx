import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Stack } from "@mui/material";
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';

const FooterSection = () => {
    return (
        <Paper elevation={0} sx={{ marginTop: 4, padding: 1 }}>
            <Stack direction='row' justifyContent='center' spacing={4}>
                <IconButton disabled href='https://hugopenacho.com'>
                    <PublicTwoToneIcon sx={{ fontSize: 43 }} />
                </IconButton>
                <IconButton href='https://github.com/hpenacho'>
                    <GitHubIcon sx={{ fontSize: 43 }} />
                </IconButton>
                <IconButton href='https://www.linkedin.com/in/hugopenacho/'>
                    <LinkedInIcon sx={{ fontSize: 43 }} />
                </IconButton>
            </Stack>
        </Paper>
    )
}
export default FooterSection;