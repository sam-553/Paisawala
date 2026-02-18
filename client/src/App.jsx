import React from 'react'
import Navbar from './Component/Navbar'
import Loan from './Pages/Loan'
import { Route, Routes } from 'react-router-dom'
import Tools from './Pages/Tools'
import Home from './Pages/Home'
import Footer from './Component/Footer'
import PersonalLoan from './Pages/PersonalLoan'
import DebtConsolidation from './Pages/DebConsolidation'
import Overdraft from './Pages/OverDraft'
import ShortTermLoan from './Pages/ShortTermLoan'
import EmiCalculator from './Pages/EmiCalculator'

import Blog from './Pages/Blog'
import Card from './Pages/Cards'
import SignIn from './Pages/Signin'
import SignUp from './Pages/Signup'
import SideButton from './Component/SideButton'
import CreditScoreForm from './Pages/CreditScoreForm'
import IFSCSearch from './Pages/IfscSearch'



const App = () => {
  return (
    <>
      <Navbar />
      <SideButton/>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/loans" element={<Loan />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/personalloan" element={<PersonalLoan />} />
        <Route path="/debconsolidation" element={<DebtConsolidation />} />
        <Route path="/overdraft" element={<Overdraft />} />
        <Route path="/shorttermloan" element={<ShortTermLoan />} />
        <Route path="/emicalculator" element={<EmiCalculator />} />
        
        <Route path="/ifscsearch" element={<IFSCSearch/>} />
        <Route path="/blog" element={<Blog />} />
        
        <Route path="/card" element={<Card />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/creaditscoreform" element={< CreditScoreForm />} />
        
        

      </Routes>
      <Footer/>
    </>
  )
}

export default App