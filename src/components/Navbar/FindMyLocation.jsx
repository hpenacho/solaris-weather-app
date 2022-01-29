import MyLocationSharpIcon from '@mui/icons-material/MyLocationSharp';
import IconButton from '@mui/material/IconButton';
import WeatherService from '../../services/WeatherService'
import { Tooltip } from '@mui/material';
import Zoom from '@mui/material/Zoom';

const FindMyLocation = ({ setLocation, enqueueSnackbar }) => {

    const successCallback = (position) => {
        if (position) {
            WeatherService.geoDecode(position.coords.latitude, position.coords.longitude)
                .then(response => {
                    let location = {
                        name: response[0].name,
                        country: response[0].country,
                        coord: { lat: response[0].lat, lon: response[0].lon }
                    }
                    setLocation(location)
                    enqueueSnackbar((`Geo-located at ${location.name}`), { variant: 'info' })
                })
        }
    }

    const errorCallback = (error) => {
        console.error(error)
        enqueueSnackbar((`${error.message}`), { variant: 'error' })
    }

    const handleClick = () => {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
    }

    return (
        <Tooltip TransitionComponent={Zoom} title={'Find my location'} placement="top">
            <IconButton onClick={handleClick} sx={{ marginX: 0.50 }}>
                <MyLocationSharpIcon sx={{ color: '#589ceb' }} />
            </IconButton>
        </Tooltip>
    )
}

export default FindMyLocation;