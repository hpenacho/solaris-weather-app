import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Stack } from "@mui/material";
import WebTwoToneIcon from '@mui/icons-material/WebTwoTone';

const FooterSection = () => {
    return (
        <Paper elevation={0} sx={{ marginTop: 2.5, padding: 2 }}>
            <Stack direction='row' justifyContent='center' spacing={5}>
                <IconButton>
                    <WebTwoToneIcon sx={{ fontSize: 40 }} />
                </IconButton>

                <IconButton>
                    <GitHubIcon sx={{ fontSize: 40 }} />
                </IconButton>

                <IconButton>
                    <LinkedInIcon sx={{ fontSize: 40 }} />
                </IconButton>

            </Stack>
        </Paper>
    )
}
export default FooterSection;