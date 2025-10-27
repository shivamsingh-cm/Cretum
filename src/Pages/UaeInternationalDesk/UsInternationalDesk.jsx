import React from 'react'
import HeroSection from './HeroSectionUs'
import FAQSection from '../Home/Component/FaqSection'
import CtaBanner from './Components/CtaBanner'
import Resources from '../Home/Component/Resources'
import TrustedBrands from '../Home/Component/TrustedBrands'
import UaeDeskSection from './Components/UaeDeskSection'
import HowWeWork from './Components/HowWeWork'
import OurService from './Components/OurService'
function UsInternationalDesk() {
  return (
    <>
        <HeroSection/>
        <TrustedBrands/>
        <UaeDeskSection/>
        <OurService />
        <HowWeWork/>
        <Resources/>
        <FAQSection />
        <CtaBanner/>
    </>
  )
}

export default UsInternationalDesk