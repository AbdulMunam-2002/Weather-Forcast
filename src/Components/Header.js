import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import additionalImage from '../Assets/Images/Header1.png';
import Image2 from '../Assets/Img 1.png';

export default function Footer()
{
    const headerStyle = {
        backgroundImage: `url(${additionalImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        minHeight: '75px',
      };
    return(
        <>      
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={headerStyle}>
          <Container>
            
          <Navbar.Brand href="#home">SKYSYNC</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Map</Nav.Link>
                <Nav.Link href="#pricing">Guide</Nav.Link>
                <Nav.Link href="#pricing">News & Blogs</Nav.Link>

                <NavDropdown title="Support" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.2">Help</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Social Media Profiles</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className="me-3">
                <Button variant="success">Contact us</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        </>
    )
}