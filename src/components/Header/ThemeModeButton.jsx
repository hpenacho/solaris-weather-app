import { IconButton } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import darkTheme from '../../assets/darkTheme'
import lightTheme from '../../assets/lightTheme'

const ThemeModeButton = ({ theme, setTheme }) => {

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme.palette.mode === 'dark' ? lightTheme : darkTheme));
        window.localStorage.setItem('theme', theme.palette.mode === 'dark' ? 'light' : 'dark')
    }

    return (
        <IconButton sx={{ width: 45, height: 45 }} onClick={() => toggleTheme(setTheme)} color="inherit">
            {theme.palette.mode === 'dark' ?
                <LightModeIcon />
                :
                <DarkModeIcon />}
        </IconButton>
    )

}

export default ThemeModeButton;