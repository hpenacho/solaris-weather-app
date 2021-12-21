
const unitTypeSwitcher = (value, unitType) => {
    return (unitType === 'celsius') ? value : (value * (9 / 5)) + 32
}

export default unitTypeSwitcher;