import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import cityService from '../services/CityService'

const CityList = () => {

    const cities = cityService.initializeCities()
    console.log(cities)
    return (
        <div>
            {cities.map(city => <div key={city.id}><Dropdown.Item as="button" eventKey={city.id}>{city.name} , {city.country_code}</Dropdown.Item></div>)}
        </div>
    )
}

export default CityList