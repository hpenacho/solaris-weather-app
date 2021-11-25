import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const City = ({ cityInfo, setCity }) => {

    const handleClick = () => {
        console.log("clicked " + cityInfo.name + "," + cityInfo.country)
        setCity(`${cityInfo.name},${cityInfo.country}`)
    }

    return (
        <ListItemButton onClick={handleClick}>
            <ListItemText primary={cityInfo.name} secondary={cityInfo.country} />
        </ListItemButton>

    )
}

export default City