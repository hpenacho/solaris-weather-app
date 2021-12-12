import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import { formatTime } from '../../tools/dateFormatter'
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import Badge from '@mui/material/Badge';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AlertModal({ alertData, index }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        <Tooltip TransitionComponent={Zoom} title={`Alert: ${alertData.event}`}>
          <IconButton onClick={handleOpen} color="warning" aria-label="weather-alarm">
            <Badge badgeContent={index + 1}>
              <ReportProblemIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography alignItems={"center"} justifyContent={"center"} variant="h5" pb={1} id="transition-modal-title" color="#ff9100">{alertData.event.toUpperCase()}</Typography>
              <Typography color="#e0e0e0" variant="subtitle1"> <i>Starts:</i> {formatTime(alertData.start)}</Typography>
              <Typography color="#e0e0e0" variant="subtitle1"><i>Ends:</i> {formatTime(alertData.end)}</Typography>
              <Typography color="#F0E9D2" variant="body1" py={2} id="transition-modal-description">{alertData.description}</Typography>
              <Typography color="#9e9e9e" variant="subtitle2">Alert provider: {alertData.sender_name}</Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  )
}