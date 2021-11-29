
import { createTheme } from '@mui/material/styles';

const darktheme = createTheme(
    {
        palette: {
            mode: 'dark',
            primary: {
                main: '#b6c7f5',
            },
            secondary: {
                main: '#f48fb1',
            },
            background: {
                default: '#0f0f0f',
                paper: '#1e1e1e',
            },
        },
    })


export default darktheme