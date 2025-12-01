// import DevanSir from "../../../assets/DevanSir.webp";
// import KapilSir from "../../../assets/KapilSir.webp";
// import JaiTahalani from "../../../assets/JaiTahalani.webp";
// import AanchalMam from "../../../assets/Aanchal.png";
// import Arun from "../../../assets/Arun.png";

// const ProfileCard = ({ person }) => (
//   <div className="bg-backgroundPrimaryDark/40 border border-white/20 rounded-xl overflow-hidden shadow-xl transition duration-300 ease-in-out hover:scale-[1.01] hover:shadow-2xl flex flex-col">
//     {/* Image Section */}
//     <div className="relative w-full h-80 overflow-hidden">
//       <img
//         src={person.imageUrl}
//         alt={`Portrait of ${person.name}`}
//         className="w-full  object-cover rounded-t-xl"
//         loading="lazy"
//         onError={(e) => {
//           e.target.onerror = null;
//           e.target.src =
//             "https://placehold.co/600x400/6b21a8/ffffff?text=Image+Unavailable";
//         }}
//       />
//     </div>

//     {/* Text Section */}
//     <div className="p-6 sm:p-8 flex-grow flex flex-col">
//       <h3 className="text-xl font-medium text-white mb-2">{person?.name}</h3>
//       <p className="text-white/80 text-base font-normal mb-6">
//         {person?.title}
//       </p>

//       <ul className="space-y-2 text-white/80 text-base flex-grow">
//         {person.details?.map((detail, index) => (
//           <li key={index}>
//             <span className="font-bold text-base text-white/80">
//               {detail?.label}:
//             </span>{" "}
//             <span className="font-normal">{detail?.value}</span>
//           </li>
//         ))}

//         {/* For Leaders (structured differently) */}
//         {person.specializations && (
//           <>
//             <li>
//               <span className="font-bold text-base text-white/70">
//                 Specialization:
//               </span>{" "}
//               <span className="font-normal">
//                 {person?.specializations.join(", ")}
//               </span>
//             </li>
//             <li>
//               <span className="font-bold text-base text-white/70">
//                 Experience:
//               </span>{" "}
//               {person?.experience}
//             </li>
//             <li>
//               <span className="font-bold text-base text-white/70">
//                 Key Clients:
//               </span>{" "}
//               {person?.keyClients}
//             </li>
//             <li>
//               <span className="font-bold text-base text-white/70">
//                 Qualification:
//               </span>{" "}
//               {person?.qualification}
//             </li>
//             <li>
//               <span className="font-bold text-base text-white/70">Focus:</span>{" "}
//               {person?.focus}
//             </li>
//           </>
//         )}
//       </ul>
//     </div>
//   </div>
// );

// const OurLeader = () => {
//   const leaders = [
//     {
//       id: 1,
//       name: "Devan Gupta",
//       title: "Managing Partner | Ex-KPMG, PwC",
//       imageUrl: DevanSir,
//       specializations: ["Structuring and Assurance"],
//       experience: "13+ years",
//       keyClients: "NDTV, HCL, Medanta, Ebix",
//       qualification: "FCA, B.Com (Hons)",
//       focus: "Business Structuring and Corporate Advisory",
//     },
//     {
//       id: 2,
//       name: "Kapil Mahani",
//       title: "Indirect Tax Partner | Ex-EY",
//       imageUrl: KapilSir,
//       specializations: ["Indirect Taxation (GST), Customs & Foreign Trade"],
//       experience: "13+ years",
//       keyClients: "Grohe, Lixil, Nivea, Mahindra, Nokia, Huawei",
//       qualification: "FCA, B.Com (Hons)",
//       focus: "GST, Customs & Foreign Trade Policy",
//     },
//   ];

//   const advisors = [
//     {
//       id: 1,
//       name: "Aanchal Malhotra",
//       title: "Strategic Advisor | Ex-Ernst & Young",
//       imageUrl: AanchalMam,
//       details: [
//         {
//           label: "Role",
//           value:
//             "Mergers & Acquisitions, Investment Banking and Tech Experience: Over 13 years",
//         },
//         {
//           label: "Clients Managed",
//           value:
//             "NITI Aayog, Ministry of Afghanistan, Ministry of Liberia, Honda",
//         },
//         { label: "Qualification", value: "ACA, B.Com (Hons.)" },
//       ],
//     },
//     {
//       id: 2,
//       name: "Jai Tahalani",
//       title: "Legal Advisor",
//       imageUrl: JaiTahalani,
//       details: [
//         { label: "Expertise", value: "Legal Matter Advocate" },
//         { label: "Role", value: "Litigation and Legal Opinion" },
//         { label: "Experience", value: "Over 10 years" },
//         { label: "Clients Managed", value: "Ebix, Empaxis, Grohe" },
//         { label: "Qualification", value: "LLB, Bcom (Hons)" },
//       ],
//     },
//     {
//       id: 3,
//       name: "Arun Khetan",
//       title: "Foreign Trade Policy Consultant",
//       imageUrl: Arun,
//       details: [
//         { label: "Role", value: "Foreign Trade Policy consultant" },
//         { label: "Experience", value: "Over 24 years" },
//         { label: "Qualification", value: "B. Com (Hons)" },
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-backgroundPrimary text-white font-sans px-6 sm:px-10 md:px-12 lg:px-16 py-16">
//       <div className="max-w-7xl mx-auto space-y-20">
//         <section>
//           <h1 className="text-xl sm:text-2xl font-medium text-white mb-8">
//             Our Leadership Champions
//           </h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
//             {leaders?.map((leader) => (
//               <ProfileCard key={leader?.id} person={leader} />
//             ))}
//           </div>
//         </section>

//         <section>
//           <h1 className="text-xl sm:text-2xl font-medium text-white mb-8">
//             Our Board of Advisors
//           </h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
//             {advisors?.map((advisor) => (
//               <ProfileCard key={advisor?.id} person={advisor} />
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default OurLeader;

import DevanSir from "../../../assets/DevanSir.webp";
import KapilSir from "../../../assets/KapilSir.webp";
import JaiTahalani from "../../../assets/JaiTahalani.webp";
import AanchalMam from "../../../assets/Aanchal.png";
import Arun from "../../../assets/Arun.png";

const ProfileCard = ({ person }) => (
  <div className="bg-backgroundPrimary/80 border border-white/20 rounded-xl overflow-hidden shadow-xl transition duration-300 ease-in-out hover:scale-[1.01] hover:shadow-2xl flex flex-col">
    {/* Image Section */}
    <div className="relative w-full h-80 overflow-hidden">
      <img
        src={person.imageUrl}
        alt={`Portrait of ${person.name}`}
        className="w-full  object-cover rounded-t-xl"
        loading="lazy"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/600x400/6b21a8/ffffff?text=Image+Unavailable";
        }}
      />
    </div>

    {/* Text Section */}
    <div className="p-6 sm:p-8 flex-grow flex flex-col">
      <h3 className="text-xl font-medium text-white mb-2">{person?.name}</h3>
      <p className="text-white/80 text-base font-normal mb-6">
        {person?.title}
      </p>

      <ul className="space-y-2 text-white/80 text-base flex-grow">
        {person.details?.map((detail, index) => (
          <li key={index}>
            <span className="font-bold text-base text-white/80">
              {detail?.label}:
            </span>{" "}
            <span className="font-normal">{detail?.value}</span>
          </li>
        ))}

        {/* For Leaders (structured differently) */}
        {person.specializations && (
          <>
            <li>
              <span className="font-bold text-base text-white/70">
                Specialization:
              </span>{" "}
              <span className="font-normal">
                {person?.specializations.join(", ")}
              </span>
            </li>
            <li>
              <span className="font-bold text-base text-white/70">
                Experience:
              </span>{" "}
              {person?.experience}
            </li>
            <li>
              <span className="font-bold text-base text-white/70">
                Key Clients:
              </span>{" "}
              {person?.keyClients}
            </li>
            <li>
              <span className="font-bold text-base text-white/70">
                Qualification:
              </span>{" "}
              {person?.qualification}
            </li>
            <li>
              <span className="font-bold text-base text-white/70">Focus:</span>{" "}
              {person?.focus}
            </li>
          </>
        )}
      </ul>
    </div>
  </div>
);

const OurLeader = () => {
  const leaders = [
    {
      id: 1,
      name: "Devan Gupta",
      title: "Managing Partner | Ex-KPMG, PwC",
      imageUrl: DevanSir,
      specializations: ["Structuring and Assurance"],
      experience: "13+ years",
      keyClients: "NDTV, HCL, Medanta, Ebix",
      qualification: "FCA, B.Com (Hons)",
      focus: "Business Structuring and Corporate Advisory",
    },
    {
      id: 2,
      name: "Kapil Mahani",
      title: "Indirect Tax Partner | Ex-EY",
      imageUrl: KapilSir,
      specializations: ["Indirect Taxation (GST), Customs & Foreign Trade"],
      experience: "13+ years",
      keyClients: "Grohe, Lixil, Nivea, Mahindra, Nokia, Huawei",
      qualification: "FCA, B.Com (Hons)",
      focus: "GST, Customs & Foreign Trade Policy",
    },
  ];

  const advisors = [
    {
      id: 1,
      name: "Aanchal Malhotra",
      title: "Strategic Advisor | Ex-Ernst & Young",
      imageUrl: AanchalMam,
      details: [
        {
          label: "Role",
          value:
            "Mergers & Acquisitions, Investment Banking and Tech Experience: Over 13 years",
        },
        {
          label: "Clients Managed",
          value:
            "NITI Aayog, Ministry of Afghanistan, Ministry of Liberia, Honda",
        },
        { label: "Qualification", value: "ACA, B.Com (Hons.)" },
      ],
    },
    {
      id: 2,
      name: "Arun Khetan",
      title: "Foreign Trade Policy Consultant",
      imageUrl: Arun,
      details: [
        { label: "Role", value: "Foreign Trade Policy consultant" },
        { label: "Experience", value: "Over 24 years" },
        { label: "Qualification", value: "B. Com (Hons)" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white  font-sans px-6 sm:px-10 md:px-12 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto space-y-20">
        <section>
          <h1 className="text-xl sm:text-2xl font-medium  mb-8">
            Our Leadership Champions
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {leaders?.map((leader) => (
              <ProfileCard key={leader?.id} person={leader} />
            ))}
          </div>
        </section>

        <section>
          <h1 className="text-xl sm:text-2xl font-medium text-white mb-8">
            Our Board of Advisors
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
            {advisors?.map((advisor) => (
              <ProfileCard key={advisor?.id} person={advisor} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurLeader;

// import React from "react";
// import DevanSir from "../../../assets/DevanSir.webp";
// import KapilSir from "../../../assets/KapilSir.webp";
// import JaiTahalani from "../../../assets/JaiTahalani.webp";
// import AanchalMam from "../../../assets/Aanchal.png";
// import Arun from "../../../assets/Arun.png";

// const ProfileCard = ({ person }) => (
//   <div className="bg-gray-50 border border-[#A164FF] rounded-xl overflow-hidden shadow-lg transition duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl flex flex-col">
//     {/* Image Section */}
//     <div className="relative w-full h-80 overflow-hidden">
//       <img
//         src={person.imageUrl}
//         alt={`Portrait of ${person.name}`}
//         className="w-full  object-cover rounded-t-xl"
//         loading="lazy"
//         onError={(e) => {
//           e.target.onerror = null;
//           e.target.src =
//             "https://placehold.co/600x400/6b21a8/ffffff?text=Image+Unavailable";
//         }}
//       />
//     </div>

//     {/* Text Section */}
//     <div className="p-6 sm:p-8 flex-grow flex flex-col">
//       <h3 className="text-xl font-semibold text-gray-800 mb-2">
//         {person?.name}
//       </h3>
//       <p className="text-gray-600 text-base font-normal mb-6">
//         {person?.title}
//       </p>

//       <ul className="space-y-2 text-gray-600 text-base flex-grow">
//         {person.details?.map((detail, index) => (
//           <li key={index}>
//             <span className="font-semibold text-base text-gray-700">
//               {detail?.label}:
//             </span>{" "}
//             <span className="font-normal">{detail?.value}</span>
//           </li>
//         ))}

//         {/* For Leaders (structured differently) */}
//         {person.specializations && (
//           <>
//             <li>
//               <span className="font-semibold text-base text-gray-700">
//                 Specialization:
//               </span>{" "}
//               <span className="font-normal">
//                 {person?.specializations.join(", ")}
//               </span>
//             </li>
//             <li>
//               <span className="font-semibold text-base text-gray-700">
//                 Experience:
//               </span>{" "}
//               {person?.experience}
//             </li>
//             <li>
//               <span className="font-semibold text-base text-gray-700">
//                 Key Clients:
//               </span>{" "}
//               {person?.keyClients}
//             </li>
//             <li>
//               <span className="font-semibold text-base text-gray-700">
//                 Qualification:
//               </span>{" "}
//               {person?.qualification}
//             </li>
//             <li>
//               <span className="font-semibold text-base text-gray-700">
//                 Focus:
//               </span>{" "}
//               {person?.focus}
//             </li>
//           </>
//         )}
//       </ul>
//     </div>
//   </div>
// );

// const OurLeader = () => {
//   const leaders = [
//     {
//       id: 1,
//       name: "Devan Gupta",
//       title: "Managing Partner | Ex-KPMG, PwC",
//       imageUrl: DevanSir,
//       specializations: ["Structuring and Assurance"],
//       experience: "13+ years",
//       keyClients: "NDTV, HCL, Medanta, Ebix",
//       qualification: "FCA, B.Com (Hons)",
//       focus: "Business Structuring and Corporate Advisory",
//     },
//     {
//       id: 2,
//       name: "Kapil Mahani",
//       title: "Indirect Tax Partner | Ex-EY",
//       imageUrl: KapilSir,
//       specializations: ["Indirect Taxation (GST), Customs & Foreign Trade"],
//       experience: "13+ years",
//       keyClients: "Grohe, Lixil, Nivea, Mahindra, Nokia, Huawei",
//       qualification: "FCA, B.Com (Hons)",
//       focus: "GST, Customs & Foreign Trade Policy",
//     },
//   ];

//   const advisors = [
//     {
//       id: 1,
//       name: "Aanchal Malhotra",
//       title: "Strategic Advisor | Ex-Ernst & Young",
//       imageUrl: AanchalMam,
//       details: [
//         {
//           label: "Role",
//           value:
//             "Mergers & Acquisitions, Investment Banking and Tech Experience: Over 13 years",
//         },
//         {
//           label: "Clients Managed",
//           value:
//             "NITI Aayog, Ministry of Afghanistan, Ministry of Liberia, Honda",
//         },
//         { label: "Qualification", value: "ACA, B.Com (Hons.)" },
//       ],
//     },
//     {
//       id: 2,
//       name: "Jai Tahalani",
//       title: "Legal Advisor",
//       imageUrl: JaiTahalani,
//       details: [
//         { label: "Expertise", value: "Legal Matter Advocate" },
//         { label: "Role", value: "Litigation and Legal Opinion" },
//         { label: "Experience", value: "Over 10 years" },
//         { label: "Clients Managed", value: "Ebix, Empaxis, Grohe" },
//         { label: "Qualification", value: "LLB, Bcom (Hons)" },
//       ],
//     },
//     {
//       id: 3,
//       name: "Arun Khetan",
//       title: "Foreign Trade Policy Consultant",
//       imageUrl: Arun,
//       details: [
//         { label: "Role", value: "Foreign Trade Policy consultant" },
//         { label: "Experience", value: "Over 24 years" },
//         { label: "Qualification", value: "B. Com (Hons)" },
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white text-gray-800 font-sans px-6 sm:px-10 md:px-12 lg:px-16 py-16">
//       <div className="max-w-7xl mx-auto space-y-20">
//         <section>
//           <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-8">
//             Our Leadership Champions
//           </h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
//             {leaders?.map((leader) => (
//               <ProfileCard key={leader?.id} person={leader} />
//             ))}
//           </div>
//         </section>

//         <section>
//           <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-8">
//             Our Board of Advisors
//           </h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
//             {advisors?.map((advisor) => (
//               <ProfileCard key={advisor?.id} person={advisor} />
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default OurLeader;
