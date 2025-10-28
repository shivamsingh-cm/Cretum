// import React from "react";

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
//       <div className="bg-[#1B122C] rounded-2xl shadow-xl p-6 w-full max-w-md relative">
    
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-400 hover:text-white"
//         >
//           ✕
//         </button>

//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modal;

// import React from "react";
// import { X, Calendar } from "lucide-react";

// const Modal = ({ isOpen, onClose, children, title, description }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
//       <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-2 animate-scaleIn">
//         {/* Modal Content */}
//         <div className="bg-gradient-to-br from-[#2A1B45] to-[#1B122C] rounded-xl sm:rounded-2xl md:rounded-3xl border border-[#3f2e6b] shadow-2xl overflow-hidden">
//           {/* Header */}
//           <div className="relative p-4 sm:p-6 border-b border-[#3f2e6b]">
//             <div className="flex items-center gap-2 sm:gap-3">
//               <div className="p-1 sm:p-2 bg-[#A164FF]/20 rounded-lg">
//                 <Calendar className="w-4 h-4 sm:w-6 sm:h-6 text-[#A164FF]" />
//               </div>
//               <div className="flex-1 min-w-0">
//                 <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white truncate">
//                   {title || "Schedule a Call"}
//                 </h2>
//                 <p className="text-xs sm:text-sm text-gray-400 truncate">
//                   {description || "Let's discuss your financial goals"}
//                 </p>
//               </div>
//             </div>
            
//             {/* Close Button */}
//             <button
//               onClick={onClose}
//               className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1 sm:p-2 text-gray-400 hover:text-white hover:bg-[#3f2e6b] rounded-lg transition-all duration-200"
//             >
//               <X className="w-4 h-4 sm:w-5 sm:h-5" />
//             </button>
//           </div>

//           {/* Body */}
//           <div className="p-4 sm:p-6">
//             {children}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes scaleIn {
//           from { opacity: 0; transform: scale(0.95); }
//           to { opacity: 1; transform: scale(1); }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out both;
//         }
//         .animate-scaleIn {
//           animation: scaleIn 0.3s ease-out both;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Modal;

import React from "react";
import { X, Calendar } from "lucide-react";

const Modal = ({ isOpen, onClose, children, title, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 xs:p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-2 my-auto animate-scaleIn">
        {/* Modal Content */}
        <div className="bg-gradient-to-br from-[#2A1B45] to-[#1B122C] rounded-lg xs:rounded-xl sm:rounded-2xl lg:rounded-3xl border border-[#3f2e6b] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="relative p-3 xs:p-4 sm:p-5 lg:p-6 border-b border-[#3f2e6b] sticky top-0 bg-gradient-to-br from-[#2A1B45] to-[#1B122C] z-10">
            <div className="flex items-center gap-2 xs:gap-3">
              <div className="p-1.5 xs:p-2 sm:p-3 bg-[#A164FF]/20 rounded-lg flex-shrink-0">
                <Calendar className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-[#A164FF]" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  {title || "Schedule a Call"}
                </h2>
                <p className="text-xs xs:text-sm text-gray-400 mt-0.5">
                  {description || "Let's discuss your financial goals"}
                </p>
              </div>
            </div>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2.5 xs:top-3 sm:top-4 right-2.5 xs:right-3 sm:right-4 p-1 xs:p-1.5 sm:p-2 text-gray-400 hover:text-white hover:bg-[#3f2e6b] rounded-lg transition-all duration-200 flex-shrink-0"
            >
              <X className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-3 xs:p-4 sm:p-5 lg:p-6">
            {children}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out both;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default Modal;



