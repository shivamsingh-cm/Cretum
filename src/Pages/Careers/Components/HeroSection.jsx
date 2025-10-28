// import React from 'react'
// import BackgroundImage from '../../../assets/CarrerHero.png'

// function HeroSection() {
//   return (
//     <section className="relative w-full min-h-screen bg-backgroundPrimary">
//       {/* Background Image */}
//       <img
//         src={BackgroundImage}
//         alt="Career Hero"
//         className="absolute inset-0 w-full h-full object-cover"
//         loading="lazy"
//       />


//       {/* Text Content */}
//       <div className=" relative z-10 flex flex-col items-center mt-14 md:mt-16 text-center h-full px-4 max-w-3xl mx-auto">
//         <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4">
//           Together, We Build What’s Next
//         </h1>
//         <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
//           At Cretum Advisory, we don’t just advise — we help shape futures. Businesses come 
//           to us with ambition. We bring the strategy, creativity, and courage to make it real.
//             That story begins with our people.
        

          
//         </p>
//       </div>
//     </section>
//   )
// }

// export default HeroSection

import React from 'react'
import BackgroundImage from '../../../assets/CarrerHero.webp'

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-backgroundPrimary overflow-hidden">
      <img
        src={BackgroundImage}
        alt="Career Hero"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />


      <div className="relative z-10 flex flex-col items-center justify-start pt-20 sm:pt-24 md:pt-28 lg:pt-28 px-4 max-w-7xl mx-auto text-center ">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 whitespace-normal">
          Together, We Build What’s Next
        </h1>
        <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-prose">
          At Cretum Advisory, we don’t just advise — we help shape futures. Businesses come 
          to us with ambition. We bring the strategy, creativity, and courage to make it real.
          That story begins with our people.
        </p>
      </div>
    </section>
  )
}

export default HeroSection

