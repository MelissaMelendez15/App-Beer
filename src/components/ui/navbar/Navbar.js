import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'


const Navigation = () => {

    return(

        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="nav" >
            <Navbar.Brand>
                <Link to="/">CoolBeer!</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ml-auto'>
                <Nav.Link as="span">
                       <NavLink to="/" exact activeStyle={{ fontWeight:300 }}>Home</NavLink>
               </Nav.Link>
                <Nav.Link as="span">
                       <NavLink to="/beer" exact activeStyle={{ fontWeight:300 }}>Beers</NavLink>
                 </Nav.Link>
                </Nav>
            </Navbar.Collapse>
       </Navbar>
    )
}


export default Navigation