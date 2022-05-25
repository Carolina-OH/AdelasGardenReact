import {
    Container, /*Row, Col, Form, Input, Button,*/ Navbar, /*Nav,
    NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem*/
} from 'react-bootstrap';
export default NavBarComponent

function NavBarComponent() {
    return <>

        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#">Adela's Garden</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>

    </>
}