import React, { useState } from 'react'
import Filter from './components/Filter'
import Weather from './components/Weather'
import CityList from './components/CityList'
import CityService from './services/CityService'
import SearchBar from './components/SearchBar'
import Box from '@mui/system/Box';

const App = () => {
  const [filter, setFilter] = useState('')
  const [city, setCity] = useState('')

  const cities = CityService.initializeCities()

  return (
    <div>

      <Box
        sx={{
          width: 600, height: 600, mx: "auto", bgcolor: '#212121', borderRadius: 3
        }}
      >
        <h1>Solaris</h1>
        <SearchBar filter={filter} setFilter={setFilter} />
        <Filter filter={filter} setFilter={setFilter} setCity={setCity} />
        <CityList cities={cities} filter={filter} setCity={setCity} />
        <hr />
        <Weather city={city} />
      </Box>

    </div>
  );
}

export default App;
