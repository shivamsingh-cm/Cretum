import React from 'react'
import HeroSection from './Components/HeroSection'
import LeadershipSection from './Components/Leaderships'
import LifeSection from './Components/LifeSection'
import CareerBackground from '../../assets/careerbg.webp'
import DrivesUsSection from './Components/DrivesUsSection'
import CtaBanner from '../Careers/Components/CtaBanner'


function Index() {
  return (
    <>
      <HeroSection />
      <LeadershipSection />
      <LifeSection />
      <div>
        <img  
           src={CareerBackground}
           alt='Background Image'
           className='h-96 w-full object-cover'
        />
      </div>

      <DrivesUsSection />
      <CtaBanner />
    </>
  )
}

export default Index 