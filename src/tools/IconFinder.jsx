import { icons } from "../components/WeatherForecast/IconArray";

const IconFinder = (id, isAnimated) => {
    let chosenIcon
    if (isAnimated)
        chosenIcon = icons.find(iconData => iconData.id.find(x => x === id)).animatedIcon;

    else chosenIcon = icons.find(iconData => iconData.id.find(x => x === id)).staticIcon;

    return chosenIcon
}

export default IconFinder;