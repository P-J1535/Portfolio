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
        <Route index element={<Resume /> } />
         <Route path='/cv' element={<CV />} />
      </Routes>
       
    </BrowserRouter>
  );
};

export default App;
