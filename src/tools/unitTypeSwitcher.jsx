
const unitTypeSwitcher = (value, unitType) => {
    return (unitType === 'celcius') ? value : (value * (9 / 5)) + 32
}

export default unitTypeSwitcher;