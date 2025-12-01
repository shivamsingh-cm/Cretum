// import {
//   Mail,
//   Phone,
//   Facebook,
//   Instagram,
//   Twitter,
//   Youtube,
//   Linkedin,
// } from "lucide-react";

// const ContactUs = () => {
//   const socialLinks = [
//     {
//       Icon: Facebook,
//       href: "https://www.facebook.com/cretumadvisory1",
//     },
//     {
//       Icon: Linkedin,
//       href: "https://www.linkedin.com/company/cretumadvisory/",
//     },
//     {
//       Icon: Instagram,
//       href: "https://www.instagram.com/cretumadvisory/",
//     },
//     { Icon: Twitter, href: "https://x.com/AdvisoryCretum" },
//     {
//       Icon: Youtube,
//       href: "https://www.youtube.com/@CretumAdvisory",
//     },
//   ];

//   return (
//     <section className="bg-backgroundPrimary text-white py-16 px-6 md:px-12 lg:px-20">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-2xl md:text-5xl font-medium mb-12 text-center md:text-left mt-4">
//           Contact Us
//         </h2>

//         {/* Container */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
//           {/* Left Section */}
//           <div className="bg-[#1e1630] p-6 md:p-8 rounded-2xl shadow-lg space-y-5">
//             {/* Full Name */}
//             <div>
//               <label className="block text-sm text-white mb-2">Full Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter name"
//                 className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:border-buttonBackground outline-none text-sm placeholder-gray-400"
//               />
//             </div>

//             {/* Phone Number */}
//             <div>
//               <label className="block text-sm text-white mb-2">
//                 Phone Number
//               </label>
//               <div className="flex items-center gap-2">
//                 <span className="text-sm bg-[#2a1d47] px-3 py-3 rounded-lg border border-gray-600">
//                   🇮🇳 +91
//                 </span>
//                 <input
//                   type="tel"
//                   placeholder="1234567890"
//                   className="flex-1 px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:border-buttonBackground outline-none text-sm placeholder-gray-400"
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm text-white mb-2">Email</label>
//               <input
//                 type="email"
//                 placeholder="ex.john@email.com"
//                 className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:border-buttonBackground outline-none text-sm placeholder-gray-400"
//               />
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block text-sm text-white mb-2">Message</label>
//               <textarea
//                 rows="4"
//                 placeholder="Write your message..."
//                 className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:border-buttonBackground outline-none text-sm placeholder-gray-400 resize-none"
//               />
//             </div>

//             {/* Newsletter Checkbox */}
//             <div className="flex items-start gap-2 text-sm text-gray-400">
//               <input
//                 type="checkbox"
//                 id="newsletter"
//                 className="mt-1 accent-buttonBackground"
//               />
//               <label htmlFor="newsletter">
//                 Sign up for our email list for updates, promotions, and more.
//               </label>
//             </div>

//             {/* Submit Button */}
//             <button className="w-full bg-buttonBackground hover:bg-buttonBackgroundHover text-white py-3 rounded-full text-sm font-medium transition-all duration-300">
//               Submit
//             </button>
//           </div>

//           {/* Right Side - Contact Info */}
//           <div className="space-y-6">
//             {/* Support Email */}
//             <div className="bg-[#1e1630] rounded-2xl p-6 flex items-center justify-between">
//               <div>
//                 <h4 className="text-sm text-gray-400 mb-1">SUPPORT</h4>
//                 <p className="text-white text-sm md:text-base">
//                   info@cretumadvisory.com
//                 </p>
//               </div>
//               <Mail className="text-purple-400" />
//             </div>

//             {/* Call Us */}
//             <div className="bg-[#1e1630] rounded-2xl p-6 flex items-center justify-between">
//               <div>
//                 <h4 className="text-sm text-gray-400 mb-1">CALL US</h4>
//                 <p className="text-white text-sm md:text-base">
//                   +91 8800895931
//                 </p>
//               </div>
//               <Phone className="text-purple-400" />
//             </div>

//             {/* Social Media */}
//             <div className="bg-[#1e1630] rounded-2xl p-6">
//               <h4 className="text-sm text-gray-400 mb-3">SOCIAL MEDIA</h4>
//               <div className="flex space-x-4">
//                 {socialLinks?.map((item) => {
//                   const { Icon, href } = item;
//                   return (
//                     <a
//                       key={href}
//                       href={href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="hover:text-[#A164FF] transition-colors duration-200"
//                     >
//                       <Icon size={18} />
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;

import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";

const ContactUs = () => {
  const socialLinks = [
    {
      Icon: Facebook,
      href: "https://www.facebook.com/cretumadvisory1",
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/company/cretumadvisory/",
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/cretumadvisory/",
    },
    { Icon: Twitter, href: "https://x.com/AdvisoryCretum" },
    {
      Icon: Youtube,
      href: "https://www.youtube.com/@CretumAdvisory",
    },
  ];

  return (
    <section className="bg-white text-gray-800 py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 sm:mb-12 text-center md:text-left mt-4 text-gray-800">
          Contact Us
        </h2>

        {/* Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {/* Left Section - Contact Form */}
          <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg space-y-4 sm:space-y-5 border border-[#A164FF]">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter name"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white border border-gray-300 focus:border-[#A164FF] focus:ring-2 focus:ring-[#A164FF]/20 outline-none text-sm placeholder-gray-400 transition-all duration-300"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="flex items-center gap-2">
                <span className="text-sm bg-white px-3 py-2 sm:py-3 rounded-lg border border-gray-300 text-gray-600 min-w-[80px] text-center">
                  🇮🇳 +91
                </span>
                <input
                  type="tel"
                  placeholder="1234567890"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white border border-gray-300 focus:border-[#A164FF] focus:ring-2 focus:ring-[#A164FF]/20 outline-none text-sm placeholder-gray-400 transition-all duration-300"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="ex.john@email.com"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white border border-gray-300 focus:border-[#A164FF] focus:ring-2 focus:ring-[#A164FF]/20 outline-none text-sm placeholder-gray-400 transition-all duration-300"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white border border-gray-300 focus:border-[#A164FF] focus:ring-2 focus:ring-[#A164FF]/20 outline-none text-sm placeholder-gray-400 resize-none transition-all duration-300"
              />
            </div>

            {/* Newsletter Checkbox */}
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                id="newsletter"
                className="mt-1 accent-[#A164FF]"
              />
              <label htmlFor="newsletter" className="leading-relaxed">
                Sign up for our email list for updates, promotions, and more.
              </label>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-[#A164FF] hover:bg-[#8B3EFF] text-white py-2 sm:py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Submit
            </button>
          </div>

          {/* Right Side - Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            {/* Support Email */}
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 flex items-center justify-between border border-[#A164FF]">
              <div>
                <h4 className="text-xs sm:text-sm text-gray-500 mb-1 font-medium">
                  SUPPORT
                </h4>
                <p className="text-gray-800 text-sm sm:text-base font-medium">
                  info@cretumadvisory.com
                </p>
              </div>
              <Mail className="text-[#A164FF] w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            {/* Call Us */}
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 flex items-center justify-between border border-[#A164FF]">
              <div>
                <h4 className="text-xs sm:text-sm text-gray-500 mb-1 font-medium">
                  CALL US
                </h4>
                <p className="text-gray-800 text-sm sm:text-base font-medium">
                  +91 8800895931
                </p>
              </div>
              <Phone className="text-[#A164FF] w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            {/* Social Media */}
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 border border-[#A164FF]">
              <h4 className="text-xs sm:text-sm text-gray-500 mb-3 font-medium">
                SOCIAL MEDIA
              </h4>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks?.map((item) => {
                  const { Icon, href } = item;
                  return (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#A164FF] transition-colors duration-200 hover:scale-110 transform"
                    >
                      <Icon size={18} className="sm:w-5 sm:h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
