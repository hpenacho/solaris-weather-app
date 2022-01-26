import { useState } from 'react';
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
import { Grid } from '@mui/material';

const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 700,
  bgcolor: 'alertModal.main',
  border: '2px solid #ff9100',
  borderRadius: 2,
  boxShadow: 24,
  p: 3
};

export default function AlertModal({ alertData, index }) {
  const [open, setOpen] = useState(false);
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
          sx={{ backdropFilter: "blur(2px)" }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography alignItems={"center"} justifyContent={"center"} fontSize={26} pb={1} id="transition-modal-title" color="#ff9100">{alertData.event.toUpperCase()}</Typography>
              <Grid py={1} container justifyContent='space-evenly' spacing={1}>
                <Grid item pb={1}>
                  <Typography px={0.7} sx={{ backgroundColor: 'alertModal.secondary', borderRadius: 5 }} color="textColor.default" variant="subtitle1"> <i>Starts:</i> {formatTime(alertData.start, { hour: 'numeric', minute: 'numeric', hour12: false })} {formatTime(alertData.start, { day: 'numeric', month: 'short', hour12: false })}</Typography>
                </Grid>
                <Grid item>
                  <Typography px={0.7} sx={{ backgroundColor: 'alertModal.secondary', borderRadius: 5 }} color="textColor.default" variant="subtitle1"><i>Ends: </i>{formatTime(alertData.end, { hour: 'numeric', minute: 'numeric', hour12: false })} {formatTime(alertData.end, { day: 'numeric', month: 'short', hour12: false })}</Typography>
                </Grid>
              </Grid>
              {alertData.description &&
                <Typography color="textColor.default" sx={{ backgroundColor: 'alertModal.secondary', borderRadius: 3 }} fontSize={17} p={2} id="transition-modal-description">{alertData.description}</Typography>
              }
              {alertData.sender_name &&
                < Typography mt={4} color="textColor.subdued" variant="subtitle2">Alert provider: {alertData.sender_name}</Typography>
              }
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  )
}