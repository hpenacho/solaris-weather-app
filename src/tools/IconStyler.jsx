import animIconPicker from './animIconPicker'

const IconStyler = (iconID, iconStyle) => {

    switch (iconStyle) {
        case 'static':
            return <img alt="weatherIcon" src={`https://openweathermap.org/img/wn/${iconID}@2x.png`} />
        case 'alternate':
            return null
        case 'animated':
            return animIconPicker(iconID)
        default:
            return <img alt="weatherIcon" src={`https://openweathermap.org/img/wn/${iconID}@2x.png`} />
    }
}

export default IconStyler