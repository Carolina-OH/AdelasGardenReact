import React from 'react';
import {
    Container, /*Row, Col, Form, Input, Button,*/ Navbar, Nav,
   /* NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem*/
} from 'react-bootstrap';
import { CartWidget } from './CartWidget';

export default NavBarComponent

function NavBarComponent() {
    return <>

  <Navbar bg="light" variant="light">
    <Container>

    <Navbar.Brand href="/">Adela's Garden</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/categoria/plantas">Plantas</Nav.Link>
      <Nav.Link href="/categoria/accesorios">Accesorios</Nav.Link>
      <Nav.Link href="/categoria/mantenimiento">Mantenimiento</Nav.Link>
    </Nav>
    <CartWidget className="ml-auto"></CartWidget>
    </Container>
  </Navbar>
</>
}