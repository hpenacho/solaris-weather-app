import React from "react";
import City from "./City"

let filteredCities = []
const CityList = ({ cities, filter, setCity }) => {
    if(filter !== ''){
    filteredCities = cities.filter(c => c.name.includes(filter))
}
    console.log(filteredCities)
    /* if(filteredCities.length === 1)
         return() */

    if (filteredCities.length > 10)
        return (<p>Please narrow your search criteria</p>)

    return (
        <ul>
            {filter !== '' &&
                filteredCities.map(city =>
                    <div key={city.id}>
                        <City name={city.name} countryCode={city.country} setCity={setCity}/>
                    </div>
                )
            }
        </ul>
    )
}

export default CityList