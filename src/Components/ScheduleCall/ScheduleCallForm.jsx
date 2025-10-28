// import React, { useState } from 'react'

// function ScheduleCallForm() {
//     const [inputForm , setInputFrom]=useState({
//         name : "",
//         email : "",
//         phoneNo : "",
//         message : "",
//     })

    
//     const handleChange = (e)=>{
//        setInputFrom({
//         ...inputForm,
//         [e.target.name] : e.target.value
//        });
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setInputFrom(inputForm);
//         console.log("Form Submitted:", inputForm);
//     };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <h2 className="text-xl font-semibold text-white mb-2">Schedule a Call</h2>

//       <input
//         name="name"
//         type="text"
//         placeholder="Your Name"
//         value={inputForm.name}
//         onChange={handleChange}
//         required
//         className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
//       />

//       <input
//         name="email"
//         type="email"
//         placeholder="Your Email"
//         value={inputForm.email}
//         onChange={handleChange}
//         required
//         className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
//       />

//       <input
//         name="phoneNo"
//         type="tel"
//         placeholder="Your Phone Number"
//         value={inputForm.phoneNo}
//         onChange={handleChange}
//         required
//         className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
//       />

//       <textarea
//         name="message"
//         placeholder="Your Message"
//         value={inputForm.message}
//         onChange={handleChange}
//         rows={3}
//         className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
//       />

//       <button
//         type="submit"
//         className="w-full bg-gradient-to-r from-buttonBackground to-buttonBackground/80 hover:from-buttonBackgroundHover hover:to-buttonBackgroundHover/80 text-white font-medium px-4 py-2 rounded-full transition-all duration-300"
//       >
//         Submit
//       </button>
//     </form>
//   )
// }

// export default ScheduleCallForm


// import React, { useState } from 'react';
// import { User, Mail, Phone, MessageCircle, Calendar, Sparkles } from 'lucide-react';

// function ScheduleCallForm({ onSubmit }) {
//     const [inputForm, setInputForm] = useState({
//         name: "",
//         email: "",
//         phoneNo: "",
//         message: "",
//     });
//     const [isLoading, setIsLoading] = useState(false);

//     const handleChange = (e) => {
//         setInputForm({
//             ...inputForm,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);
        
//         // Simulate API call
//         await new Promise(resolve => setTimeout(resolve, 2000));
        
//         console.log("Form Submitted:", inputForm);
//         setIsLoading(false);
        
//         // Call onSubmit prop to close modal
//         if (onSubmit) {
//             onSubmit(inputForm);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-5 sm:space-y-6">
//             {/* Responsive Grid Layout */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 sm:gap-5">
//                 {/* Name Field */}
//                 <div className="group col-span-1">
//                     <label className="flex items-center gap-1.5 xs:gap-2 text-xs xs:text-sm sm:text-base font-medium text-gray-300 mb-1 xs:mb-2">
//                         <User className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-[#A164FF]" />
//                         Full Name
//                     </label>
//                     <input
//                         name="name"
//                         type="text"
//                         value={inputForm.name}
//                         onChange={handleChange}
//                         placeholder="Enter your full name"
//                         className="w-full px-3 xs:px-4 sm:px-5 py-2 xs:py-3 text-xs xs:text-sm sm:text-base bg-[#1B122C] border border-[#3f2e6b] rounded-lg xs:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#A164FF] focus:ring-1 xs:focus:ring-2 focus:ring-[#A164FF]/20 transition-all duration-300"
//                         required
//                     />
//                 </div>

//                 {/* Email Field */}
//                 <div className="group col-span-1">
//                     <label className="flex items-center gap-1.5 xs:gap-2 text-xs xs:text-sm sm:text-base font-medium text-gray-300 mb-1 xs:mb-2">
//                         <Mail className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-[#A164FF]" />
//                         Email Address
//                     </label>
//                     <input
//                         name="email"
//                         type="email"
//                         value={inputForm.email}
//                         onChange={handleChange}
//                         placeholder="Enter your email address"
//                         className="w-full px-3 xs:px-4 sm:px-5 py-2 xs:py-3 text-xs xs:text-sm sm:text-base bg-[#1B122C] border border-[#3f2e6b] rounded-lg xs:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#A164FF] focus:ring-1 xs:focus:ring-2 focus:ring-[#A164FF]/20 transition-all duration-300"
//                         required
//                     />
//                 </div>

//                 {/* Phone Field - Full width on mobile, half on tablet+ */}
//                 <div className="group col-span-1 md:col-span-2">
//                     <label className="flex items-center gap-1.5 xs:gap-2 text-xs xs:text-sm sm:text-base font-medium text-gray-300 mb-1 xs:mb-2">
//                         <Phone className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-[#A164FF]" />
//                         Phone Number
//                     </label>
//                     <input
//                         name="phoneNo"
//                         type="tel"
//                         value={inputForm.phoneNo}
//                         onChange={handleChange}
//                         placeholder="Enter your phone number"
//                         className="w-full px-3 xs:px-4 sm:px-5 py-2 xs:py-3 text-xs xs:text-sm sm:text-base bg-[#1B122C] border border-[#3f2e6b] rounded-lg xs:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#A164FF] focus:ring-1 xs:focus:ring-2 focus:ring-[#A164FF]/20 transition-all duration-300"
//                         required
//                     />
//                 </div>

//                 {/* Message Field - Always full width */}
//                 <div className="group col-span-1 md:col-span-2">
//                     <label className="flex items-center gap-1.5 xs:gap-2 text-xs xs:text-sm sm:text-base font-medium text-gray-300 mb-1 xs:mb-2">
//                         <MessageCircle className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-[#A164FF]" />
//                         Your Message
//                     </label>
//                     <textarea
//                         name="message"
//                         value={inputForm.message}
//                         onChange={handleChange}
//                         placeholder="Tell us about your requirements..."
//                         rows={2}
//                         className="w-full px-3 xs:px-4 sm:px-5 py-2 xs:py-3 text-xs xs:text-sm sm:text-base bg-[#1B122C] border border-[#3f2e6b] rounded-lg xs:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#A164FF] focus:ring-1 xs:focus:ring-2 focus:ring-[#A164FF]/20 transition-all duration-300 resize-none min-h-[80px] xs:min-h-[90px] sm:min-h-[100px]"
//                     />
//                 </div>
//             </div>

//             {/* Privacy Note */}
//             <div className="bg-[#1B122C] rounded-lg xs:rounded-xl p-3 xs:p-4 border border-[#3f2e6b]">
//                 <div className="flex items-start gap-2 xs:gap-3">
//                     <Sparkles className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-[#A164FF] mt-0.5 flex-shrink-0" />
//                     <p className="text-xs xs:text-sm text-gray-400 leading-relaxed">
//                         We respect your privacy. Your information is secure and will only be used to schedule your consultation call.
//                     </p>
//                 </div>
//             </div>

//             {/* Submit Button */}
//             <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full py-2.5 xs:py-3 sm:py-4 text-xs xs:text-sm sm:text-base bg-gradient-to-r from-[#A164FF] to-[#8B3EFF] text-white rounded-lg xs:rounded-xl font-semibold hover:from-[#8B3EFF] hover:to-[#7A2BFF] transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 group"
//             >
//                 {isLoading ? (
//                     <>
//                         <div className="w-4 h-4 xs:w-5 xs:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         <span>Submitting...</span>
//                     </>
//                 ) : (
//                     <>
//                         <Calendar className="w-4 h-4 xs:w-5 xs:h-5 group-hover:scale-110 transition-transform" />
//                         <span>Schedule Call</span>
//                     </>
//                 )}
//             </button>
//         </form>
//     );
// }

// export default ScheduleCallForm;


import React, { useState } from 'react';
import { User, Mail, Phone, MessageCircle, Calendar, Sparkles, CheckCircle, Clock } from 'lucide-react';

function ScheduleCallForm({ onSubmit }) {
    const [inputForm, setInputForm] = useState({
        name: "",
        email: "",
        phoneNo: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleChange = (e) => {
        setInputForm({
            ...inputForm,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        console.log("Form Submitted:", inputForm);
        setIsLoading(false);
        setShowSuccessModal(true);
        
        // Reset form
        setInputForm({
            name: "",
            email: "",
            phoneNo: "",
            message: "",
        });
    };

    const handleSuccessClose = () => {
        setShowSuccessModal(false);
        if (onSubmit) {
            onSubmit(inputForm);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-5 sm:space-y-6">
                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 sm:gap-5">
                    {/* Name Field */}
                    <div className="group col-span-1">
                        <label className="flex items-center gap-1.5 xs:gap-2 text-xs xs:text-sm sm:text-base font-medium text-gray-300 mb-1 xs:mb-2">
                            <User className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-[#A164FF]" />
                            Full Name
                        </label>
                        <input
                            name="name"
                            type="text"
                            value={inputForm.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full px-3 xs:px-4 sm:px-5 py-2 xs:py-3 text-xs xs:text-sm sm:text-base bg-[#1B122C] border border-[#3f2e6b] rounded-lg xs:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#A164FF] focus:ring-1 xs:focus:ring-2 focus:ring-[#A164FF]/20 transition-all duration-300"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="group col-span-1">
                        <label className="flex items-center gap-1.5 xs:gap-2 text-xs xs:text-sm sm:text-base font-medium text-gray-300 mb-1 xs:mb-2">
                            <Mail className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-[#A164FF]" />
                            Email Address
                        </label>
                        <input
                            name="email"
                            type="email"
                            value={inputForm.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            className="w-full px-3 xs:px-4 sm:px-5 py-2 xs:py-3 text-xs xs:text-sm sm:text-base bg-[#1B122C] border border-[#3f2e6b] rounded-lg xs:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#A164FF] focus:ring-1 xs:focus:ring-2 focus:ring-[#A164FF]/20 transition-all duration-300"
                            required
                        />
                    </div>

                    {/* Phone Field - Full width on mobile, half on tablet+ */}
                    <div className="group col-span-1 md:col-span-2">
                        <label className="flex items-center gap-1.5 xs:gap-2 text-xs xs:text-sm sm:text-base font-medium text-gray-300 mb-1 xs:mb-2">
                            <Phone className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-[#A164FF]" />
                            Phone Number
                        </label>
                        <input
                            name="phoneNo"
                            type="tel"
                            value={inputForm.phoneNo}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className="w-full px-3 xs:px-4 sm:px-5 py-2 xs:py-3 text-xs xs:text-sm sm:text-base bg-[#1B122C] border border-[#3f2e6b] rounded-lg xs:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#A164FF] focus:ring-1 xs:focus:ring-2 focus:ring-[#A164FF]/20 transition-all duration-300"
                            required
                        />
                    </div>

                    {/* Message Field - Always full width */}
                    <div className="group col-span-1 md:col-span-2">
                        <label className="flex items-center gap-1.5 xs:gap-2 text-xs xs:text-sm sm:text-base font-medium text-gray-300 mb-1 xs:mb-2">
                            <MessageCircle className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-[#A164FF]" />
                            Your Message
                        </label>
                        <textarea
                            name="message"
                            value={inputForm.message}
                            onChange={handleChange}
                            placeholder="Tell us about your requirements..."
                            rows={2}
                            className="w-full px-3 xs:px-4 sm:px-5 py-2 xs:py-3 text-xs xs:text-sm sm:text-base bg-[#1B122C] border border-[#3f2e6b] rounded-lg xs:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#A164FF] focus:ring-1 xs:focus:ring-2 focus:ring-[#A164FF]/20 transition-all duration-300 resize-none min-h-[80px] xs:min-h-[90px] sm:min-h-[100px]"
                        />
                    </div>
                </div>

                {/* Privacy Note */}
                <div className="bg-[#1B122C] rounded-lg xs:rounded-xl p-3 xs:p-4 border border-[#3f2e6b]">
                    <div className="flex items-start gap-2 xs:gap-3">
                        <Sparkles className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-[#A164FF] mt-0.5 flex-shrink-0" />
                        <p className="text-xs xs:text-sm text-gray-400 leading-relaxed">
                            We respect your privacy. Your information is secure and will only be used to schedule your consultation call.
                        </p>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2.5 xs:py-3 sm:py-4 text-xs xs:text-sm sm:text-base bg-gradient-to-r from-[#A164FF] to-[#8B3EFF] text-white rounded-lg xs:rounded-xl font-semibold hover:from-[#8B3EFF] hover:to-[#7A2BFF] transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 group"
                >
                    {isLoading ? (
                        <>
                            <div className="w-4 h-4 xs:w-5 xs:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Submitting...</span>
                        </>
                    ) : (
                        <>
                            <Calendar className="w-4 h-4 xs:w-5 xs:h-5 group-hover:scale-110 transition-transform" />
                            <span>Schedule Call</span>
                        </>
                    )}
                </button>
            </form>

            {/* Success Confirmation Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-2 xs:p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
                    <div className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md mx-2 animate-scaleIn">
                        <div className="bg-gradient-to-br from-[#2A1B45] to-[#1B122C] rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#3f2e6b] shadow-2xl overflow-hidden">
                            {/* Header */}
                            <div className="relative p-4 xs:p-5 sm:p-6 border-b border-[#3f2e6b]">
                                <div className="flex items-center gap-3 justify-center">
                                    <div className="p-2 bg-green-500/20 rounded-lg">
                                        <CheckCircle className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-green-400" />
                                    </div>
                                    <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-white">Success!</h2>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-4 xs:p-5 sm:p-6 text-center">
                                <div className="space-y-3 xs:space-y-4 sm:space-y-5">
                                    <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3 xs:mb-4">
                                        <CheckCircle className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-green-400" />
                                    </div>
                                    
                                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white">
                                        Request Submitted!
                                    </h3>
                                    
                                    <p className="text-gray-300 text-sm xs:text-base leading-relaxed">
                                        Thank you <strong>{inputForm.name}</strong>! We've received your request and will contact you within 24 hours to schedule your consultation call.
                                    </p>

                                    <div className="flex items-center justify-center gap-2 text-xs xs:text-sm text-gray-400">
                                        <Clock className="w-4 h-4" />
                                        <span>Response time: 24 hours</span>
                                    </div>

                                    <div className="pt-3 xs:pt-4">
                                        <div className="w-16 h-1 bg-gradient-to-r from-[#A164FF] to-[#8B3EFF] rounded-full mx-auto"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-4 xs:p-5 sm:p-6 border-t border-[#3f2e6b]">
                                <button
                                    onClick={handleSuccessClose}
                                    className="w-full py-3 xs:py-3.5 bg-gradient-to-r from-[#A164FF] to-[#8B3EFF] text-white rounded-lg xs:rounded-xl font-semibold hover:from-[#8B3EFF] hover:to-[#7A2BFF] transform transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
                                >
                                    <CheckCircle className="w-4 h-4 xs:w-5 xs:h-5 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm xs:text-base">Got It</span>
                                </button>
                                
                                <p className="text-xs text-gray-400 text-center mt-3">
                                    We'll contact you at: <strong className="text-gray-300">{inputForm.email}</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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
        </>
    );
}

export default ScheduleCallForm;