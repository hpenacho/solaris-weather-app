import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Weather from './components/Weather'

const App = () => {
  const [filter, setFilter] = useState('')

  return (
    <div>
      <h1>Solaris</h1>
      <Filter filter={filter} setFilter={setFilter} />
      <Weather city={filter} />
    </div>

  );
}

export default App;
