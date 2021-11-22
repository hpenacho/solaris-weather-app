import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Weather from './components/Weather'
import CityList from './components/CityList'
import CityService from './services/CityService'

const App = () => {
  const [filter, setFilter] = useState('')
  const [city, setCity] = useState('')


  const cities = CityService.initializeCities()

  return (
    <div>
      <h1>Solaris</h1>

      <Filter filter={filter} setFilter={setFilter} setCity={setCity} />
      <CityList cities={cities} filter={filter} setCity={setCity}/>

      <hr />
      <Weather city={city} />
    </div>
  );
}

export default App;
