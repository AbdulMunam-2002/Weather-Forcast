import React from 'react';
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';
export default function Header() {

  const brandStyle = {
    fontSize: '24px', // Adjust the font size of SKYSYNC
    color: 'white', // Set the color to white
    fontWeight: 'bold', // Add bold font weight
  };
  const dropdownStyle = {
    color: 'white', // Set the text color to black or another color of your choice
  };
  const buttonStyle = {
    borderColor: '#CDA45E',
    color: '#CDA45E',
    borderRadius: '50px',
  };
  return (
    <header id="header" className="fixed-top">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home" style={brandStyle}>SKYSYNC</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#Home" style={{ color: 'white' }}>Home</Nav.Link>
              <Nav.Link href="#About" style={{ color: 'white' }}>About</Nav.Link>
              <Nav.Link href="#Map" style={{ color: 'white' }}>Map</Nav.Link>
              <Nav.Link href="#Guide" style={{ color: 'white' }}>Guide</Nav.Link>
              <Nav.Link href="#News & Blogs"style={{ color: 'white' }}>News & Blogs</Nav.Link>
              <NavDropdown title="Support" id="collapsible-nav-dropdown" style={{ color: 'white' }}>
                <NavDropdown.Item href="#action/3.2">Help</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Social Media Profiles</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="me-3">
              <Button variant="outline-warning" style={buttonStyle}>Contact us</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
