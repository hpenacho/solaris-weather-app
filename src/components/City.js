import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const City = ({ cityInfo, setLocation, setShowWeather }) => {

    const handleClick = () => {
        setLocation(`${cityInfo.name},${cityInfo.country}`)
        setShowWeather(true)
    }

    return (
        <ListItemButton onClick={handleClick}>
            <ListItemText primary={cityInfo.name} secondary={cityInfo.country} />
        </ListItemButton>

    )
}

export default City