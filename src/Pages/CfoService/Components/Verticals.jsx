// import Verticalserver1 from "../../../assets/verticalserver1.png";
// import Verticalserver2 from "../../../assets/verticalserver2.png";
// import Verticalserver3 from "../../../assets/verticalserver3.png";
// import Verticalserver4 from "../../../assets/verticalserver4.png";
// import Verticalserver5 from "../../../assets/verticalserver5.png";
// import Verticalserver6 from "../../../assets/verticalserver6.png";

// export default function Verticals() {
//   const items = [
//     { icon: Verticalserver1, label: "IT & Technology" },
//     { icon: Verticalserver2, label: "D2C & Ecommerce" },
//     { icon: Verticalserver3, label: "Manufacturing" },
//     { icon: Verticalserver4, label: "Healthcare" },
//     { icon: Verticalserver5, label: "Financial Services" },
//     { icon: Verticalserver6, label: "Logistics" },
//   ];

//   return (
//     <section className="w-full bg-white py-16 sm:py-20">
//       <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         {/* Heading */}
//         <h2 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
//           Verticals we serve
//         </h2>

//         {/* Subtitle */}
//         <p className="text-gray-600 font-normal text-sm sm:text-base max-w-[700px] mx-auto mt-3">
//           We combine deep tax expertise with cutting-edge technology to deliver
//           a seamless GST experience that transforms compliance into strategic
//           advantage.
//         </p>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-14">
//           {items?.map((item, index) => (
//             <div
//               key={index}
//               className="bg-gray-50 border border-[#A164FF] rounded-2xl p-2 flex flex-col items-center justify-center gap-3 sm:gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-white cursor-pointer"
//             >
//               <img
//                 src={item.icon}
//                 alt={item.label}
//                 className="w-24 h-24 sm:w-28 sm:h-28 md:w-[120px] md:h-[120px] object-contain"
//               />
//               <p className="text-gray-800 text-lg sm:text-xl md:text-2xl font-semibold">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function VerticalsSection({ heading, subheading, items }) {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          {heading}
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 font-normal text-sm sm:text-base max-w-[700px] mx-auto mt-3">
          {subheading}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-14">
          {items?.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-[#A164FF] rounded-2xl p-2 flex flex-col items-center justify-center gap-3 sm:gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-white cursor-pointer"
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-[120px] md:h-[120px] object-contain"
              />
              <p className="text-gray-800 text-lg sm:text-xl md:text-2xl font-semibold">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
