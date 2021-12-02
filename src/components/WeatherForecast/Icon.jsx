import IconFinder from '../../tools/IconFinder'

const Icon = ({ iconID, isAnimated }) => {
    let icon = ""
    if (iconID && isAnimated) {
        icon = IconFinder(iconID, isAnimated)
    }
    else if (iconID && !isAnimated) {
        icon = <img alt="weatherIcon" src={`https://openweathermap.org/img/wn/${iconID}@2x.png`}></img>
    }
    return icon
}

export default Icon