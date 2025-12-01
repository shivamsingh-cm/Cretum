// import Resource from "../../../assets/resource.png";
// const steps = [
//   {
//     title: "Connect",
//     description: "Understand your business model and UAE goals.",
//     image: Resource,
//   },
//   {
//     title: "Assess",
//     description: "Choose the right structure and compliance path.",
//     image: Resource,
//   },
//   {
//     title: "Implement",
//     description: "Register, file, and audit with complete accuracy.",
//     image: Resource,
//   },
//   {
//     title: "Support",
//     description: "Maintain ongoing compliance and operational health.",
//     image: Resource,
//   },
// ];

// const experts = [
//   {
//     name: "Amit Kumar",
//     role: "International Tax Director",
//     location: "UAE",
//     image: Resource,
//   },
//   {
//     name: "Priya Sharma",
//     role: "Tax & Advisory Partner",
//     location: "UAE",
//     image: Resource,
//   },
//   {
//     name: "Rajesh Gupta",
//     role: "Audit & Compliance Lead",
//     location: "UAE",
//     image: Resource,
//   },
// ];

// export default function HowWeWork() {
//   return (
//     <div className=" text-white min-h-screen bg-backgroundPrimary p-6 sm:p-10 md:p-14 lg:p-16">
//       {/* Work Steps */}
//       <section className="py-16 px-6">
//         <h2 className="text-sm text-buttonBackground mb-2">How we Work ?</h2>
//         <h3 className="text-2xl font-semibold mb-12">
//           A four-step approach to ensure seamless setup and compliance.
//         </h3>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className="relative rounded-xl overflow-hidden h-80 hover:scale-105 transform transition-all duration-300"
//             >
//               {/* Full-height image */}
//               <img
//                 src={step.image}
//                 alt={step.title}
//                 className="absolute inset-0 w-full h-full object-cover"
//               />

//               {/* Gradient overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>

//               <div className="relative z-10 p-5 text-white flex flex-col justify-end h-full">
//                 <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
//                 <p className="text-sm text-white/50">{step.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Experts */}
//       <section className="py-16 px-6 ">
//         <h3 className="text-2xl font-semibold mb-12">Meet Our Desk Experts</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {experts?.map((expert, index) => (
//             <div
//               key={index}
//               className="bg-[#1b1635] rounded-xl overflow-hidden hover:bg-[#221b44] transition-colors duration-300"
//             >
//               <img
//                 src={expert.image}
//                 alt={expert.name}
//                 className="w-full h-60 object-cover"
//               />
//               <div className="p-5 text-left">
//                 <p className="text-buttonBackground text-sm mb-1">
//                   {expert.location}
//                 </p>
//                 <h4 className="text-lg font-semibold">{expert.name}</h4>
//                 <p className="text-sm text-white/70">{expert.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

import Resource from "../../../assets/resource.png";
import Resource1 from "../../../assets/resource1.jpeg";
import Resource2 from "../../../assets/resource2.jpeg";
import Resource3 from "../../../assets/resource3.jpeg";
import Resource4 from "../../../assets/resource4.jpg";
import Resource5 from "../../../assets/resource5.jpg";
import Resource6 from "../../../assets/resource6.jpg";

const steps = [
  {
    title: "Connect",
    description: "Understand your business model and UAE goals.",
    image: Resource1,
  },
  {
    title: "Assess",
    description: "Choose the right structure and compliance path.",
    image: Resource2,
  },
  {
    title: "Implement",
    description: "Register, file, and audit with complete accuracy.",
    image: Resource3,
  },
  {
    title: "Support",
    description: "Maintain ongoing compliance and operational health.",
    image: Resource,
  },
];

const experts = [
  {
    name: "Amit Kumar",
    role: "International Tax Director",
    location: "UAE",
    image: Resource6,
  },
  {
    name: "Priya Sharma",
    role: "Tax & Advisory Partner",
    location: "UAE",
    image: Resource5,
  },
  {
    name: "Rajesh Gupta",
    role: "Audit & Compliance Lead",
    location: "UAE",
    image: Resource4,
  },
];

export default function HowWeWork() {
  return (
    <div className="text-gray-800 min-h-screen bg-white p-4 sm:p-6 md:p-10 lg:p-12">
      {/* Work Steps */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <h2 className="text-sm text-[#A164FF] mb-2 font-medium">
          How we Work ?
        </h2>
        <h3 className="text-xl sm:text-2xl font-semibold mb-8 sm:mb-12 text-gray-800">
          A four-step approach to ensure seamless setup and compliance.
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden h-64 sm:h-72 lg:h-80 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200"
            >
              {/* Full-height image */}
              <img
                src={step.image}
                alt={step.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

              <div className="relative z-10 p-4 sm:p-5 text-white flex flex-col justify-end h-full">
                <h4 className="text-base sm:text-lg font-semibold mb-2">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-200">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experts */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-8 sm:mb-12 text-gray-800">
          Meet Our Desk Experts
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {experts?.map((expert, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-[#A164FF] rounded-xl overflow-hidden hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-48 sm:h-52 lg:h-60 object-cover"
              />
              <div className="p-4 sm:p-5 text-left">
                <p className="text-[#A164FF] text-xs sm:text-sm mb-1 font-medium">
                  {expert.location}
                </p>
                <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                  {expert.name}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  {expert.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
