import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CloseDialogButton from '../CloseDialogButton';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});


const CustomDialogTitle = (props) => {
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

CustomDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const DialogSlide = ({ info }) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <div>
            <Button variant="Filled" onClick={handleClickOpen} startIcon={info.icon}>
                {info.title}
            </Button>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                sx={{ backdropFilter: "blur(4px)" }}
            >
                <CustomDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <Typography p={0.75} fontSize={22.5} color="initial">
                        {info.title}
                    </Typography>
                </CustomDialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {info.contentText}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}
// <BootstrapDialogTitle backgroundColor='detailsModal.main' id="customized-dialog-title" onClose={handleClose}>
export default DialogSlide