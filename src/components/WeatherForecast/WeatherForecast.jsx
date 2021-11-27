import TopSection from "./TopSection"
import MiddleSection from "./MiddleSection"
import BottomSection from "./BottomSection"
import { Paper } from "@mui/material"


const WeatherForecast = () => {

    return (
        <Paper sx={{ bgcolor: "yellow" }}>
            <TopSection />
            <MiddleSection />
            <BottomSection />
        </Paper>
    )
}

export default WeatherForecast