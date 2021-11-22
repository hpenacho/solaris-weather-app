const Filter = ({ filter, setFilter, setCity }) => {

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    const search = async (e) => {
        if (e.key === 'Enter') {
            setCity(filter)
        }
    }

    return (
        <div>
            Search a city: <input value={filter} onChange={handleFilterChange} onKeyPress={search} />
        </div>
    )
}

export default Filter;