import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';

export default function Search() {
    const buttonStyle = {
        backgroundColor: '#D9D9D9',
        color: 'black',
        borderRadius: '40px',
      };
      
  return (
    <>
      <div className='bg'>
        <Header />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6' style={{ maxWidth: '400px' }}>
              <input
                type="search"
                className="form-control"
                name="search"
                id="search"
                placeholder="Search for a place"
                required
                style={{ borderRadius: '10px', backgroundColor: '#FFFFFF' }}
              />
            </div>
            <div className='col-lg-2'>
                <Button type="submit" style={buttonStyle}>Get Weather</Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
