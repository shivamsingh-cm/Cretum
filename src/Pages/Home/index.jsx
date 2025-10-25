import React from 'react'
import Hero from './Component/Hero'
import TrustedBrands from './Component/TrustedBrands'
import TrustedAdvisors from './Component/TrustedAdvisors'
import Istockphoto from './Component/Istockphoto'
import ExperienceStats from './Component/ExperienceStats'
import Testimonials from './Component/Testimonials'
import Resources from './Component/Resources'
import FAQSection from './Component/FaqSection'
import CtaBanner from './Component/CtaBanner'
import Services from './Component/Services'

function index() {
  return (
    <>
        <Hero />
        <TrustedBrands />
        <TrustedAdvisors />
        <Istockphoto />
        <ExperienceStats />
        <Services />
        <Testimonials />
        <Resources />
        <FAQSection />
        <CtaBanner />
    </>
  )
}

export default index
