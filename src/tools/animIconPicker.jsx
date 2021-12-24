import { ReactComponent as AnimatedDay } from '../assets/icons/animated/clear-day.svg'
import { ReactComponent as AnimatedNight } from '../assets/icons/animated/clear-night.svg'
import { ReactComponent as AnimatedCloudyDay } from '../assets/icons/animated/cloudy-day.svg'
import { ReactComponent as AnimatedCloudyNight } from '../assets/icons/animated/cloudy-night.svg'
import { ReactComponent as AnimatedOvercastDay } from '../assets/icons/animated/overcast-day.svg'
import { ReactComponent as AnimatedOvercastNight } from '../assets/icons/animated/overcast-night.svg'
import { ReactComponent as AnimatedShowerRain } from '../assets/icons/animated/rain-shower.svg'
import { ReactComponent as AnimatedRainDay } from '../assets/icons/animated/rain-day.svg'
import { ReactComponent as AnimatedRainNight } from '../assets/icons/animated/rain-night.svg'
import { ReactComponent as AnimatedThunderDay } from '../assets/icons/animated/thunderstorms-day.svg'
import { ReactComponent as AnimatedThunderNight } from '../assets/icons/animated/thunderstorms-night.svg'
import { ReactComponent as AnimatedSnowDay } from '../assets/icons/animated/snow-day.svg'
import { ReactComponent as AnimatedSnowNight } from '../assets/icons/animated/snow-night.svg'
import { ReactComponent as AnimatedMist } from '../assets/icons/animated/mist.svg'
import { ReactComponent as NotAvailable } from '../assets/icons/misc/not-available.svg'

const animIconPicker = (iconID) => {

    switch (iconID) {
        case '01d':
            return <AnimatedDay />
        case '01n':
            return <AnimatedNight />
        case '02d': case '03d':
            return <AnimatedCloudyDay />
        case '02n': case '03n':
            return <AnimatedCloudyNight />
        case '04d':
            return <AnimatedOvercastDay />
        case '04n':
            return <AnimatedOvercastNight />
        case '09d': case '09n':
            return <AnimatedShowerRain />
        case '10d':
            return <AnimatedRainDay />
        case '10n':
            return <AnimatedRainNight />
        case '11d':
            return <AnimatedThunderDay />
        case '11n':
            return <AnimatedThunderNight />
        case '13d':
            return <AnimatedSnowDay />
        case '13n':
            return <AnimatedSnowNight />
        case '50d': case '50n':
            return <AnimatedMist />
        default:
            return <NotAvailable />
    }
}

export default animIconPicker;