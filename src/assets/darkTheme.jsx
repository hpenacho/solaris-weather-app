import { createTheme } from '@mui/material/styles';

const darktheme = createTheme(
    {
        palette: {
            mode: 'dark',
            primary: {
                main: '#161616',
            },
            secondary: {
                main: '#212121',
            },
            background: {
                default: '#0f0f0f',
                paper: '#1e1e1e',
            },
            textColor: {
                default: '#e4e5f1',
                subdued: '#5E5E5E'
            },
            detailsModal: {
                main: '#1e1e1e',
                section: '#2a2a2a',
            },
            alertModal: {
                main: '#1e1e1e',
                secondary: '#2a2a2a'
            }
        },
    })

export default darktheme;