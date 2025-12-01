// const BenefitsSection = ({ onContactClick }) => {
//   const benefits = [
//     {
//       icon: "💼",
//       title: "Competitive Salary",
//       description:
//         "We offer competitive compensation packages that reward your skills and experience.",
//     },
//     {
//       icon: "🏠",
//       title: "Remote Flexibility",
//       description:
//         "Work from anywhere with our flexible remote work policies and support.",
//     },
//     {
//       icon: "📚",
//       title: "Learning Budget",
//       description:
//         "Annual budget for conferences, courses, and books to support your growth.",
//     },
//     {
//       icon: "🏥",
//       title: "Health Insurance",
//       description:
//         "Comprehensive health, dental, and vision insurance for you and your family.",
//     },
//     {
//       icon: "🎯",
//       title: "Career Growth",
//       description:
//         "Clear career paths and regular performance reviews to help you advance.",
//     },
//     {
//       icon: "🍕",
//       title: "Team Events",
//       description:
//         "Regular team building activities, offsites, and social events.",
//     },
//   ];

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-backgroundPrimary">
//       <div className="container mx-auto">
//         <div className="text-center mb-16 fade-in-up">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
//             Why Join Cretum Advisory?
//           </h2>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             We believe in taking care of our team members with comprehensive
//             benefits and a supportive work environment.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-up-delay">
//           {benefits?.map((benefit) => (
//             <div
//               key={benefit.title}
//               className="text-center p-8 rounded-xl transition-all duration-300 group hover:shadow-2xl bg-backgroundSecondary hover:scale-105 hover:-translate-y-2"
//             >
//               <div className="text-4xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
//                 {benefit?.icon}
//               </div>
//               <h3 className="text-xl font-bold text-white mb-4 group-hover:text-buttonBackground transition-colors duration-300">
//                 {benefit?.title}
//               </h3>
//               <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
//                 {benefit?.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="text-center mt-16 p-12 rounded-2xl bg-backgroundPrimaryDark fade-in-up-delay-2">
//           <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
//             Ready to Start Your Journey?
//           </h3>
//           <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//             Join Cretum Advisory and be part of a team that values innovation,
//             collaboration, and growth.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               onClick={onContactClick}
//               className="px-8 py-4 rounded-lg font-semibold text-white border-2 border-purple-500 hover:bg-purple-500 transition-all duration-300 hover:scale-105 active:scale-95"
//             >
//               Contact Our Team
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BenefitsSection;

const BenefitsSection = ({ onContactClick }) => {
  const benefits = [
    {
      icon: "💼",
      title: "Competitive Salary",
      description:
        "We offer competitive compensation packages that reward your skills and experience.",
    },
    {
      icon: "🏠",
      title: "Remote Flexibility",
      description:
        "Work from anywhere with our flexible remote work policies and support.",
    },
    {
      icon: "📚",
      title: "Learning Budget",
      description:
        "Annual budget for conferences, courses, and books to support your growth.",
    },
    {
      icon: "🏥",
      title: "Health Insurance",
      description:
        "Comprehensive health, dental, and vision insurance for you and your family.",
    },
    {
      icon: "🎯",
      title: "Career Growth",
      description:
        "Clear career paths and regular performance reviews to help you advance.",
    },
    {
      icon: "🍕",
      title: "Team Events",
      description:
        "Regular team building activities, offsites, and social events.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Join Cretum Advisory?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            We believe in taking care of our team members with comprehensive
            benefits and a supportive work environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits?.map((benefit) => (
            <div
              key={benefit.title}
              className="text-center p-6 sm:p-8 rounded-xl transition-all duration-300 group hover:shadow-xl bg-gray-50 border border-gray-200 hover:scale-105 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                {benefit?.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {benefit?.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
                {benefit?.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16 p-8 sm:p-12 rounded-2xl bg-purple-50 border border-purple-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join Cretum Advisory and be part of a team that values innovation,
            collaboration, and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onContactClick}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              Contact Our Team
            </button>
            <button
              onClick={onContactClick}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
