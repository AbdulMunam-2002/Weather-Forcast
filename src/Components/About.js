import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import image from '../Assets/Images/Rectangle 95.png';
import image3 from '../Assets/Ellipse 1.png';
import additionalImage from '../Assets/Images/Header1.png'; // Replace with the actual path to your image
import bgimage from '../Assets/Img 1.png'; // Add the path to your Image1
import Header from './Header';
import Footer from './Footer';

const imageUrl = '../Assets/Img 1.png';

function Aboutus() {
  const componentStyle = {
    backgroundImage: `url(${bgimage})`, // Updated with Image1
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    minHeight: '100vh',
    height: '100vh',
    position: 'relative',
  };


  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  };

  const image3Style = {
    width: '50%',
    height: 'auto',
    objectFit: 'cover',
  };

  const overlayTextStyle = {
    position: 'absolute',
    top: '50%',
    left: '25%',
    transform: 'translate(-70%, -70%)',
    color: '#fff',
    fontSize: '2em',
    fontWeight: 'bold',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '55%',
    left: '17%',
  };

  const aboutTextStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: '#fff',
    padding: '20px',
    borderRadius: '10px',
    marginTop: '20px',
  };

  return (
    <div style={componentStyle}>
      <Header/>
      <Container className="my-4 text-center" style={{ position: 'relative' }}>
        <img src={image} alt="SKYSYNC" style={imageStyle} />
        <div style={overlayTextStyle}>About SkySync</div>
        <Button variant="success" style={buttonStyle}>
          Talk to us
        </Button>
      </Container>

      <Container>
        <h2 style={{ color: '#E2E3A1' }}>
          <b>About us</b>
        </h2>

        <div>
        <div className="row" style={{ backgroundImage: `url(${additionalImage})`, backgroundSize: 'cover', backgroundPosition: 'center center', minHeight: '300px' }}>
  <div className="col-lg-6 col-sm-12 col-md-6 mt-5">
    <p>
      Dive into a world of weather insights with our News and Blogs section at SKYSYNC. Stay ahead of the forecast with breaking news, expert analysis, and captivating articles. Whether you're a weather enthusiast or just looking to stay informed, explore our curated content for a deeper understanding of meteorological phenomena and stay connected with the latest developments in the atmospheric world.
    </p>
  </div>
  <div className="col-lg-6 col-sm-12 col-md-6">
    <img src={image3} alt="SKYSYNC" style={image3Style} />
  </div>
</div>

          </div>
      </Container>

      <Container>
        <br></br>
        <h2 style={{ color: '#E2E3A1' }}>
          <b>Core Values</b>
        </h2>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <ul>
              <li>
                <h4>Accuracy:</h4> We are dedicated to providing precise and up-to-date weather information to our
                users, fostering trust and reliability.
              </li>
              <li>
                <h4>Accessibility:</h4> We believe in making weather data accessible to everyone. Our platform is
                designed for ease of use, ensuring that users of all backgrounds can benefit from our services.
              </li>
              <li>
                <h4>Innovation:</h4> We continuously explore new technologies and methodologies to enhance our services,
                offering innovative features and solutions to meet the evolving needs of our users.
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Container>
        <br></br>
        <h2 style={{ color: '#E2E3A1' }}>
          <b>Mission</b>
        </h2>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 text-align-center jutify-content-center">
<p>Our mission is to help companies to face the future trends and challenges with confidence, using OpenWeather accurate and precise weather data.</p>
          </div>
        </div>
      </Container>
      <Footer/>

    </div>
  );
}

export default Aboutus;
