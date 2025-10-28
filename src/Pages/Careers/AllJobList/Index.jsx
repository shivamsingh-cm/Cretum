import React, { useRef, useState } from 'react';
import HeroSection from './Components/HeroSection';
import AllJobList from './Components/AllJobList';
import BenefitsSection from './Components/BenefitsSection';
import AboutUsSection from './Components/AboutUsSection';
import ContactSection from './Components/ContactSection';

const Index = () => {

  const jobListRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactRef = useRef(null);
  const [showContact, setShowContact] = useState(false);

  const scrollToJobs = () => {
    jobListRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAboutUs = () => {
    aboutUsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    setShowContact(true);
    setTimeout(() => {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-backgroundPrimary">
      <HeroSection 
        onViewJobsClick={scrollToJobs}
        onLearnAboutClick={scrollToAboutUs}
        onContactClick={scrollToContact}
      />
      <div ref={jobListRef}>
        <AllJobList onContactClick={scrollToContact} />
      </div>
      <div ref={aboutUsRef}>
        <AboutUsSection onContactClick={scrollToContact} />
      </div>
      <BenefitsSection onContactClick={scrollToContact} />
      {showContact && (
        <div ref={contactRef}>
          <ContactSection />
        </div>
      )}
    </div>

  );
};

export default Index;