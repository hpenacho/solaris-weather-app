import { Typography } from "@mui/material"
import { Stack } from "@mui/material";

const ProjectTitle = () => {
    return (
        <>
            <Stack>
                <Typography color="logoTitle.textMain" fontSize={18} component="h1">
                    SOLARIS
                </Typography>
                <Typography fontStyle={'italic'} color="logoTitle.textSub" fontSize={15} component="h2">
                    Weather App
                </Typography>
            </Stack>
        </>
    )
}

export default ProjectTitle;