import React from "react";
import './Navs.css'
import {Navbar , Nav ,Container } from 'react-bootstrap';
import logo from './../../assets/logo.png'

const Navs = ()=>{
    return(
        <Navbar >
        <Container>
          <Navbar.Brand href="#home">
            <img src= {logo} />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Explore Food</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <Nav.Link href="#link">FAQ</Nav.Link>
              <Nav.Link id="last" >222422785</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}


export default Navs;