import React, {useState, useEffect} from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap'

const Headers = () => {
  return (
        <header >
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect style={{padding:'4px'}}>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>EShop</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">

                            <LinkContainer to='/cart'>
                                <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                            </LinkContainer>

                               <NavDropdown title="user" id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item >Logout</NavDropdown.Item>

                                </NavDropdown>

                                    <LinkContainer to='/login'>
                                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                    </LinkContainer>


                                <NavDropdown title='Admin' id='adminmenue'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

  )
}

export default Headers