import { IconButton } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayTwoToneIcon from '@mui/icons-material/NightsStayTwoTone';
import darkTheme from '../../assets/darkTheme'
import lightTheme from '../../assets/lightTheme'
import Tooltip from '@mui/material/Tooltip';

const ThemeModeButton = ({ theme, setTheme }) => {

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme.palette.mode === 'dark' ? lightTheme : darkTheme));
    }

    return (
        <Tooltip title="Toggle dark/light mode" placement="top">
            <IconButton onClick={() => toggleTheme(setTheme)} color="inherit">
                {theme.palette.mode === 'dark' ? <LightModeIcon /> : <NightsStayTwoToneIcon />}
            </IconButton>
        </Tooltip>
    )

}

export default ThemeModeButton;