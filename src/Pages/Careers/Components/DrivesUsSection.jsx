// import React, { useState } from 'react'
// import Life1 from '../../../assets/life1.png'
// import Life2 from '../../../assets/life2.png'
// import Life3 from '../../../assets/life3.png'
// import Life4 from '../../../assets/life1.png'

// function DrivesUsSection() {
//   const driveUs = [
//     {
//       id: "1",
//       title: "Curiosity",
//       discription:
//         "We believe curiosity fuels innovation. It’s about asking better questions, exploring possibilities, and constantly pushing boundaries to discover new ways of creating impact.",
//       image: Life1,
//     },
//     {
//       id: "2",
//       title: "Collaboration",
//       discription:
//         "Together, we’re stronger. Collaboration isn’t just teamwork — it’s about bringing diverse minds together to achieve shared goals with trust and respect.",
//       image: Life2,
//     },
//     {
//       id: "3",
//       title: "Impact",
//       discription:
//         "Every action counts. We’re driven to make a tangible difference — for our clients, our communities, and each other — in everything we do.",
//       image: Life3,
//     },
//     {
//       id: "4",
//       title: "Integrity",
//       discription:
//         "Integrity is the foundation of our work. We uphold the highest standards of honesty, transparency, and accountability — always doing what’s right.",
//       image: Life4,
//     },
//   ]

//   const [activeId, setActiveId] = useState("1")

//   return (
//     <section className="w-full bg-backgroundPrimary py-16 px-6 sm:px-12 lg:px-24">
//       {/* Section Heading */}
//       <div className=" mb-12">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-7xl">
//           What Drives Us
//         </h1>
//       </div>

    
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
        
//         {/* Left: Accordion */}
//         <div className="w-full md:w-1/2 space-y-4">
//           {driveUs.map((item) => {
//             const isActive = activeId === item.id
//             return (
//               <div
//                 key={item.id}
//                 className="border border-white/10 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm transition-all duration-300"
//               >
//                 <button
//                   className="w-full flex justify-between items-center px-5 py-4 text-left text-white font-semibold text-lg focus:outline-none"
//                   onClick={() => setActiveId(item.id)}
//                 >
//                   {item.title}
//                   <span
//                     className={`text-buttonBackground text-2xl font-light transform transition-transform duration-300 ${
//                       isActive ? 'rotate-0' : ''
//                     }`}
//                   >
//                     {isActive ? '−' : '+'}
//                   </span>
//                 </button>

//                 {isActive && (
//                   <div className="px-5 pb-5 text-white/80 text-sm sm:text-base leading-relaxed transition-all duration-300">
//                     {item.discription}
//                   </div>
//                 )}
//               </div>
//             )
//           })}
//         </div>

//         {/* Right: Image */}
//         <div className="w-full md:w-1/2 flex justify-center md:justify-end">
//           <img
//             src={driveUs.find((item) => item.id === activeId)?.image}
//             alt={driveUs.find((item) => item.id === activeId)?.title}
//             className="w-full max-w-md h-96 object-cover rounded-lg transition-all duration-500 ease-in-out"
//             loading="lazy"
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default DrivesUsSection

import React, { useState } from 'react'
import Life1 from '../../../assets/life1.png'
import Life2 from '../../../assets/life2.png'
import Life3 from '../../../assets/life3.png'
import Life4 from '../../../assets/life1.png'

function DrivesUsSection() {
  const driveUs = [
    {
      id: "1",
      title: "Curiosity",
      discription:
        "We believe curiosity fuels innovation. It’s about asking better questions, exploring possibilities, and constantly pushing boundaries to discover new ways of creating impact.",
      image: Life1,
    },
    {
      id: "2",
      title: "Collaboration",
      discription:
        "Together, we’re stronger. Collaboration isn’t just teamwork — it’s about bringing diverse minds together to achieve shared goals with trust and respect.",
      image: Life2,
    },
    {
      id: "3",
      title: "Impact",
      discription:
        "Every action counts. We’re driven to make a tangible difference — for our clients, our communities, and each other — in everything we do.",
      image: Life3,
    },
    {
      id: "4",
      title: "Integrity",
      discription:
        "Integrity is the foundation of our work. We uphold the highest standards of honesty, transparency, and accountability — always doing what’s right.",
      image: Life4,
    },
  ]

  const [activeId, setActiveId] = useState("1")

  return (
    <section className="w-full bg-backgroundPrimary py-16 px-6 sm:px-12 lg:px-24">
      {/* ✅ Max-width container for consistent layout */}
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white">
            What Drives Us
          </h1>
        </div>

        {/* Content (Accordion + Image) */}
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Left: Accordion */}
          <div className="w-full md:w-1/2 space-y-4">
            {driveUs.map((item) => {
              const isActive = activeId === item.id
              return (
                <div
                  key={item.id}
                  className="border border-white/10 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm transition-all duration-300"
                >
                  <button
                    className="w-full flex justify-between items-center px-5 py-4 text-left text-white font-medium text-2xl focus:outline-none"
                    onClick={() => setActiveId(item.id)}
                  >
                    {item.title}
                    <span
                      className={`text-buttonBackground text-2xl font-light transform transition-transform duration-300 ${
                        isActive ? 'rotate-0' : ''
                      }`}
                    >
                      {isActive ? '−' : '+'}
                    </span>
                  </button>

                  {isActive && (
                    <div className="px-5 pb-5 text-white/80 text-sm sm:text-base leading-relaxed transition-all duration-300">
                      {item.discription}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={driveUs.find((item) => item.id === activeId)?.image}
              alt={driveUs.find((item) => item.id === activeId)?.title}
              className="w-full max-w-md h-96 object-cover rounded-lg transition-all duration-500 ease-in-out"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DrivesUsSection


