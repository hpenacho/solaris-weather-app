
import { createTheme } from '@mui/material/styles';

const darktheme = createTheme(
    {
        palette: {
            type: 'dark',
            primary: {
                main: '#141414',
            },
            secondary: {
                main: '#f48fb1',
            },
            background: {
                default: '#212121',
                paper: '#1D1D1D',
            },
        },
    })


export default darktheme