import { createTheme } from '@mui/material/styles';

const lighttheme = createTheme(
    {
        palette: {
            mode: 'light',
            primary: {
                main: '#B2B6D8',
            },
            secondary: {
                main: '#c6c9e2',
            },
            background: {
                default: '#f1f2f8',
                paper: '#d2d3db',
            },
            textColor: {
                default: '#2A2A2A',
                subdued: '#5E5E5E'
            },
            detailsModal: {
                main: '#A6A7BB',
                section: '#d2d3db', //#e4e5f1
            },
            alertModal: {
                main: '#d2d3db',
                secondary: '#f1f2f8'
            }
        },
    })

export default lighttheme;