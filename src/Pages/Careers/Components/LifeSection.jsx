// import React from 'react'
// import Life1 from '../../../assets/life1.png'
// import Life2 from '../../../assets/life2.png'
// import Life3 from '../../../assets/life3.png'

// function LifeSection() {
//     const life = [
//         {
//             id: "1",
//             title: "Culture of Belonging",
//             discription: "Be yourself, fully.",
//             image: Life1,
//         },
//         {
//             id: "2",
//             title: "Growth Mindset",
//             discription: "Learn, unlearn, and grow every day.",
//             image: Life2,
//         },
//         {
//             id: "3",
//             title: "Balance & Well-being",
//             discription: "Great work begins with well-being.",
//             image: Life3,
//         }
//     ];

//     return (
//         <section className="w-full bg-backgroundPrimary py-16 px-6 sm:px-12 lg:px-24">
//             {/* Section Heading */}
//             <div className=" max-w-7xl mx-auto mb-12">
//                 <h1 className="text-base text-buttonBackground mb-4">Life at Cretum</h1>
//                 <p className="text-white/90 text-sm sm:text-base md:text-lg">
//                     Work here isn’t about clocking in and out — it’s about contributing to something bigger. You’ll join a team that 
//                     celebrates wins together, supports each other through challenges, and enjoys the ride along the way.
//                 </p>
//             </div>

//             {/* Cards Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                 {life.map((item) => (
//                     <div key={item.id} className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg group">
//                         <img 
//                             src={item.image} 
//                             alt={item.title} 
//                             loading='lazy'
//                             className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-md"
//                         />


//                         <div className="absolute inset-0 bg-gradient-to-t from-backgroundPrimary via-backgroundPrimary/60 to-transparent"></div>

//                         <div className="absolute bottom-4 left-4 right-4 text-white">
//                             <h3 className="text-xl sm:text-2xl font-semibold">{item.title}</h3>
//                             <p className="text-sm sm:text-base mt-1 text-white/50">{item.discription}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     )
// }

// export default LifeSection


import React from 'react';
import Life1 from '../../../assets/life1.png';
import Life2 from '../../../assets/life2.png';
import Life3 from '../../../assets/life3.png';

function LifeSection() {
  const life = [
    {
      id: "1",
      title: "Culture of Belonging",
      discription: "Be yourself, fully.",
      image: Life1,
    },
    {
      id: "2",
      title: "Growth Mindset",
      discription: "Learn, unlearn, and grow every day.",
      image: Life2,
    },
    {
      id: "3",
      title: "Balance & Well-being",
      discription: "Great work begins with well-being.",
      image: Life3,
    },
  ];

  return (
    <section className="w-full bg-backgroundPrimary py-16 px-6 sm:px-12 lg:px-24">
      {/* Wrapper with max width */}
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12 text-center sm:text-left">
          <h1 className="text-base text-buttonBackground mb-4 font-medium">
            Life at Cretum
          </h1>
          <p className="text-white/90 text-sm sm:text-lg md:text-2xl max-w-7xl font-medium mx-auto sm:mx-0">
            Work here isn’t about clocking in and out — it’s about contributing
            to something bigger. You’ll join a team that celebrates wins
            together, supports each other through challenges, and enjoys the
            ride along the way.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {life.map((item) => (
            <div
              key={item.id}
              className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-md"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-backgroundPrimary via-backgroundPrimary/60 to-transparent"></div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl sm:text-2xl font-medium">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base font-medium mt-1 text-white/50">
                  {item.discription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LifeSection;

