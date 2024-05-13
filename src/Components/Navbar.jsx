import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import {navLinks}from "../data/index";
import { NavLink } from 'react-router-dom';

const MyNavbar = () => {
const[changeColor, setChangeColor]= useState(false);

const changeBackgroundColor = ()=>{
    if (window.scrollY > 10) {
        setChangeColor(true);
    }
    else{
        setChangeColor(false);
    }
}

useEffect(()=>{
    changeBackgroundColor();
    window.addEventListener('scroll', changeBackgroundColor);
})

  return (
    <>
    <Navbar  expand="lg" className={changeColor ? "color-active" : ""}>

      <Container >
        <Navbar.Brand className='fs-3 fw-bold' href="/">FriendChise</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

 <Nav className="mx-auto text-center">
 {navLinks.map((link)=> {
    return(

<div className="nav-link rounded-1" key={link.id}>
<NavLink to= {link.path}
>{link.text}</NavLink>
</div>
)
})}
          </Nav>

          <Navbar.Brand className='login btn btn-dark login' href="/login">Login</Navbar.Brand>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    </>
  )
}

export default MyNavbar