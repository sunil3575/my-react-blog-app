import React from "react";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import javascripts from "../Pages/Post1";
import './BlogNav.css';


const BlogNav = () => {
    return (
        <Navbar expand="lg" className="navbar" sticky='top' style={{backgroundColor:"blue",padding:"20px"}}><img className="navbar_image"
        src='https://1000logos.net/wp-content/uploads/2020/08/Blogger-Logo-2010.png'
         height='30'
           alt=''
          loading='lazy'
         />
        <Container>
            <Navbar.Brand className='brand' href="/home" style={{color:"orangered", marginLeft:"10px",fontWeight:"bold"}}>Blog using react</Navbar.Brand>
          <Navbar.Toggle className='toggle' aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='collapse'>
                    <Nav className="mx-auto">
                    <Nav.Link href="/home" style={{color:"white"}}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="/aboutjava" style={{color:"white"}}>
                            JavaScript
                        </Nav.Link>
                        <Nav.Link href="/aboutdata" style={{color:"white"}}>
                            DataStructure
                        </Nav.Link>
                        <Nav.Link href="/aboutalgorithm" style={{color:"white"}}>
                            Algorithm
                        </Nav.Link>
                        <Nav.Link href="/aboutcomputernetwork" style={{color:"white"}}>
                            ComputerNetwork
                        </Nav.Link>
                    </Nav>
                 
                    <Form className="navbar_form">
                        <FormControl style={{position:"sticky"}}  type="text" placeholder="Search.."/>
                    </Form>
                </Navbar.Collapse>
                
                </Container>
                </Navbar>
                
        
    )
}

export default BlogNav;