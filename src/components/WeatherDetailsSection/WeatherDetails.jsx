import { useImperativeHandle, useState, forwardRef } from 'react'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseDialogButton from '../CloseDialogButton';
import DetailsList from './DetailsList'
import { ReactComponent as Sunrise } from '../../assets/icons/misc/wi-sunrise.svg'
import { ReactComponent as Sunset } from '../../assets/icons/misc/wi-sunset.svg'
import { ReactComponent as Moonrise } from '../../assets/icons/misc/wi-moonrise.svg'
import { ReactComponent as Moonset } from '../../assets/icons/misc/wi-moonset.svg'
import Typography from '@mui/material/Typography';
import IconStyler from '../../tools/IconStyler';
import { Icon } from '@mui/material';
import { Grid } from '@mui/material'
import { formatTime } from '../../tools/dateFormatter';
import SunMoonTime from './SunMoonTime';

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
                <CloseDialogButton onClose={onClose} />
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const WeatherDetails = forwardRef(({ forecastDetails, localTime, timezoneOffset, iconStyle, unitType }, ref) => {
    const [open, setOpen] = useState(false);
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
                    <BootstrapDialogTitle backgroundColor='detailsModal.main' id="customized-dialog-title" onClose={handleClose}>
                        <Typography fontSize='large' sx={{ color: 'textColor.subdued' }}>
                            <b>Forecast</b>
                        </Typography>
                    </BootstrapDialogTitle>

                    <Grid mt={-1.2} pb={{ xs: 1, sm: 1.5 }} bgcolor='detailsModal.main' container direction={'row'} justifyContent="space-evenly" alignItems={'center'}>
                        <Grid item>
                            <Grid container alignItems="center" direction="column" >
                                <Grid item  >
                                    <Grid container direction="row" alignItems="center" spacing={{ sm: 2 }}>
                                        {!localTime &&
                                            <>
                                                <Grid item sx={{ display: { xs: 'none', sm: 'block' } }}>
                                                    {iconStyle === 'animated' &&
                                                        <Icon sx={{ fontSize: 100 }}>
                                                            <IconStyler iconID={forecastDetails.weather[0].icon} iconStyle={iconStyle} />
                                                        </Icon>
                                                    }

                                                    {iconStyle === 'static' &&
                                                        <>
                                                            <Grid item sx={{ display: { xs: 'none', sm: 'block' } }}>
                                                                <IconStyler iconID={forecastDetails.weather[0].icon} iconStyle={'static'} />
                                                            </Grid>
                                                        </>}
                                                </Grid>
                                                <Grid item >
                                                    <Typography fontSize={{ xs: 17.5, sm: 22 }} sx={{ color: 'textColor.default' }} textAlign={'right'}>
                                                        <i>{formatTime(forecastDetails.dt, { weekday: 'long' })}</i>
                                                    </Typography>
                                                    <Typography fontSize={{ xs: 17.5, sm: 22 }} sx={{ color: 'textColor.default' }}>
                                                        {formatTime(forecastDetails.dt, { year: 'numeric', month: 'numeric', day: 'numeric' })}
                                                    </Typography>
                                                </Grid>
                                            </>
                                        }
                                        {localTime &&
                                            <>
                                                <Grid item>
                                                    {iconStyle === 'animated' &&
                                                        <Icon sx={{ fontSize: 100 }}>
                                                            <IconStyler iconID={forecastDetails.weather[0].icon} iconStyle={iconStyle} />
                                                        </Icon>
                                                    }

                                                    {iconStyle === 'static' &&
                                                        <>
                                                            <Grid item>
                                                                <IconStyler iconID={forecastDetails.weather[0].icon} iconStyle={'static'} />
                                                            </Grid>
                                                        </>}
                                                </Grid>
                                                <Grid item sx={{ textAlign: 'center' }}>
                                                    <Typography fontSize={{ xs: 18, sm: 22 }} sx={{ color: 'textColor.default' }}>
                                                        {formatTime(localTime, { hour: 'numeric', minute: 'numeric', hour12: false })}
                                                    </Typography>
                                                    <Typography fontSize={{ xs: 18, sm: 22 }} sx={{ color: 'textColor.default' }}>
                                                        {formatTime(localTime, { day: 'numeric', month: 'short', hour12: false })}
                                                    </Typography>
                                                </Grid>
                                            </>
                                        }
                                    </Grid>
                                </Grid>

                                {localTime &&
                                    <Grid item mt={-1}>
                                        <Typography fontFamily={'Exo, sans-serif'} fontStyle='italic' sx={{ fontSize: { xs: 25, sm: 34 }, color: 'textColor.default' }} >
                                            {capitalize(forecastDetails.weather[0].description)}
                                        </Typography>
                                    </Grid>
                                }

                                {!localTime &&
                                    <Grid item mt={{ xs: 1, sm: -2.1 }}>
                                        <Typography fontFamily={'Exo, sans-serif'} fontStyle='italic' sx={{ fontSize: { xs: 18, sm: 34 }, color: 'textColor.default' }} >
                                            {capitalize(forecastDetails.weather[0].description)}
                                        </Typography>
                                    </Grid>
                                }


                            </Grid>
                        </Grid>

                        {forecastDetails.sunrise && forecastDetails.sunset &&
                            <Grid item>
                                <Grid container alignItems="center" justifyContent="center">
                                    <Grid item>
                                        <Grid container p={{ xs: 0, sm: 1 }} sx={{ borderRadius: 5, bgcolor: 'detailsModal.section' }}>
                                            <Grid item>
                                                <Grid container direction={{ xs: 'column', sm: 'column' }}>
                                                    <Grid item>
                                                        <SunMoonTime
                                                            time={`${formatTime(forecastDetails.sunrise + timezoneOffset, { hour: 'numeric', minute: 'numeric', hour12: false })}`}
                                                            title='Sun Rise'
                                                            icon={<Sunrise />}
                                                            color={"#ff9100"}
                                                        />
                                                    </Grid>
                                                    <Grid item>
                                                        <SunMoonTime
                                                            time={`${formatTime(forecastDetails.sunset + timezoneOffset, { hour: 'numeric', minute: 'numeric', hour12: false })}`}
                                                            title='Sun Set'
                                                            icon={<Sunset />}
                                                            color={"#ff9100"}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item sx={{ display: { xs: 'none', sm: 'block' } }}>
                                                {forecastDetails.moonrise !== 0 && forecastDetails.moonset !== 0 &&
                                                    <>
                                                        <SunMoonTime
                                                            time={`${formatTime(forecastDetails.moonrise + timezoneOffset, { hour: 'numeric', minute: 'numeric', hour12: false })}`}
                                                            title='Moon Rise'
                                                            icon={<Moonrise />}
                                                            color={"#589ceb"}
                                                        />

                                                        <SunMoonTime
                                                            time={`${formatTime(forecastDetails.moonset + timezoneOffset, { hour: 'numeric', minute: 'numeric', hour12: false })}`}
                                                            title='Moon Set'
                                                            icon={<Moonset />}
                                                            color={"#589ceb"}
                                                        />
                                                    </>
                                                }
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                        }
                    </Grid>

                    <DialogContent sx={{ backgroundColor: 'detailsModal.main' }} dividers >
                        <DetailsList forecastDetails={forecastDetails} timezoneOffset={timezoneOffset} unitType={unitType} />
                    </DialogContent>
                </BootstrapDialog>
            }
        </div >
    );
})

export default WeatherDetails;