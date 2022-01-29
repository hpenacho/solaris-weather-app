import animIconPicker from './animIconPicker'

const IconStyler = ({ iconID, iconStyle }) => {

    switch (iconStyle) {
        case 'static':
            return <img width='100' height='auto' alt="weatherIcon" src={`https://openweathermap.org/img/wn/${iconID}@2x.png`} />
        case 'staticSmall':
            return <img width='60' height='auto' alt="weatherIcon" src={`https://openweathermap.org/img/wn/${iconID}@2x.png`} />
        case 'animated':
            return animIconPicker(iconID)
        default:
            return <img alt="weatherIcon" src={`https://openweathermap.org/img/wn/${iconID}@2x.png`} />
    }
}

export default IconStyler