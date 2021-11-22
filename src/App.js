import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Weather from './components/Weather'
import Searchbar from './components/Searchbar'
import cityService from './services/CityService'

const App = () => {
  const [filter, setFilter] = useState('')
  const [cityList, setCityList] = useState([])


  const citiesArray = cityService.initializeCities()

  /* useEffect(() => {
    const citiesArray = cityService.initializeCities()
    console.log(citiesArray)
    setCityList(citiesArray)
  }, []) */

  return (

    <div>
      <h1>Solaris</h1>

      <Filter filter={filter} setFilter={setFilter} />
      <Weather city={filter} />
      <Searchbar cityList={citiesArray} />
    </div>

  );
}

export default App;
