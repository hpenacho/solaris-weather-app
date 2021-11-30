import { ReactComponent as Day } from '../components/WeatherForecast/icons/static/day.svg'
import { ReactComponent as AnimatedDay } from '../components/WeatherForecast/icons/animated/day.svg'

/*const icons = [{
    staticIcon: <Day />,
    animatedIcon: <AnimatedDay />,
    id: "01d"
},
] */

const IconFinder = (id) => {
    //const result = icons.find(icon => icon.id === id).animatedIcon;
    return "result"
}

export default IconFinder;

/*
staticIcon: day,
        animatedIcon: animatedDay,
        id: "01d"
*/