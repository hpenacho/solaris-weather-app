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
                weaker: '#3C3C3C',
                subdued: '#5E5E5E'
            },
            detailsModal: {
                main: '#A6A7BB',
                section: '#d2d3db',
            },
            alertModal: {
                main: '#d2d3db',
                secondary: '#f1f2f8'
            },
            aboutTitle: {
                main: '#47474E'
            }
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        transition: "transform 0.17s ease-in-out",
                        "&:hover": { transform: "scale3d(1.16, 1.16, 1)", background: 'none', },
                    }
                }
            },
            MuiTabs: {
                styleOverrides: {
                    indicator: {
                        backgroundColor: '#00B6FF'
                    }
                }
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        "&.Mui-selected": { color: '#0066B6' }
                    }
                }
            },
        },
        typography: {
            h4: {
                fontFamily: "Bree Serif",
            }
        },
    })

export default lighttheme;