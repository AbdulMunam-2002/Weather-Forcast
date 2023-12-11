import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import additionalImage from '../Assets/Images/Header1.png';
import Image2 from '../Assets/Img 1.png';
import '../App.css'; // Import the CSS file

export default function Footer() {
  return (
    <footer className="fixed-bottom" id="footerStyle">
      <div>
        <br></br>
        <p style={{color:'white'}}>&copy;2022 — 2023 SKYSYNC ® All rights reserved</p>
      </div>
      <div id="scrolledFooterStyle"></div>
    </footer>
  );
}
