import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Navbarr() {
  return (
    <div>
        <Navbar bg="dark" expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             <Link to='/'  style={{color: 'white' , margin:"1rem"}}>Home</Link> 
           <Link to='/About' state={{name:"user"}} style={{color: 'white' , margin:"1rem"}}>About</Link> 
            <Link to='/Contact' style={{color: 'white' , margin:"1rem"}}>Contact</Link> 
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
