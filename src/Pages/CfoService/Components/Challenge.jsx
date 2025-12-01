// import { CheckCircle } from "lucide-react";
// import CfoChallengeIcon1 from "../../../assets/cfochallenge1.png";
// import CfoChallengeIcon2 from "../../../assets/cfochallenge2.png";
// import CfoChallengeIcon3 from "../../../assets/cfochallenge3.png";
// import CfoChallengeIcon4 from "../../../assets/cfochallenge4.png";

// export default function Challenge() {
//   const cardsBottom = [
//     {
//       title: " Real-Time ITC Mismatch Detection",
//       icons: CfoChallengeIcon1,
//       points: [
//         "Spots 2B vs 3B gaps instantly",
//         "Highlights entries causing ITC loss",
//         "Helps prevent future GST notices",
//       ],
//     },
//     {
//       title: "Missing Invoice & Vendor Compliance Tracker",
//       icons: CfoChallengeIcon2,
//       points: [
//         "Shows invoices your team/vendor missed",
//         "Tracks vendor filing status",
//         "Protects your ITC from non-compliant vendors",
//       ],
//     },
//     {
//       title: " Platform/Source-Wise Tax Summary",
//       icons: CfoChallengeIcon3,
//       points: [
//         "Auto-captures data from ERP/marketplaces",
//         "Combines GST + TCS in one screen",
//         "Removes manual downloading errors",
//       ],
//     },
//     {
//       title: "High-Risk Vendor Alerts",
//       icons: CfoChallengeIcon4,
//       points: [
//         "Identifies vendors delaying your ITC",
//         "Tracks inconsistent filers",
//         "Reduces compliance risk on your end",
//       ],
//     },
//   ];

//   return (
//     <div className="w-full bg-white py-16 sm:py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div className="mt-8 sm:mt-12">
//           <h2 className="text-gray-800 text-3xl sm:text-4xl font-semibold">
//             Common Businesses Challenges We Solve
//           </h2>
//           <p className="text-gray-600 mt-3 text-sm sm:text-base font-normal max-w-[640px] mx-auto">
//             Businesses struggle with critical finance challenges every day. We
//             help teams overcome these with clarity and smarter systems.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
//           {cardsBottom?.map((c, i) => (
//             <article
//               key={i}
//               className="bg-gray-50 border border-[#A164FF] rounded-xl p-4 sm:p-6 text-left
//               transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-white cursor-pointer
//               flex flex-col items-center"
//             >
//               {/* Icon at top center */}
//               <div className="mb-4 flex justify-center">
//                 <img
//                   src={c.icons}
//                   alt=""
//                   className="w-12 h-12 sm:w-20 sm:h-20 object-contain"
//                 />
//               </div>

//               {/* Title */}
//               <h3 className="text-gray-800 font-semibold text-base sm:text-lg leading-snug text-center w-full">
//                 {c?.title}
//               </h3>

//               {/* Points list */}
//               <ul className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base space-y-2 w-full">
//                 {c?.points?.map((pt, idx) => (
//                   <li key={idx} className="flex items-start gap-2">
//                     <CheckCircle
//                       className="text-[#A164FF] flex-shrink-0 mt-0.5"
//                       size={18}
//                     />
//                     <span className="leading-relaxed flex-1">{pt}</span>
//                   </li>
//                 ))}
//               </ul>
//             </article>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { CheckCircle } from "lucide-react";

export default function ChallengeSection({ heading, subheading, cards = [] }) {
  return (
    <div className="w-full bg-white py-16 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <div className="mt-8 sm:mt-12">
          <h2 className="text-gray-800 text-3xl sm:text-4xl font-semibold">
            {heading}
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base font-normal max-w-[640px] mx-auto">
            {subheading}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {cards?.map((card, i) => (
            <article
              key={i}
              className="bg-gray-50 border border-[#A164FF] rounded-xl p-4 sm:p-6 text-left
              transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-white cursor-pointer
              flex flex-col items-center"
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <img
                  src={card.icon}
                  alt="icons"
                  className="w-12 h-12 sm:w-20 sm:h-20 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-gray-800 font-semibold text-base sm:text-lg leading-snug text-center w-full">
                {card.title}
              </h3>

              {/* Points */}
              <ul className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base space-y-2 w-full">
                {card.points?.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle
                      className="text-[#A164FF] flex-shrink-0 mt-0.5"
                      size={18}
                    />
                    <span className="leading-relaxed flex-1">{pt}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
