
import { createTheme } from '@mui/material/styles';

const darktheme = createTheme(
    {
        palette: {
            type: 'dark',
            primary: {
                main: '#90caf9',
            },
            secondary: {
                main: '#f48fb1',
            },
            background: {
                default: '#212121',
                paper: '#424242',
            },
        },
    })


export default darktheme