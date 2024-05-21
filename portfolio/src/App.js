import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Resume from './pages/Resume/Resume';
import CV from './pages/CV/CV';
import NavbarLite from './components/NavbarLite/NavbarLite';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavbarLite /> } />
         
      </Routes>
    </BrowserRouter>
  );
};

export default App;
