import React from 'react'
import HeroSection from './Components/HeroSection'
import FAQSection from '../Home/Component/FaqSection'
import CtaBanner from './Components/CtaBanner'
import Resources from '../Home/Component/Resources'
import TrustedBrands from '../Home/Component/TrustedBrands'
import UaeDeskSection from './Components/UaeDeskSection'
function Index() {
  return (
    <>
        <HeroSection />
        <TrustedBrands/>
        <UaeDeskSection/>
        <Resources/>
        <FAQSection />
        <CtaBanner/>
       
    </>
  )
}

export default Index