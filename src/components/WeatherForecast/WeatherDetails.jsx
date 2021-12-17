import React, { useImperativeHandle } from 'react'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DetailsList from './DetailsList'
import { Divider } from '@mui/material';
import { SvgIcon } from '@mui/material';
import { ReactComponent as Sunrise } from '../../assets/icons/misc/wi-sunrise.svg'
import { ReactComponent as Sunset } from '../../assets/icons/misc/wi-sunset.svg'
import { ReactComponent as Moonrise } from '../../assets/icons/misc/wi-moonrise.svg'
import { ReactComponent as Moonset } from '../../assets/icons/misc/wi-moonset.svg'
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
    backdropFilter: "blur(2px)",
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
                    fullWidth
                    maxWidth="sm"
                    open={open}
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                        <b>Forecast</b>
                    </BootstrapDialogTitle>

                    <Stack pt={1} px={2} alignItems="center" justifyContent="center">
                        <Typography variant='h3'>
                            {capitalize(forecastDetails.weather[0].description)}
                        </Typography>

                        <Grid container mt={-5} px={2} alignItems="center" justifyContent="center" spacing={3}>
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
                                    <Typography variant='h4' textAlign={'right'}>
                                        <i>{formatTime(forecastDetails.dt, { weekday: 'long' })}</i>
                                    </Typography>
                                    <Typography variant='h4'>
                                        {formatTime(forecastDetails.dt, { year: 'numeric', month: 'numeric', day: 'numeric' })}
                                    </Typography>
                                </Grid>
                            }


                        </Grid>

                        {forecastDetails.sunrise &&
                            <Stack direction="row" px={1} spacing={10}>
                                <Stack direction="row" alignItems={'center'}>
                                    <SvgIcon sx={{ color: "#ff9100" }} fontSize='large'> <Sunrise /> </SvgIcon>
                                    <Typography fontSize={22}>
                                        <i>{formatTime(forecastDetails.sunrise + timezoneOffset, { hour: 'numeric', minute: 'numeric', hour12: false })} </i>
                                    </Typography>
                                </Stack>
                                <Stack direction="row" alignItems={'center'}>
                                    <SvgIcon sx={{ color: "#589ceb" }} fontSize='large'> <Moonrise /> </SvgIcon>
                                    <Typography fontSize={22}>
                                        <i>{formatTime(forecastDetails.moonrise + timezoneOffset, { hour: 'numeric', minute: 'numeric', hour12: false })}</i>
                                    </Typography>
                                </Stack>

                            </Stack>
                        }

                        {forecastDetails.moonrise &&
                            <Stack direction="row" px={1} pb={3} spacing={10}>

                                <Stack direction="row" alignItems={'center'}>
                                    <SvgIcon sx={{ color: "#ff9100" }} fontSize='large'> <Sunset /> </SvgIcon>
                                    <Typography fontSize={22} >
                                        <i>{formatTime(forecastDetails.sunset + timezoneOffset, { hour: 'numeric', minute: 'numeric', hour12: false })}</i>
                                    </Typography>
                                </Stack>
                                <Stack direction="row" alignItems={'center'}>
                                    <SvgIcon sx={{ color: "#589ceb" }} fontSize='large'> <Moonset /> </SvgIcon>
                                    <Typography fontSize={22} >
                                        <i> {formatTime(forecastDetails.moonset + timezoneOffset, { hour: 'numeric', minute: 'numeric', hour12: false })} </i>
                                    </Typography>
                                </Stack>
                            </Stack>

                        }

                    </Stack>
                    <DialogContent dividers>

                        <DetailsList forecastDetails={forecastDetails} />

                    </DialogContent>
                </BootstrapDialog>
            }
        </div >
    );
})

export default WeatherDetails;