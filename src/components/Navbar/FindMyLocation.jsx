import MyLocationSharpIcon from '@mui/icons-material/MyLocationSharp';
import IconButton from '@mui/material/IconButton';
import geoDecode from '../../services/GeoDecodeService'
import { Tooltip } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import { useSnackbar } from 'notistack';
import deburr from 'lodash.deburr';

const FindMyLocation = ({ setLocation, cities }) => {
    const { enqueueSnackbar } = useSnackbar();

    const successCallback = async (position) => {
        enqueueSnackbar((position.coords.latitude), { variant: 'info' })
        enqueueSnackbar((position.coords.longitude), { variant: 'info' })

        if (position) {

            const response = await geoDecode(position.coords.latitude, position.coords.longitude)

            let location = {
                name: response[0].name,
                country: response[0].country,
                coord: {
                    lat: response[0].lat,
                    lon: response[0].lon
                },
                id: cities.find(city =>
                    city.name.toLowerCase() === deburr(response[0].name).toLowerCase()
                    &&
                    city.country === response[0].country
                    &&
                    city.coord.lat.toFixed(1) === response[0].lat.toFixed(1)
                    &&
                    city.coord.lon.toFixed(1) === response[0].lon.toFixed(1)
                ).id
            }
            setLocation(location)
            enqueueSnackbar((`Geo-located at ${location.name}`), { variant: 'info' })
        }
    }

    const errorCallback = (error) => {
        enqueueSnackbar((`${error.message}`), { variant: 'error' })
    }

    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    const handleClick = () => {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options)
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