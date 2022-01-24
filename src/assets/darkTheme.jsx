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
            },
            logoTitle: {
                textMain: '#EF9C00',
                textSub: '#595959'
            }
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        transition: "transform 0.17s ease-in-out",
                        "&:hover": { transform: "scale3d(1.16, 1.16, 1)", background: 'none', },
                    },
                }
            },
            MuiTabs: {
                styleOverrides: {
                    indicator: {
                        backgroundColor: '#BC7200'
                    }
                }
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        "&.Mui-selected": { color: '#FF9B00' }
                    }
                }
            }
        }
    })

export default darktheme;