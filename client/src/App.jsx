import React from 'react'
import Navbar from './Component/Navbar'

import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Footer from './Component/Footer'


import Blog from './Pages/Blog'

import SideButton from './Component/SideButton'


import AboutUs from './Pages/AboutUs'
import TermsConditions from './Pages/TermConditions'
import PrivacyPolicy from './Pages/PrivacyPolicy'





const App = () => {
  return (
    <>
      <Navbar />
      <SideButton/>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/blog" element={<Blog />} />
        
        <Route path="/aboutus" element={< AboutUs />} />
        <Route path="/termsconditions" element={< TermsConditions />} />
        <Route path="/privacy" element={< PrivacyPolicy />} />
        
        

      </Routes>
      <Footer/>
    </>
  )
}

export default App