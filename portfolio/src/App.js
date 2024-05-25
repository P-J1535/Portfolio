import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import CV from './pages/CV/CV'
import ContactForm from './pages/ContactForm/ContactForm'
import ContactUs from './pages/ContactUs/ContactUs'
import Resume from './pages/Resume/Resume'
import HomePage from './pages/HomePage/HomePage'

const App = () => {
  return (
    <div>
    <Navbar />
    <HomePage />
    <ContactUs />
    <ContactForm />
    <Footer />
    </div>
  )
}

export default App