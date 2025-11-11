import React from 'react'
import Verticals from './Components/Verticals'
import GstHeroSection from './Components/GstHeroSection'
import TrustedBrands from '../../Pages/Home/Component/TrustedBrands'
import VerticalsAndChallenges from './Components/VerticalsAndChallenges'
import ThreeStepApproach from './Components/ThreeStepApproach'
import FAQ from '../../Components/Common/FaqSection'
import CtaBanner from '../../Pages/Home/Component/CtaBanner'
import Resources from '../../Pages/Home/Component/Resources'
import Testimonial from '../../Components/Common/Testimonials'
import Features from './Components/Features'
import ExperienceStats from './Components/ExperienceStats'
import ThreeStepApproach1 from './Components/ThreeStepApproach1'
import OurMethodology from './Components/OurMethodology'
import GstServices from './Components/GstServices'
function Main() {
  const threeSteps = [
    {
      title: "Step 1 Title",
      description: "Unlike traditional GST service providers who focus solely on compliance, our approach transforms GST from a burden into a strategic advantage for your business.",
    },
    {
      title: "Step 1 Title",
      description: "Unlike traditional GST service providers who focus solely on compliance, our approach transforms GST from a burden into a strategic advantage for your business.",
    },
    {
      title: "Step 1 Title",
      description: "Unlike traditional GST service providers who focus solely on compliance, our approach transforms GST from a burden into a strategic advantage for your business.",
    },
  ];

  return (
    <>
    <GstHeroSection/>
    <TrustedBrands/>
    <VerticalsAndChallenges />
    <ExperienceStats/>
    <GstServices/>
    <OurMethodology/>
    <ThreeStepApproach1/>
    <Verticals/>
    <Features/>

    {/* Image Left */}
    <ThreeStepApproach steps={threeSteps} imageRight={false} />
    {/* Image Right */}
    <ThreeStepApproach steps={threeSteps} imageRight={true} />
    <Testimonial />
    <Resources/>
    <FAQ/>
    <CtaBanner/>
  
    </>
  )
}

export default Main