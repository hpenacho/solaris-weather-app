
import { createTheme } from '@mui/material/styles';

const darktheme = createTheme(
    {
        palette: {
            mode: 'dark',
            primary: {
                main: '#212121',
            },
            secondary: {
                main: '#212121',
            },
            background: {
                default: '#0f0f0f',
                paper: '#1e1e1e',
            },
            textColor: {
                default: '#e4e5f1'
            },
            detailsModal: {
                main: '#1e1e1e',
                section: '#2a2a2a',
            },
        },
    })

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
                subdued: '#444444'
            },
            detailsModal: {
                main: '#A6A7BB',
                section: '#d2d3db', //#e4e5f1
            },
            alertModal: {
                main: '#fdddb1',
                secondary: '#fef0dd'
            }
        },
    })

export { darktheme, lighttheme }