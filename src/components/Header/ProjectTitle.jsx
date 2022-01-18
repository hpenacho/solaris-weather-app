import { Typography } from "@mui/material"
import { Stack } from "@mui/material";

const ProjectTitle = () => {
    return (
        <>
            <Stack display={{ xs: 'none', sm: 'block' }} alignItems={'center'}>
                <Typography color="logoTitle.textMain" fontSize={18} component="h1">
                    SOLARIS
                </Typography>
                <Typography fontStyle={'italic'} ml={{ xs: 1, sm: 0 }} color="logoTitle.textSub" fontSize={15} component="h2">
                    Weather App
                </Typography>
            </Stack>
        </>
    )
}

export default ProjectTitle;