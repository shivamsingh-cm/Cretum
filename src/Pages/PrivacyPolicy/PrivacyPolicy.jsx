// const PrivacyPolicy = () => {
//   const sections = [
//     {
//       number: "1",
//       title: "Definitions",
//       points: [
//         {
//           heading: "1.1 Owner, Us, We:",
//           text: "The Owner, as the creator and operator of this Platform, makes the Platform and certain Services on it available to users. Owner, Us, We, Our, Ours and other first-person pronouns will refer to the Owner, as well as the platform, all employees and affiliates of the Owner.",
//         },
//         {
//           heading: "1.2 You, the User:",
//           text: "As the user of the Platform, you will be referred to throughout these Terms & Conditions with second-person pronouns such as You, Your, Yours, or as User. For the purpose of these Terms & Conditions, the term “User” or “You” shall mean any natural or legal person, who is accessing the Platform. The term “Your” shall be construed accordingly.",
//         },
//         {
//           heading: "1.3 Parties:",
//           text: "Collectively, the parties to these Terms and Conditions (the Owner and You) will be referred to as Parties.",
//         },
//       ],
//     },
//     {
//       number: "2",
//       title: "ASSENT AND ACCEPTANCE",
//       points: [
//         {
//           heading: "2.1 By Using the Platform:",
//           text: "By using the Platform, You warrant that You have read and reviewed these Terms & Conditions and that you agree to be bound by it. If You do not agree to be bound by these Terms & Conditions, please leave the Platform immediately. We only agree to provide accessibility and use of this Platform and Services to You, if You assent to these Terms & Conditions. Furthermore, based on the Services obtained by You, additional terms and conditions (i.e Terms of Service) with respect to the specific service shall apply, which shall be deemed to be the agreement between You and Us.",
//         },
//       ],
//     },
//     {
//       number: "3",
//       title: "ABOUT THIS SITE",
//       points: [
//         {
//           heading: "3.1 Online Platform:",
//           text: "This is an online Platform which carries out fundraising. The use of this Platform and its services is not regulated under any law. We reserve the right to refuse the Service at our sole discretion to anyone, for any reason and at any time. You assume all risks associated with dealing with other users with whom you come in contact through this Platform. You agree to use this Platform for lawful purposes without infringing the rights or restricting the use of this Platform by any third-party.",
//         },
//       ],
//     },
//     {
//       number: "4",
//       title: "ACCEPTABLE USE",
//       points: [
//         {
//           heading: "4.1",
//           text: "You agree to not use the Platform or Services for any unlawful purpose or in a way that could damage the Platform, Services and general business of the Owner.",
//         },
//       ],
//     },
//   ];

//   return (
//     <section className="min-h-screen bg-backgroundPrimary text-white px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20">
//       {/* Header */}
//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
//           Privacy Policy
//         </h1>
//         <p className="text-white/90 leading-relaxed mb-6 text-justify">
//           The Agreement: The use of this platform and services on this platform
//           provided by Auctic Solutions Private Limited (herein referred to as
//           “Owner”) are subject to the following Terms and Conditions
//           (hereinafter “Terms & Conditions”), all parts and subparts of which
//           are specifically incorporated by reference here together with the
//           Privacy Policy and Disclaimer. Following are the Terms & Conditions
//           governing your use of www.sateeq.com (“the Platform”), all pages on
//           the Platform and any services provided by or on its platform
//           (“Services”).
//         </p>
//         <p className="text-white/90 leading-relaxed text-justify">
//           By accessing either directly or through a hyperlink, the Platform and
//           or purchasing from us, you engage in our “Service” and agree to be
//           bound by the Terms & Conditions including those additional terms &
//           conditions and policies referenced herein and or available by
//           hyperlink. The Terms & Conditions apply to all users of the site,
//           including without limitation to browsers, third-parties and
//           contributors of content. You acknowledge and agree that the Platform
//           may use your personal information in the manner described in our
//           Privacy Policy which sets forth how information collected about you is
//           collected, used and stored.
//         </p>
//       </div>

//       {/* Section Cards */}
//       {sections.map((section) => (
//         <div
//           key={section.number}
//           className="max-w-5xl mx-auto mt-10 bg-[#221736] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10"
//         >
//           <div className="flex flex-col sm:flex-row sm:items-start gap-4">
//             <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-buttonBackground text-white rounded-full font-semibold shadow-md">
//               {section.number}
//             </div>

//             <div className="space-y-6 text-gray-300">
//               <h2 className="text-xl md:text-2xl font-semibold text-white">
//                 {section.title}
//               </h2>

//               {section.points.map((point, index) => (
//                 <div key={index}>
//                   {point.heading && (
//                     <p className="font-medium text-white mb-1">
//                       {point.heading}
//                     </p>
//                   )}
//                   <p className="leading-relaxed">{point.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default PrivacyPolicy;

const PrivacyPolicy = () => {
  const sections = [
    {
      number: "1",
      title: "Definitions",
      points: [
        {
          heading: "1.1 Owner, Us, We:",
          text: "The Owner, as the creator and operator of this Platform, makes the Platform and certain Services on it available to users. Owner, Us, We, Our, Ours and other first-person pronouns will refer to the Owner, as well as the platform, all employees and affiliates of the Owner.",
        },
        {
          heading: "1.2 You, the User:",
          text: 'As the user of the Platform, you will be referred to throughout these Terms & Conditions with second-person pronouns such as You, Your, Yours, or as User. For the purpose of these Terms & Conditions, the term "User" or "You" shall mean any natural or legal person, who is accessing the Platform. The term "Your" shall be construed accordingly.',
        },
        {
          heading: "1.3 Parties:",
          text: "Collectively, the parties to these Terms and Conditions (the Owner and You) will be referred to as Parties.",
        },
      ],
    },
    {
      number: "2",
      title: "ASSENT AND ACCEPTANCE",
      points: [
        {
          heading: "2.1 By Using the Platform:",
          text: "By using the Platform, You warrant that You have read and reviewed these Terms & Conditions and that you agree to be bound by it. If You do not agree to be bound by these Terms & Conditions, please leave the Platform immediately. We only agree to provide accessibility and use of this Platform and Services to You, if You assent to these Terms & Conditions. Furthermore, based on the Services obtained by You, additional terms and conditions (i.e Terms of Service) with respect to the specific service shall apply, which shall be deemed to be the agreement between You and Us.",
        },
      ],
    },
    {
      number: "3",
      title: "ABOUT THIS SITE",
      points: [
        {
          heading: "3.1 Online Platform:",
          text: "This is an online Platform which carries out fundraising. The use of this Platform and its services is not regulated under any law. We reserve the right to refuse the Service at our sole discretion to anyone, for any reason and at any time. You assume all risks associated with dealing with other users with whom you come in contact through this Platform. You agree to use this Platform for lawful purposes without infringing the rights or restricting the use of this Platform by any third-party.",
        },
      ],
    },
    {
      number: "4",
      title: "ACCEPTABLE USE",
      points: [
        {
          heading: "4.1",
          text: "You agree to not use the Platform or Services for any unlawful purpose or in a way that could damage the Platform, Services and general business of the Owner.",
        },
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-white text-gray-800 px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-gray-800">
          Privacy Policy
        </h1>
        <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-justify text-sm sm:text-base">
          The Agreement: The use of this platform and services on this platform
          provided by Auctic Solutions Private Limited (herein referred to as
          \"Owner\") are subject to the following Terms and Conditions
          (hereinafter \"Terms & Conditions\"), all parts and subparts of which
          are specifically incorporated by reference here together with the
          Privacy Policy and Disclaimer. Following are the Terms & Conditions
          governing your use of www.sateeq.com (\"the Platform\"), all pages on
          the Platform and any services provided by or on its platform
          (\"Services\").
        </p>
        <p className="text-gray-600 leading-relaxed text-justify text-sm sm:text-base">
          By accessing either directly or through a hyperlink, the Platform and
          or purchasing from us, you engage in our \"Service\" and agree to be
          bound by the Terms & Conditions including those additional terms &
          conditions and policies referenced herein and or available by
          hyperlink. The Terms & Conditions apply to all users of the site,
          including without limitation to browsers, third-parties and
          contributors of content. You acknowledge and agree that the Platform
          may use your personal information in the manner described in our
          Privacy Policy which sets forth how information collected about you is
          collected, used and stored.
        </p>
      </div>

      {/* Section Cards */}
      {sections.map((section) => (
        <div
          key={section.number}
          className="max-w-5xl mx-auto mt-6 sm:mt-8 md:mt-10 bg-gray-50 border border-[#A164FF] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#A164FF] text-white rounded-full font-semibold shadow-md text-sm sm:text-base">
              {section.number}
            </div>

            <div className="space-y-4 sm:space-y-6 text-gray-600">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
                {section.title}
              </h2>

              {section.points.map((point, index) => (
                <div key={index} className="text-sm sm:text-base">
                  {point.heading && (
                    <p className="font-semibold text-gray-800 mb-1 sm:mb-2">
                      {point.heading}
                    </p>
                  )}
                  <p className="leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PrivacyPolicy;
