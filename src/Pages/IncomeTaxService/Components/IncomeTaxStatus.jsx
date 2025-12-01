// import IncomeTaxBackImage1 from "../../../assets/incometaxs1.png";

// function IncomeTaxStatus() {
//   // Reusable container component for consistent max-width
//   const Container = ({ children, className = "" }) => (
//     <div className={`w-full max-w-7xl mx-auto ${className}`}>{children}</div>
//   );

//   // Reusable section component
//   const TaxSection = ({
//     title,
//     description,
//     cards,
//     buttonText,
//     backgroundColor = "bg-backgroundPrimary",
//   }) => (
//     <section
//       className={`w-full ${backgroundColor} text-white py-12 px-4 md:px-12 lg:px-20`}
//     >
//       <Container>
//         <div className="text-center mb-10">
//           <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
//           <p className="mt-3 text-base md:text-lg max-w-2xl mx-auto text-gray-300">
//             {description}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
//           {cards.map((card, index) => (
//             <TaxCard
//               key={index}
//               title={card.title}
//               imageSrc={card.imageSrc}
//               alt={card.alt}
//             />
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <button className="bg-purple-500 hover:bg-purple-700 text-white py-3 px-8 rounded-full font-semibold text-lg transition-colors duration-200">
//             {buttonText}
//           </button>
//         </div>
//       </Container>
//     </section>
//   );

//   // Reusable card component
//   const TaxCard = ({ title, imageSrc, alt }) => (
//     <div className="text-center">
//       <h3 className="text-xl font-semibold mb-4">{title}</h3>
//       <div className="bg-white rounded-xl shadow-lg p-5">
//         <img
//           src={imageSrc}
//           loading="lazy"
//           className="w-full h-64 object-contain rounded-lg"
//           alt={alt}
//         />
//       </div>
//     </div>
//   );

//   // New top section component
//   const TopSection = () => (
//     <section className="w-full bg-backgroundPrimary text-white py-16 px-4 md:px-12 lg:px-20">
//       <Container>
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-5xl font-bold leading-tight">
//             Know Your Real Income Tax Status in{" "}
//             <span className="text-purple-400">60 Seconds</span>
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           {/* Left side - Content */}
//           <div className="space-y-6">
//             <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
//               <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
//                 A quick scan highlights everything that matters:{" "}
//                 <span className="text-purple-300 font-semibold">
//                   pending filings
//                 </span>
//                 ,{" "}
//                 <span className="text-purple-300 font-semibold">
//                   refund delays
//                 </span>
//                 ,{" "}
//                 <span className="text-purple-300 font-semibold">
//                   mismatch risks
//                 </span>
//                 , and{" "}
//                 <span className="text-purple-300 font-semibold">
//                   potential savings
//                 </span>
//                 .
//               </p>
//             </div>

//             <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30">
//               <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
//                 If you want instant clarity on your tax standing, this is the
//                 simplest way to get it.
//               </p>
//             </div>

//             {/* CTA Button */}
//             <div className="pt-4">
//               <button className="bg-purple-500 hover:bg-purple-600 text-white py-4 px-8 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
//                 Check Free Income Tax Status Now
//               </button>
//             </div>
//           </div>

//           {/* Right side - Image */}
//           <div className="flex justify-center lg:justify-start">
//             <div className="relative">
//               <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-1 shadow-2xl">
//                 <div className="bg-white rounded-xl p-6">
//                   <img
//                     src={IncomeTaxBackImage1}
//                     loading="lazy"
//                     className="w-full max-w-md h-auto rounded-lg"
//                     alt="Income Tax Status Dashboard"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );

//   // Data for sections
//   const section1Data = {
//     title: "Mastering Income Tax Series",
//     description:
//       "Empowering individuals & businesses with comprehensive guides, case studies, and tools for seamless tax compliance and planning.",
//     buttonText: "Start Your Tax Journey Today",
//     cards: [
//       {
//         title: "Unified Financial View",
//         imageSrc: IncomeTaxBackImage1,
//         alt: "Unified Financial View",
//       },
//       {
//         title: "E-Filing & Compliance",
//         imageSrc: IncomeTaxBackImage1,
//         alt: "E-Filing & Compliance",
//       },
//       {
//         title: "Deductions & Credits",
//         imageSrc: IncomeTaxBackImage1,
//         alt: "Deductions & Credits",
//       },
//       {
//         title: "Audit Support & Assistance",
//         imageSrc: IncomeTaxBackImage1,
//         alt: "Audit Support & Assistance",
//       },
//     ],
//   };

//   const section2Data = {
//     title: "Expert-Led Income Tax Management System",
//     description:
//       "A Structured, tech-enabled way to handle filing, audits, assessments and tax planning-all in one place.",
//     buttonText: "Get Your Income Tax Report",
//     backgroundColor: "bg-backgroundPrimary",
//     cards: [
//       {
//         title: "Tax Insights",
//         imageSrc: IncomeTaxBackImage1,
//         alt: "Tax Insights",
//       },
//       {
//         title: "E-Filing & Compliance",
//         imageSrc: IncomeTaxBackImage1,
//         alt: "E-Filing & Compliance",
//       },
//       {
//         title: "Automated Alerts",
//         imageSrc: IncomeTaxBackImage1,
//         alt: "Automated Alerts",
//       },
//       {
//         title: "Automated Compliance",
//         imageSrc: IncomeTaxBackImage1,
//         alt: "Automated Compliance",
//       },
//     ],
//   };

//   return (
//     <>
//       <TaxSection {...section1Data} />
//       <TaxSection {...section2Data} />
//       <TopSection />
//     </>
//   );
// }

// export default IncomeTaxStatus;

import IncomeTaxBackImage1 from "../../../assets/incometaxs1.png";

function IncomeTaxStatus({
  topSectionData,
  section1Data,
  section2Data,
}) {
  // Max-width container
  const Container = ({ children, className = "" }) => (
    <div className={`w-full max-w-7xl mx-auto ${className}`}>{children}</div>
  );

  // Reusable section
  const TaxSection = ({
    title,
    description,
    cards,
    buttonText,
    backgroundColor = "bg-backgroundPrimary",
  }) => (
    <section
      className={`w-full ${backgroundColor} ${
        backgroundColor.includes("white") ? "text-black" : "text-white"
      } py-10 md:py-14 px-4 sm:px-6 md:px-10 lg:px-20`}
    >
      <Container>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {title}
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto opacity-80">
            {description}
          </p>
        </div>

        {/* FIXED RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10">
          {cards?.map((card, index) => (
            <TaxCard
              key={index}
              title={card.title}
              imageSrc={card.imageSrc}
              alt={card.alt}
            />
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6  rounded-full font-semibold text-base sm:text-lg transition-colors duration-200">
            {buttonText}
          </button>
        </div>
      </Container>
    </section>
  );

  // Card Component
  const TaxCard = ({ title, imageSrc, alt }) => (
    <div className="text-center">
      <h3 className="text-lg sm:text-xl font-semibold mb-3">{title}</h3>
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-5 border border-slate-400">
        <img
          src={imageSrc}
          loading="lazy"
          className="w-full h-52 sm:h-64 object-contain rounded-lg"
          alt={alt}
        />
      </div>
    </div>
  );

  // Top Section
  const TopSection = ({ title, highlightText, points, image, buttonText }) => (
    <section className="w-full bg-backgroundPrimary text-white py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {title} <span className="text-purple-400">{highlightText}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT CONTENT */}
          <div className="space-y-5 md:space-y-6">
            {points?.map((p, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-5  border border-white/10"
              >
                <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed">
                  {p}
                </p>
              </div>
            ))}

            <div className="pt-2 sm:pt-4">
              <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-7  rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                {buttonText}
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-1 shadow-xl">
                <div className="bg-white rounded-xl p-4 sm:p-6">
                  <img
                    src={image}
                    loading="lazy"
                    className="w-full h-auto rounded-lg"
                    alt="Income Tax Dashboard"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );

  return (
    <>
      <TaxSection {...section1Data} />
      <TaxSection {...section2Data} backgroundColor="bg-white" />
      <TopSection {...topSectionData} />
    </>
  );
}

export default IncomeTaxStatus;
