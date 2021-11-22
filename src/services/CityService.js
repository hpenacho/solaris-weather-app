import Cities from '../cities'

const cities = Cities
console.log(cities)
const initializeCities = () => {
    console.log(cities)
    return (cities)
}

export default { initializeCities: initializeCities }
