import React from 'react'
import { Container,Nav,Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import   '../index.css'

const Navbars = () => {
    return (

        <>
            <Navbar bg="light" expand="lg">
                <Container className="parentContainer">
                    <Navbar.Brand href="#home" className="p-2" style={{backgroundColor:'white'}}>Bharat Belokar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <NavLink  className="links" to ="/" >Home</NavLink >
                            <NavLink className="links" to ="/users" >Users List</NavLink >
                            <NavLink className="links" to ="/adduser" >Add User</NavLink >
                            <NavLink className="links" to ="/searchuser" >Search User</NavLink >        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbars
