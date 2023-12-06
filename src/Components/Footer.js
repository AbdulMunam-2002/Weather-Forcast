import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import additionalImage from '../Assets/Images/Header1.png';
import Image2 from '../Assets/Img 1.png';

export default function Footer()
{
    return(
        <>
        <br></br><br></br>
        <Footer id="header" className="fixed-top">
        <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">© 2022 — 2023 SKYSYNC ® All rights reserved</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Footer>
        </>
    )
}