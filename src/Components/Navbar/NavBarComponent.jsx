import React from 'react';
import {
    Container, /*Row, Col, Form, Input, Button,*/ Navbar, Nav,
    NavDropdown/* NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem*/
} from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";
import {useCartContext } from '../../Context/CartContext'

export default NavBarComponent
function NavBarComponent() {
  const {totalQuantity} = useCartContext()
  console.log(totalQuantity())
    return <>

  <Navbar bg="light" variant="light">
    <Container className='space-between'>
    <Navbar.Brand>  <Link className="link link-dark" to={'/'}>Adela's Garden</Link></Navbar.Brand>
    <Nav className="">
      <NavDropdown.Item> <Link className="link link-dark" to={'/categoria/plantas'}>Plantas</Link></NavDropdown.Item>
      <NavDropdown.Item> <Link className="link link-dark" to={'/categoria/accesorios'}>Accesorios</Link></NavDropdown.Item>
      <NavDropdown.Item> <Link className="link link-dark" to={'/categoria/mantenimiento'}>Mantenimiento </Link></NavDropdown.Item>
      {totalQuantity()!==0 ? 
      (<NavDropdown.Item className='cartwidget'><Link className="link link-dark" to={'/cart'}>
       <CartWidget ></CartWidget></Link> </NavDropdown.Item>)
      :
      (<NavDropdown.Item className='cartwidget d-none'><Link className="link link-dark" to={'/cart'}>
      <CartWidget className="d-none"></CartWidget></Link> </NavDropdown.Item>)
      }  
     
    </Nav>
    </Container>
  </Navbar>
</>
}