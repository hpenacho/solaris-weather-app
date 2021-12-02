import { icons } from "../components/WeatherForecast/IconArray";

const IconStyler = (iconID, iconStyle) => {

    (() => {
        switch (iconStyle) {
            case 'default':
                return <img alt="weatherIcon" src={`https://openweathermap.org/img/wn/${iconID}@2x.png`} />
            case 'alternate':
                return null
            case 'animated':
                return icons.find(iconData => iconData.id.find(x => x === iconID)).animatedIcon;
            default:
                return 'default'
        }
    })()
}

export default IconStyler