import Cities from '../cities'
import Countries from '../countries'

const cities = Cities
const initializeCities = () => {
    return (cities)
}

const countries = Countries
const initializeCountries = () => {
    return (countries)
}

export default {
    initializeCities: initializeCities,
    initializeCountries: initializeCountries
}
