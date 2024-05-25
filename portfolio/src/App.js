import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ContactUs from './pages/ContactUs/ContactUs';
import ContactForm from './pages/ContactForm/ContactForm';
import Resume from './pages/Resume/Resume';
import CV from './pages/CV/CV';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigateToCV = () => {
    setCurrentPage('cv');
  };

  return (
    <div>
    
      {currentPage === 'home' ? (
        <>
        <Navbar />
          <ContactForm />
          <ContactUs />
          <Resume onDownloadCV={handleNavigateToCV} />
          <Footer />
        </>
      ) : (
        <CV />
      )}
      
    </div>
  );
};

export default App;
