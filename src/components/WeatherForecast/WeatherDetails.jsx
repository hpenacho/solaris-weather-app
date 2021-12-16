import React, { useImperativeHandle } from 'react'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import WeatherIcon from './WeatherIcon'
import { Icon, Stack } from '@mui/material';
import { Grid } from '@mui/material'
import { formatTime } from '../../tools/dateFormatter';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
    backdropFilter: "blur(2px)"
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 1 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const WeatherDetails = React.forwardRef(({ forecastDetails, localTime, timezoneOffset, iconStyle }, ref) => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    useImperativeHandle(ref, () => {
        return {
            handleClickOpen
        }
    })

    console.log(forecastDetails)
    return (
        <div>
            {forecastDetails &&
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                        <b>Forecast</b>
                    </BootstrapDialogTitle>

                    <Stack pt={1} px={2} alignItems="center" justifyContent="center">
                        <Typography variant='h3'>
                            {capitalize(forecastDetails.weather[0].description)}
                        </Typography>

                        <Grid container mt={-5} pb={1} px={2} alignItems="center" justifyContent="flex-end" spacing={3}>
                            <Grid item alignItems="center" justifyContent="center">
                                <Icon sx={{ fontSize: 160 }}>
                                    <WeatherIcon iconID={forecastDetails.weather[0].icon} iconStyle={iconStyle} />
                                </Icon>
                            </Grid>

                            {localTime &&
                                <Grid item mr={2}>
                                    <Typography variant='h4'>
                                        {formatTime(localTime, { hour: 'numeric', minute: 'numeric', hour12: false })}
                                    </Typography>
                                    <Typography variant='h4'>
                                        {formatTime(localTime, { day: 'numeric', month: 'short', hour12: false })}
                                    </Typography>
                                </Grid>
                            }

                            {!localTime &&
                                <Grid item mr={2}>
                                    <Typography variant='h4'>
                                        {formatTime(forecastDetails.dt, { weekday: 'long' })}
                                    </Typography>
                                    <Typography variant='h4'>
                                        {formatTime(forecastDetails.dt, { year: 'numeric', month: 'numeric', day: 'numeric' })}
                                    </Typography>
                                </Grid>

                            }

                        </Grid>
                    </Stack>
                    <DialogContent dividers>

                        {forecastDetails.sunrise &&
                            <Stack direction="row" px={2} justifyContent="space-between">
                                <Typography gutterBottom>
                                    <b>Sun Rise:</b> {formatTime(forecastDetails.sunrise + timezoneOffset, { hour: 'numeric', minute: 'numeric', hour12: false })}
                                </Typography>

                                <Typography gutterBottom>
                                    <b>Sun Set:</b> {formatTime(forecastDetails.sunset + timezoneOffset, { hour: 'numeric', minute: 'numeric', hour12: false })}
                                </Typography>
                            </Stack>
                        }

                        <Typography gutterBottom>
                            <b>Temperature:</b> {Math.round(forecastDetails.temp)}°
                        </Typography>

                        <Typography gutterBottom>
                            <b>Feels like:</b> {Math.round(forecastDetails.feels_like)}°
                        </Typography>

                        <Typography gutterBottom>
                            <b>Chance of precipitation:</b> {Math.round(forecastDetails.pop * 100)}%
                        </Typography>

                        <Typography gutterBottom>
                            <b>Clouds:</b> {forecastDetails.clouds}%
                        </Typography>

                        <Typography gutterBottom>
                            <b>Dew Point:</b> {forecastDetails.dew_point}°
                        </Typography>

                        <Typography gutterBottom>
                            <b>Humidity:</b> {forecastDetails.humidity}%
                        </Typography>

                        <Typography gutterBottom>
                            <b>Pressure:</b> {forecastDetails.pressure} hpa
                        </Typography>

                        {forecastDetails.uvi !== 0 &&
                            <Typography gutterBottom>
                                <b>UV index:</b> {forecastDetails.uvi}
                            </Typography>
                        }

                        {forecastDetails.visibility &&
                            <Typography gutterBottom>
                                <b>Visibility:</b> {forecastDetails.visibility}{forecastDetails.visibility === 10000 && "+"} m
                            </Typography>
                        }

                        <Typography gutterBottom>
                            <b>Wind:</b> {forecastDetails.wind_deg} at {forecastDetails.wind_speed} km/h
                        </Typography>

                        <Typography gutterBottom>
                            <b>Wind Gusts:</b> {forecastDetails.wind_gust} km/h
                        </Typography>

                    </DialogContent>
                </BootstrapDialog>
            }
        </div>
    );
})

export default WeatherDetails;