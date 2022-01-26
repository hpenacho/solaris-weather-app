import { forwardRef, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CloseDialogButton from '../CloseDialogButton';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});


const CustomDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ p: 1.75 }} {...other}>
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

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <div>
            <Button size={"60"} variant="Filled" onClick={handleClickOpen} startIcon={info.icon}>
                <Typography display={{ xs: 'none', sm: 'block' }} fontSize={14}>{info.title}</Typography>
            </Button>

            <Dialog
                maxWidth='md'
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                sx={{ backdropFilter: "blur(4px)" }}
            >
                <CustomDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <Typography fontStyle={'italic'} fontSize={22.5} color="aboutTitle.main">
                        {info.title}
                    </Typography>
                </CustomDialogTitle>
                <DialogContent>
                    {info.content}
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default DialogSlide