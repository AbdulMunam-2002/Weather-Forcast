import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Image2 from '../Assets/Img 1.png';

export default function Support() {
  return (
    <div className='bg'>
      <Header />

      <div style={{ margin: '50px auto', textAlign: 'center', color: 'white' }}>
        <h4>HOW CAN WE HELP YOU ?</h4>
      </div>
    
      <div style={{ marginTop: '30px', marginBottom: '50px', textAlign: 'center' }}>
        {/* Add a text area here with border radius */}
        <textarea
          placeholder="Type your detailed message here"
          style={{
            width: '700px',
            height: '300px',
            fontSize: '24px',
            borderRadius: '10px', // Set border radius
            padding: '10px', // Optional: Add padding for better aesthetics
          }}
        />
      </div>

      <Footer />
    </div>
  );
}
