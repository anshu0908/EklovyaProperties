import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Properties from './Components/Properties'
import Contact from './Components/contact'
import Footer from './Components/Footer'
import FAQ from './Components/FAQ'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Properties/>
      <AboutUs/>
      <FAQ/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App