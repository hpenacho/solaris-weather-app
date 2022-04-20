import { useEffect } from "react"

const useSettings = (setUnitType, setIconStyle, setTimeframe) => {

    useEffect(() => {
        const unitTypeUserPref = window.localStorage.getItem('unitType')
        const iconStyleUserPref = window.localStorage.getItem('iconStyle')
        const timeframeUserPref = window.localStorage.getItem('timeframe')

        unitTypeUserPref ? setUnitType(unitTypeUserPref) : setUnitType('celsius')
        iconStyleUserPref ? setIconStyle(iconStyleUserPref) : setIconStyle('static')
        timeframeUserPref ? setTimeframe(Number(timeframeUserPref)) : setTimeframe(3)
    }, [setUnitType, setIconStyle, setTimeframe])
}

export default useSettings