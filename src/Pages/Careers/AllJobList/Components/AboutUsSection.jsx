// const AboutUsSection = ({ onContactClick }) => {
//   const values = [
//     {
//       icon: '🎯',
//       title: 'Our Mission',
//       description: 'To empower businesses with strategic advisory services that drive growth, innovation, and sustainable success in a rapidly evolving market landscape.'
//     },
//     {
//       icon: '👁️',
//       title: 'Our Vision',
//       description: 'To be the most trusted advisory partner for organizations seeking transformative growth and competitive advantage in their industries.'
//     },
//     {
//       icon: '⭐',
//       title: 'Our Values',
//       description: 'Integrity, innovation, collaboration, and excellence guide every decision we make and every relationship we build.'
//     }
//   ];

//   const milestones = [
//     { year: '2017', event: 'Cretum Advisory Founded', description: 'Started with a vision to transform business consulting with former Big 4 expertise' },
//     { year: '2019', event: 'Service Expansion', description: 'Launched comprehensive GST, tax, and compliance services' },
//     { year: '2021', event: 'Technology Integration', description: 'Pioneered tech-driven advisory solutions for modern businesses' },
//     { year: '2023', event: '500+ Clients Milestone', description: 'Trusted by over 500 businesses across India' },
//     { year: '2024', event: 'Industry Recognition', description: 'Awarded Top Advisory Firm of the Year' }
//   ];

//   const stats = [
//     { number: '500+', label: 'Businesses Trusted Us', description: 'Serving diverse industries' },
//     { number: '7+', label: 'Years Experience', description: 'Since 2017' },
//     { number: '98%', label: 'Client Satisfaction', description: 'Consistent excellence' },
//     { number: '50+', label: 'Expert Team Members', description: 'Industry specialists' }
//   ];

//   return (
//     <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#10091B' }}>
//       <div className="container mx-auto max-w-7xl">
//         {/* Header */}
//         <div className="text-center mb-12 sm:mb-16">
//           <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 mb-6" style={{ backgroundColor: '#1B122C' }}>
//             <div className="w-2 h-2 rounded-full bg-green-400"></div>
//             <span className="text-sm font-medium text-gray-200">
//               Trusted Since 2017
//             </span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
//             About <span style={{ color: '#A164FF' }}>Cretum Advisory</span>
//           </h2>
//           <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
//             Led by former Big 4 experts, we've been at the forefront of business transformation for 7+ years,
//             helping 500+ organizations navigate complexity and achieve extraordinary results.
//           </p>
//         </div>

//         {/* Stats Section */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
//           {stats.map((stat) => (
//             <div
//               key={stat.label}
//               className="text-center p-4 sm:p-6 rounded-xl border border-white/10 transition-all duration-300 hover:scale-105 group"
//               style={{ backgroundColor: '#1B122C' }}
//             >
//               <div className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
//                 {stat.number}
//               </div>
//               <div className="text-sm sm:text-base font-semibold text-white mb-1">
//                 {stat.label}
//               </div>
//               <div className="text-xs text-gray-400">
//                 {stat.description}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Main Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
//           {/* Left Content - Who We Are */}
//           <div>
//             <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
//               Who We Are
//             </h3>
//             <div className="space-y-4">
//               <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
//                 <strong style={{ color: '#A164FF' }}>Cretum Advisory</strong> is a premier strategic consulting firm founded by former Big 4 professionals.
//                 We partner with business leaders to tackle their most important challenges and capture their greatest opportunities.
//               </p>
//               <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
//                 Our team of experienced consultants, Chartered Accountants, and technology specialists
//                 work collaboratively to deliver innovative solutions that drive measurable impact and sustainable growth.
//               </p>
//               <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
//                 Specializing in <strong>GST, taxation, compliance, and business advisory</strong>, we bring big-firm expertise
//                 with the personalized attention and agility of a specialized practice.
//               </p>
//             </div>

//             {/* Key Services */}
//             <div className="mt-8">
//               <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">Our Expertise</h4>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {[
//                   'GST Advisory & Compliance',
//                   'Tax Planning & Strategy',
//                   'Business Advisory',
//                   'Financial Consulting',
//                   'Technology Integration',
//                   'Compliance Management'
//                 ].map((service) => (
//                   <div key={service} className="flex items-center gap-2 text-gray-300">
//                     <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#A164FF' }}></div>
//                     <span className="text-sm sm:text-base">{service}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Values */}
//           <div>
//             <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
//               What We Believe
//             </h3>
//             <div className="space-y-4 sm:space-y-6">
//               {values.map((value) => (
//                 <div
//                   key={value.title}
//                   className="p-4 sm:p-6 rounded-xl border border-white/10 transition-all duration-300 hover:scale-105 group"
//                   style={{ backgroundColor: '#221736' }}
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
//                       {value.icon}
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
//                         {value.title}
//                       </h4>
//                       <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
//                         {value.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Timeline Section */}
//         <div className="mb-12 sm:mb-16">
//           <div className="text-center mb-8 sm:mb-12">
//             <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
//               Our Journey
//             </h3>
//             <p className="text-gray-300 max-w-2xl mx-auto">
//               From our founding to becoming a trusted partner for 500+ businesses
//             </p>
//           </div>

//           <div className="relative">
//             {/* Timeline line - Hidden on mobile, visible on desktop */}
//             <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full" style={{ backgroundColor: '#A164FF', opacity: 0.3 }}></div>

//             <div className="space-y-8 sm:space-y-12">
//               {milestones.map((milestone, index) => (
//                 <div
//                   key={milestone.year}
//                   className={`relative flex flex-col lg:flex-row items-center ${
//                     index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
//                   }`}
//                 >
//                   {/* Content Card */}
//                   <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} mb-4 lg:mb-0`}>
//                     <div
//                       className="p-4 sm:p-6 rounded-xl border border-white/10 transition-all duration-300 hover:scale-105 group"
//                       style={{ backgroundColor: '#1B122C' }}
//                     >
//                       <div className="text-sm font-semibold mb-2" style={{ color: '#A164FF' }}>
//                         {milestone.year}
//                       </div>
//                       <h4 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
//                         {milestone.event}
//                       </h4>
//                       <p className="text-gray-300 text-sm sm:text-base">
//                         {milestone.description}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Year Indicator - Center on mobile, side on desktop */}
//                   <div className="flex items-center justify-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 w-full lg:w-auto">
//                     <div className="flex items-center gap-4 lg:block">
//                       {/* Dot */}
//                       <div
//                         className="w-3 h-3 rounded-full border-2 z-10 flex-shrink-0"
//                         style={{
//                           backgroundColor: '#A164FF',
//                           borderColor: '#10091B'
//                         }}
//                       ></div>

//                       {/* Year - Show on mobile, hide on desktop (already in card) */}
//                       <div className="lg:hidden text-lg font-bold text-white opacity-80">
//                         {milestone.year}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Spacer for desktop layout */}
//                   <div className="hidden lg:block w-1/2"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center">
//           <div className="max-w-2xl mx-auto">
//             <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
//               Ready to Transform Your Business?
//             </h3>
//             <p className="text-gray-300 mb-6 text-lg">
//               Join 500+ businesses who trust us with their growth and compliance needs.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button
//                 onClick={onContactClick}
//                 className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
//                 style={{
//                   backgroundColor: '#A164FF'
//                 }}
//                 onMouseEnter={(e) => e.target.style.backgroundColor = '#8B3EFF'}
//                 onMouseLeave={(e) => e.target.style.backgroundColor = '#A164FF'}
//               >
//                 <span>Contact Our Experts</span>
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                 </svg>
//               </button>
//               <button
//                 className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white border transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
//                 style={{
//                   borderColor: '#A164FF',
//                   backgroundColor: 'transparent'
//                 }}
//                 onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(161, 100, 255, 0.1)'}
//                 onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
//               >
//                 <span>Learn More</span>
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUsSection;

const AboutUsSection = ({ onContactClick }) => {
  const values = [
    {
      icon: "🎯",
      title: "Our Mission",
      description:
        "To empower businesses with strategic advisory services that drive growth, innovation, and sustainable success in a rapidly evolving market landscape.",
    },
    {
      icon: "👁️",
      title: "Our Vision",
      description:
        "To be the most trusted advisory partner for organizations seeking transformative growth and competitive advantage in their industries.",
    },
    {
      icon: "⭐",
      title: "Our Values",
      description:
        "Integrity, innovation, collaboration, and excellence guide every decision we make and every relationship we build.",
    },
  ];

  const milestones = [
    {
      year: "2017",
      event: "Cretum Advisory Founded",
      description:
        "Started with a vision to transform business consulting with former Big 4 expertise",
    },
    {
      year: "2019",
      event: "Service Expansion",
      description: "Launched comprehensive GST, tax, and compliance services",
    },
    {
      year: "2021",
      event: "Technology Integration",
      description:
        "Pioneered tech-driven advisory solutions for modern businesses",
    },
    {
      year: "2023",
      event: "500+ Clients Milestone",
      description: "Trusted by over 500 businesses across India",
    },
    {
      year: "2024",
      event: "Industry Recognition",
      description: "Awarded Top Advisory Firm of the Year",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Businesses Trusted Us",
      description: "Serving diverse industries",
    },
    { number: "7+", label: "Years Experience", description: "Since 2017" },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Consistent excellence",
    },
    {
      number: "50+",
      label: "Expert Team Members",
      description: "Industry specialists",
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 rounded-full px-4 py-2 border border-purple-200 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-sm font-medium text-gray-700">
              Trusted Since 2017
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-purple-600">Cretum Advisory</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Led by former Big 4 experts, we've been at the forefront of business
            transformation for 7+ years, helping 500+ organizations navigate
            complexity and achieve extraordinary results.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 sm:p-6 rounded-xl border border-gray-200 bg-gray-50 transition-all duration-300 hover:scale-105 group hover:shadow-lg"
            >
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Left Content - Who We Are */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Who We Are
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                <strong className="text-purple-600">Cretum Advisory</strong> is
                a premier strategic consulting firm founded by former Big 4
                professionals. We partner with business leaders to tackle their
                most important challenges and capture their greatest
                opportunities.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Our team of experienced consultants, Chartered Accountants, and
                technology specialists work collaboratively to deliver
                innovative solutions that drive measurable impact and
                sustainable growth.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Specializing in{" "}
                <strong>
                  GST, taxation, compliance, and business advisory
                </strong>
                , we bring big-firm expertise with the personalized attention
                and agility of a specialized practice.
              </p>
            </div>

            {/* Key Services */}
            <div className="mt-8">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                Our Expertise
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "GST Advisory & Compliance",
                  "Tax Planning & Strategy",
                  "Business Advisory",
                  "Financial Consulting",
                  "Technology Integration",
                  "Compliance Management",
                ].map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
                    <span className="text-sm sm:text-base">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              What We Believe
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-4 sm:p-6 rounded-xl border border-gray-200 bg-purple-50 transition-all duration-300 hover:scale-105 group hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Our Journey
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From our founding to becoming a trusted partner for 500+
              businesses
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-purple-300 opacity-60"></div>

            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full lg:w-1/2 ${
                      index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
                    } mb-4 lg:mb-0`}
                  >
                    <div className="p-4 sm:p-6 rounded-xl border border-gray-200 bg-gray-50 transition-all duration-300 hover:scale-105 group hover:shadow-lg">
                      <div className="text-sm font-semibold mb-2 text-purple-600">
                        {milestone.year}
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                        {milestone.event}
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Year Indicator - Center on mobile, side on desktop */}
                  <div className="flex items-center justify-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 w-full lg:w-auto">
                    <div className="flex items-center gap-4 lg:block">
                      {/* Dot */}
                      <div className="w-3 h-3 rounded-full border-2 border-white bg-purple-600 z-10 flex-shrink-0 shadow-md"></div>

                      {/* Year - Show on mobile, hide on desktop (already in card) */}
                      <div className="lg:hidden text-lg font-bold text-gray-700 opacity-80">
                        {milestone.year}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden lg:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Join 500+ businesses who trust us with their growth and compliance
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onContactClick}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700"
              >
                <span>Contact Our Experts</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-purple-600 border border-purple-600 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 hover:bg-purple-50">
                <span>Learn More</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
