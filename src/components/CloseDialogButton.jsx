import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const CloseDialogButton = ({ onClose }) => {
    return (
        <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
                position: 'absolute',
                right: 3,
                top: {
                    xs: 1, sm: 3
                },
                color: (theme) => theme.palette.grey[500],
            }}
        >
            <CloseIcon />
        </IconButton >
    )
}

export default CloseDialogButton;