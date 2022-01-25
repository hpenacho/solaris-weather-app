import animIconPicker from './animIconPicker'

const IconStyler = ({ iconID, iconStyle }) => {

    switch (iconStyle) {
        case 'static':
            return <img width='105' height='auto' alt="weatherIcon" src={`https://openweathermap.org/img/wn/${iconID}@2x.png`} />
        case 'staticSmall':
            return <img width='57' height='auto' alt="weatherIcon" src={`https://openweathermap.org/img/wn/${iconID}@2x.png`} />
        case 'staticBig':
            return <img width='140' height='auto' alt="weatherIcon" src={`https://openweathermap.org/img/wn/${iconID}@2x.png`} />
        case 'animated':
            return animIconPicker(iconID)
        default:
            return <img alt="weatherIcon" src={`https://openweathermap.org/img/wn/${iconID}@2x.png`} />
    }
}

export default IconStyler