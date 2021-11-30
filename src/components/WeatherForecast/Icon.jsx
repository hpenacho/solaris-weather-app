import { ReactComponent as Day } from './assets/static/day.svg'
import AnimatedDay from './assets/animated/day.svg'

const icons = [{
    staticIcon: <Day />,
    animatedIcon: <object type="image/svg+xml" data={AnimatedDay}>svg-animation</object>,
    id: "01d"
},
]

const IconFinder = (id, isAnimated) => {
    let chosenIcon
    if (isAnimated)
        chosenIcon = icons.find(icon => icon.id === id).animatedIcon;

    else chosenIcon = icons.find(icon => icon.id === id).staticIcon;

    return chosenIcon
}

const Icon = (iconID, isAnimated) => {

    let icon = ""
    if (iconID)
        icon = IconFinder("01d", isAnimated)
    return icon
}

export default Icon