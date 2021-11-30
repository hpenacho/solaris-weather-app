import IconFinder from '../../tools/IconFinder'

const Icon = ({ iconID, isAnimated }) => {
    let icon = ""
    if (iconID)
        icon = IconFinder(iconID, isAnimated)
    return icon
}

export default Icon