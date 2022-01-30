import { Typography } from "@mui/material"
import { Stack } from "@mui/material";

const ProjectTitle = () => {
    return (
        <>
            <Stack alignItems={'center'}>
                <Typography color="logoTitle.textMain" fontSize={18.5} letterSpacing={0.7} fontFamily={"Bree Serif"} fontStyle={'italic'} component="h1">
                    SOLARIS
                </Typography>
                <Typography fontStyle={'italic'} ml={{ xs: 1, sm: 0 }} fontFamily={'Exo, sans-serif'} color="logoTitle.textSub" fontSize={15} component="h2">
                    Weather Forecast
                </Typography>
            </Stack>
        </>
    )
}

export default ProjectTitle;