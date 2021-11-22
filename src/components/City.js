const City = ({ name, countryCode , setCity}) => {

    const handleClick = () => {
        console.log("clicked " + name + "," + countryCode)
        setCity(`${name},${countryCode}`)
    }

    return (
        <div>
            <button onClick={handleClick}> {name}, {countryCode} </button>
        </div>
    )
}

export default City