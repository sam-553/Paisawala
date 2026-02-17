import React from 'react'
import Hero from '../Component/Hero'
import StatsSection from '../Component/StatsSection'
import TrustSection from '../Component/TrustSection'
import WorkProcess from '../Component/WorkProcess'
import CreditScore from '../Component/CreaditScore'
import Partners from '../Component/Partners'
import Awards from '../Component/Awards'
import Testimonials from '../Component/Testimonials'
import Faq from '../Component/Faq'
import Finance from '../Component/Finance'

const Home = () => {
  return (
    <>
    <Hero/>
    <StatsSection/>
    <TrustSection/>
    <WorkProcess/>
    <CreditScore/>
    <Partners/>
    <Awards/>
    <Testimonials/>
    <Faq/>
    <Finance/>
    </>
  )
}

export default Home