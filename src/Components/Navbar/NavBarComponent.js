import {
    Container, /*Row, Col, Form, Input, Button,*/ Navbar, Nav,
   /* NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem*/
} from 'react-bootstrap';
export default NavBarComponent

function NavBarComponent() {
    return <>

  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Adela's Garden</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Macetas</Nav.Link>
      <Nav.Link href="#features">Plantas</Nav.Link>
      <Nav.Link href="#pricing">¿Quienes somos?</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
}