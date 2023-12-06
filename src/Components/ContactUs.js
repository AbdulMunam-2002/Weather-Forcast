import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import additionalImage from '../Assets/Images/Header1.png';
import Image2 from '../Assets/Img 1.png';

const Contact = () => {
  const headerStyle = {
    backgroundImage: `url(${additionalImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    minHeight: '75px',
  };
  const componentStyle = {
    backgroundImage: `url(${Image2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    minHeight: '100vh',
    position: 'relative',
  };

  return (
    <>
      <div  style={componentStyle}>
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
        <br />
        <br />
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2><b>CONTACT</b></h2>
            </div>
          </div>
<br>
</br>
<br></br>          <div className="container d-flex justify-content-center" data-aos="fade-up">
            <div className="col-lg-8 mt-5 mt-lg-0">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="8"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <br />
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={headerStyle}>
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">© 2022 — 2023 SKYSYNC ® All rights reserved</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Contact;
