// import React from "react";
// import stepImg from  "../../../assets/gstserviceleftbgimage.jpg";
// export default function ThreeStepApproachRightImage() {
//   return (
//     <section className="w-full bg-[#0D0620] text-white py-16 overflow-hidden">
//       <div className="mx-auto grid grid-cols-1 lg:grid-cols-[1fr_650px] gap-10 px-6 lg:px-0">

//         {/* LEFT CONTENT */}
//         <div className="lg:ml-20 flex flex-col justify-center lg:h-[902px]">
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
//         <div className="w-[929px] h-[902px] pr-0 mr-0">
//           <img
//             src={stepImg}
//             alt="3 Step Approach"
//             loading="lazy"
//             className="w-full  object-cover rounded-none lg:rounded-l-lg"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }


import React from "react";
import stepImg from "../../../assets/gstserviceleftbgimage.jpg";

export default function ThreeStepApproachRightImage() {
  return (
    <section className="w-full bg-[#0D0620] text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[650px] mt-20">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:pl-20 py-16">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
            Our Unique 3-Step Approach
          </h2>

          {[1, 2, 3].map((item, i) => (
            <div key={i} className="mb-6">
              <h3 className="text-lg font-medium mb-2">Step {item} Title</h3>
              <p className="text-[#C5C2CF] text-sm leading-relaxed max-w-md">
                Unlike traditional GST service providers who focus solely on compliance,
                our approach transforms GST from a burden into a strategic advantage for your business.
              </p>
            </div>
          ))}

          <button className="mt-4 px-6 py-3 bg-[#7A3EFF] hover:bg-[#692fe0] rounded-full text-sm font-medium w-fit transition">
            Book a Free GST Review
          </button>
        </div>

        {/* RIGHT IMAGE (FULL HEIGHT, 50% WIDTH) */}
        <div className="relative w-full h-72 sm:h-96 lg:h-full">
          <img
            src={stepImg}
            alt="3 Step Approach"
            loading="lazy"
            className="absolute top-0 right-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}



