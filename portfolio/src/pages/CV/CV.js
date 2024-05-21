import React, { useEffect } from 'react';
import myCV from '../../files/Prathamesh.pdf';

const CV = () => {


  return (
    <div style={{ textAlign: 'center', padding: '0', margin: '0', boxSizing: 'border-box', height: '100vh', overflow: 'hidden' }}>
      <iframe
      
        src={myCV}
        style={{ width: '100%', height: '100vh', border: 'none' }}
        title="CV"
      ></iframe>
      <br />
      <a target='_blank' href={myCV} download="CV.pdf" style={{ marginTop: '20px', display: 'inline-block', padding: '10px 20px', backgroundColor: '#ffcc00', color: '#000', textDecoration: 'none', borderRadius: '5px' }}>
        Download CV
      </a>
    </div>
  );
};

export default CV;
