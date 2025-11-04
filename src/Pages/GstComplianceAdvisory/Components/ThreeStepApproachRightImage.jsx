import React from "react";
import stepImg from  "../../../assets/gstservicebg.png";// update image path

// export default function ThreeStepApproachRightImage() {
//   return (
//     <section className="w-full bg-[#0D0620] text-white py-16">
//       <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">

//         {/* LEFT CONTENT */}
//         <div className="flex flex-col justify-center">
//           <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
//             Our Unique 3-Step Approach
//           </h2>

//           {[1, 2, 3].map((item, i) => (
//             <div key={i} className="mb-6">
//               <h3 className="text-lg font-medium mb-2">
//                 Our Unique 3-Step Approach
//               </h3>
//               <p className="text-[#C5C2CF] text-sm leading-relaxed">
//                 Unlike traditional GST service providers who focus solely on compliance, 
//                 our approach transforms GST from a burden into a strategic advantage for your business.
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="w-full h-72 sm:h-96 lg:h-full">
//           <img
//             src={stepImg}
//             alt="3 Step Approach"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }

// import React from "react";
// import stepImg from "../assets/step-approach.png"; // update image path

// import React from "react";
// import stepImg from "../assets/step-approach.png"; // update path

export default function ThreeStepApproachRightImage() {
  return (
    <section className="w-full bg-[#0D0620] text-white py-16 overflow-hidden">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-[1fr_650px] gap-10 px-6 lg:px-0">

        {/* LEFT CONTENT */}
        <div className="lg:ml-20 flex flex-col justify-center lg:h-[902px]">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
            Our Unique 3-Step Approach
          </h2>

          {[1, 2, 3].map((item, i) => (
            <div key={i} className="mb-6">
              <h3 className="text-lg font-medium mb-2">
                Our Unique 3-Step Approach
              </h3>
              <p className="text-[#C5C2CF] text-sm leading-relaxed">
                Unlike traditional GST service providers who focus solely on compliance,
                our approach transforms GST from a burden into a strategic advantage for your business.
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-[929px] h-[902px] pr-0 mr-0">
          <img
            src={stepImg}
            alt="3 Step Approach"
            loading="lazy"
            className="w-full  object-cover rounded-none lg:rounded-l-lg"
          />
        </div>

      </div>
    </section>
  );
}



