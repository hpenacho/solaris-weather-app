import { Container } from '@mui/material'
import SearchLocation from './SearchLocation'

const NavBarSection = ({ filter, setFilter, setLocation }) => {

    return (
        <Container sx={{ backgroundColor: '#212121', borderTopLeftRadius: 22, borderTopRightRadius: 22 }}>
            <center>  <SearchLocation filter={filter} setFilter={setFilter} setLocation={setLocation} /> </center>
        </Container>
    )

}

export default NavBarSection
