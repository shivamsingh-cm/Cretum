// import React from 'react';
// import AboutBackground from '../../../assets/careerbg.png';

// function HeroSection() {
//   return (
//     <section className="w-full bg-backgroundPrimary">
      
//       {/* Text Content */}
//       <div className="flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto py-16 md:py-20">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
//           Simplifying Growth Through
//           <span className="block text-buttonBackground mt-2">
//             Clarity and Compliance
//           </span>
//         </h1>
//         <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl">
//           At Cretum Advisory, we believe that financial and regulatory complexities shouldn’t
//           hold back innovation. Founded in 2017, we’ve spent the last eight years helping
//           startups, SMEs, and large enterprises navigate India’s fast-evolving tax and financial
//           landscape with clarity, accuracy, and confidence.
//         </p>
//       </div>

//       {/* Background Image */}
//       <div className="w-full">
//         <img
//           src={AboutBackground}
//           alt="Background"
//           loading="lazy"
//           className="w-full h-96 object-cover"
//         />
//       </div>
//     </section>
//   );
// }

// export default HeroSection;






import React, { useState, useEffect } from 'react';
import AboutBackground from '../../../assets/careerbg.png';

function HeroSection() {
  const staticText = "Simplifying Growth Through";
  const dynamicText = "Clarity and Compliance";

  const typingSpeed = 100;   // typing speed per character
  const deletingSpeed = 50;  // deleting speed per character
  const pauseDuration = 1800;    // pause before deleting/typing next

  const [staticDisplayed, setStaticDisplayed] = useState("");
  const [dynamicDisplayed, setDynamicDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [staticFinished, setStaticFinished] = useState(false);

  // Typewriter for static text runs only once
  useEffect(() => {
    if (staticDisplayed.length < staticText.length) {
      const timeout = setTimeout(() => {
        setStaticDisplayed(staticText.slice(0, staticDisplayed.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      setStaticFinished(true);
    }
  }, [staticDisplayed, staticText]);

 
  
useEffect(() => {
  if (!staticFinished) return;

  let timeout;

  if (!isDeleting && dynamicDisplayed.length < dynamicText.length) {
    // Typing
    timeout = setTimeout(() => {
      setDynamicDisplayed(dynamicText.slice(0, dynamicDisplayed.length + 1));
    }, typingSpeed);
  } else if (!isDeleting && dynamicDisplayed.length === dynamicText.length) {
    // Pause before deleting
    timeout = setTimeout(() => {
      setIsDeleting(true);
    }, pauseDuration); //  small delay before erase
  } else if (isDeleting && dynamicDisplayed.length > 0) {
    // Deleting
    timeout = setTimeout(() => {
      setDynamicDisplayed(dynamicText.slice(0, dynamicDisplayed.length - 1));
    }, deletingSpeed);
  } else if (isDeleting && dynamicDisplayed.length === 0) {
    // Start typing again
    setIsDeleting(false);
  }

  return () => clearTimeout(timeout);
}, [dynamicDisplayed, isDeleting, staticFinished, dynamicText]);


  return (
    <section className="w-full bg-backgroundPrimary">
      
      {/* Text Content */}
      <div className="flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto py-16 md:py-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span>{staticDisplayed}</span>
          <span className="block text-buttonBackground mt-2">
            {dynamicDisplayed}
            <span className="animate-pulse inline-block w-1 bg-white ml-1 align-middle"></span>
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl">
          At Cretum Advisory, we believe that financial and regulatory complexities shouldn’t
          hold back innovation. Founded in 2017, we’ve spent the last eight years helping
          startups, SMEs, and large enterprises navigate India’s fast-evolving tax and financial
          landscape with clarity, accuracy, and confidence.
        </p>
      </div>

      {/* Background Image */}
      <div className="w-full">
        <img
          src={AboutBackground}
          alt="Background"
          loading="lazy"
          className="w-full h-96 object-cover"
        />
      </div>
    </section>
  );
}

export default HeroSection;









