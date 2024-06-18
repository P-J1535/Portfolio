
import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ContactUs from './pages/ContactUs/ContactUs';
import ContactForm from './pages/ContactForm/ContactForm';
import Resume from './pages/Resume/Resume';
import CV from './pages/CV/CV';
import HomePage from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';

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
        <HomePage />
        <AboutUs />
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

export default App