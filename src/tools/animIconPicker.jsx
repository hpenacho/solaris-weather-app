import { ReactComponent as AnimatedDay } from '../assets/icons/animated/01d.svg'
import { ReactComponent as AnimatedNight } from '../assets/icons/animated/01n.svg'
import { ReactComponent as AnimatedCloudyDay } from '../assets/icons/animated/02d.svg'
import { ReactComponent as AnimatedCloudyNight } from '../assets/icons/animated/02n.svg'
import { ReactComponent as AnimatedCloudy } from '../assets/icons/animated/03d.svg'
import { ReactComponent as AnimatedShowerRain } from '../assets/icons/animated/09d.svg'
import { ReactComponent as AnimatedRainDay } from '../assets/icons/animated/10d.svg'
import { ReactComponent as AnimatedRainNight } from '../assets/icons/animated/10n.svg'
import { ReactComponent as AnimatedThunder } from '../assets/icons/animated/11d.svg'
import { ReactComponent as AnimatedSnowDay } from '../assets/icons/animated/13d.svg'
import { ReactComponent as AnimatedSnowNight } from '../assets/icons/animated/13n.svg'
import { ReactComponent as AnimatedMist } from '../assets/icons/animated/50d.svg'

const animIconPicker = (iconID) => {

    switch (iconID) {
        case '01d':
            return <AnimatedDay />
        case '01n':
            return <AnimatedNight />
        case '02d':
            return <AnimatedCloudyDay />
        case '02n':
            return <AnimatedCloudyNight />
        case '03d': case '03n': case '04d': case '04n':
            return <AnimatedCloudy />
        case '09d': case '09n':
            return <AnimatedShowerRain />
        case '10d':
            return <AnimatedRainDay />
        case '10n':
            return <AnimatedRainNight />
        case '11d': case '11n':
            return <AnimatedThunder />
        case '13d':
            return <AnimatedSnowDay />
        case '13n':
            return <AnimatedSnowNight />
        case '50d': case '50n':
            return <AnimatedMist />

        default:
            return null
    }
}

export default animIconPicker;