import { IconButton } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import darkTheme from '../../assets/darkTheme'
import lightTheme from '../../assets/lightTheme'
import Tooltip from '@mui/material/Tooltip';

const ThemeModeButton = ({ theme, setTheme }) => {

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme.palette.mode === 'dark' ? lightTheme : darkTheme));
        window.localStorage.setItem('theme', theme.palette.mode === 'dark' ? 'light' : 'dark')
    }

    return (
        <Tooltip title="Toggle dark/light mode" placement="top">
            <IconButton sx={{ width: 45, height: 45 }} onClick={() => toggleTheme(setTheme)} color="inherit">
                {theme.palette.mode === 'dark' ?
                    <LightModeIcon />
                    :
                    <DarkModeIcon />}
            </IconButton>
        </Tooltip>
    )

}

export default ThemeModeButton;