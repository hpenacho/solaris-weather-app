import { Grid } from '@mui/material';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

const ComplementaryInfo = ({ title, icon, label }) => {

    return (
        <Grid item>
            <Grid container direction="row" alignItems="center">
                <Tooltip TransitionComponent={Zoom} title={title}>
                    <Chip icon={icon}
                        label={label}
                        variant="filled" />
                </Tooltip>
            </Grid>
        </Grid>
    )
}

export default ComplementaryInfo;
