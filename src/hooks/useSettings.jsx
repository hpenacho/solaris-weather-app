import { useEffect } from "react"

const useSettings = (setUnitType, setIconStyle, setTimeframe, setFavoriteLocations) => {

    useEffect(() => {
        const unitTypeUserPref = window.localStorage.getItem('unitType')
        const iconStyleUserPref = window.localStorage.getItem('iconStyle')
        const timeframeUserPref = window.localStorage.getItem('timeframe')
        const favoriteLocationsPref = JSON.parse(window.localStorage.getItem('favorites'))

        favoriteLocationsPref ? setFavoriteLocations(favoriteLocationsPref) : setFavoriteLocations([])
        unitTypeUserPref ? setUnitType(unitTypeUserPref) : setUnitType('celsius')
        iconStyleUserPref ? setIconStyle(iconStyleUserPref) : setIconStyle('static')
        timeframeUserPref ? setTimeframe(Number(timeframeUserPref)) : setTimeframe(3)
    }, [setUnitType, setIconStyle, setTimeframe, setFavoriteLocations])
}

export default useSettings