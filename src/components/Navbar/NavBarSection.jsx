import { Container } from '@mui/material'
import SearchLocation from './SearchLocation'

const NavBarSection = ({ filter, setFilter, setLocation, cities }) => {

    return (
        <Container>
            <center>  <SearchLocation filter={filter} setFilter={setFilter} setLocation={setLocation} cities={cities} /> </center>
        </Container>
    )

}

export default NavBarSection
