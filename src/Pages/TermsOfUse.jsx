// import React from 'react';
// import { Link } from 'react-router-dom';

// const sections = [
//   {
//     id: 'introduction',
//     title: 'a. Introduction',
//     content:
//       `These Terms of Use govern your access to and use of Cretum Advisory’s website. By continuing to browse or use our site, you agree to these terms.`,
//   },
//   {
//     id: 'use-of-website',
//     title: 'b. Use of Website',
//     content:
//       `All information provided here is for general informational purposes only.\n\nYou may not copy, reproduce, or distribute any content without prior written consent from Cretum Advisory.\n\nYou agree not to misuse the website in any way that disrupts its functionality or security.`,
//   },
//   {
//     id: 'professional-disclaimer',
//     title: 'c. Professional Disclaimer',
//     content:
//       `The information on this website does not constitute professional or financial advice. For specific tax, legal, or financial matters, please consult our advisory team directly.`,
//   },
//   {
//     id: 'limitation-of-liability',
//     title: 'd. Limitation of Liability',
//     content:
//       `Cretum Advisory is not liable for any losses or damages resulting from your use of the website or reliance on its content.`,
//   },
//   {
//     id: 'external-links',
//     title: 'e. External Links',
//     content:
//       `This website may include links to external sites. Cretum Advisory is not responsible for the content or accuracy of such external resources.`,
//   },
//   {
//     id: 'changes-to-terms',
//     title: 'f. Changes to Terms',
//     content:
//       `We may update these Terms of Use periodically. Continued use of the website after such updates implies your acceptance of the revised terms.`,
//   },
//   {
//     id: 'contact-information',
//     title: 'g. Contact Information',
//     content:
//       `For questions regarding these terms, contact us at info@cretumadvisory.com.`,
//   },
// ];

// export default function TermsOfUse() {
//   return (
//     <div className="min-h-screen bg-[#1B122C] text-gray-100 p-6  sm:p-10 md:p-14 lg:p-20">
//       <header className="max-w-7xl mx-auto mb-8 animate-fadeIn mt-10">
//         <div className="bg-gradient-to-r from-backgroundSecondary to-[#A164FF] text-white rounded-2xl p-8 shadow-lg">
//           <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Terms of Use</h1>
//           <p className="mt-3 text-sm sm:text-base text-purple-100 max-w-3xl leading-relaxed">
//             These Terms of Use govern your access to and use of Cretum Advisory’s website. By
//             continuing to browse or use our site, you agree to these terms.
//           </p>
//         </div>
//       </header>

//       <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
//         {/* Table of contents */}
//         <aside className="lg:col-span-3 order-2 lg:order-1 animate-slideInLeft">
//           <nav
//             aria-label="Table of contents"
//             className="sticky top-6 bg-[#221736]/80 backdrop-blur-md border border-[#2f2450] rounded-xl p-5 shadow-sm"
//           >
//             <h2 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">Contents</h2>
//             <ul className="space-y-2">
//               {sections.map((s) => (
//                 <li key={s.id}>
//                   <a
//                     href={`#${s.id}`}
//                     className="block text-sm text-gray-400 hover:text-[#A164FF] transition-all duration-200 hover:translate-x-1"
//                   >
//                     {s.title}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </aside>

//         {/* Content area */}
//         <article className="lg:col-span-6 order-1 lg:order-2 bg-[#221736] rounded-2xl p-6 sm:p-8 shadow-md border border-[#2f2450] animate-fadeInUp">
//           <header className="mb-6">
//             <p className="text-sm text-gray-400">Last updated: <time dateTime="2025-10-27">October 27, 2025</time></p>
//           </header>

//           <div className="space-y-8">
//             {sections.map((s) => (
//               <section key={s.id} id={s.id} className="scroll-mt-24">
//                 <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
//                 <p className="text-gray-300 leading-relaxed whitespace-pre-line">{s.content}</p>

//                 {s.id === 'contact-information' && (
//                   <p className="mt-4">
//                     <a
//                       href="mailto:info@cretumadvisory.com"
//                       className="text-[#A164FF] hover:text-[#8B3EFF] transition-colors underline"
//                     >
//                       info@cretumadvisory.com
//                     </a>
//                   </p>
//                 )}
//               </section>
//             ))}
//           </div>

//           <div className="mt-10 border-t border-[#2f2450] pt-6 text-sm text-gray-400">
//             <p>
//               Please read these terms carefully. If you do not agree with any part of these terms,
//               you must stop using the Website.
//             </p>
//           </div>
//         </article>

//         {/* Right column */}
//         <aside className="lg:col-span-3 order-3 animate-slideInRight">
//           <div className="bg-[#221736] rounded-2xl border border-[#2f2450] p-5 shadow-md sticky top-6">
//             <h4 className="text-sm font-semibold text-gray-300">Notes</h4>
//             <p className="mt-2 text-sm text-gray-400 leading-relaxed">
//               This page is intended for informational purposes and is not legal advice.
//             </p>

//             <div className="mt-4 text-sm">
//               <p className="font-medium text-gray-300">Changes</p>
//               <p className="text-gray-400 mt-1">
//                 We may update these terms periodically. Continued use implies acceptance.
//               </p>
//             </div>

//             <div className="mt-5">
//               <Link to="/contact" className="inline-block bg-buttonBackground text-white px-3 py-2 rounded-lg hover:bg-buttonBackgroundHover">
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </aside>
//       </main>

//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes slideInLeft {
//           from { opacity: 0; transform: translateX(-20px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes slideInRight {
//           from { opacity: 0; transform: translateX(20px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         .animate-fadeIn { animation: fadeIn 0.6s ease-in-out both; }
//         .animate-fadeInUp { animation: fadeInUp 0.8s ease-in-out both; }
//         .animate-slideInLeft { animation: slideInLeft 0.7s ease-in-out both; }
//         .animate-slideInRight { animation: slideInRight 0.7s ease-in-out both; }
//       `}</style>
//     </div>
//   );
// }






import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle, Shield, Bell, X, Mail, User, Sparkles, TrendingUp, Zap, Award, Star } from 'lucide-react';

const sections = [
  {
    id: 'introduction',
    title: 'a. Introduction',
    content:
      `These Terms of Use govern your access to and use of Cretum Advisory's website. By continuing to browse or use our site, you agree to these terms.`,
  },
  {
    id: 'use-of-website',
    title: 'b. Use of Website',
    content:
      `All information provided here is for general informational purposes only.\n\nYou may not copy, reproduce, or distribute any content without prior written consent from Cretum Advisory.\n\nYou agree not to misuse the website in any way that disrupts its functionality or security.`,
  },
  {
    id: 'professional-disclaimer',
    title: 'c. Professional Disclaimer',
    content:
      `The information on this website does not constitute professional or financial advice. For specific tax, legal, or financial matters, please consult our advisory team directly.`,
  },
  {
    id: 'limitation-of-liability',
    title: 'd. Limitation of Liability',
    content:
      `Cretum Advisory is not liable for any losses or damages resulting from your use of the website or reliance on its content.`,
  },
  {
    id: 'external-links',
    title: 'e. External Links',
    content:
      `This website may include links to external sites. Cretum Advisory is not responsible for the content or accuracy of such external resources.`,
  },
  {
    id: 'changes-to-terms',
    title: 'f. Changes to Terms',
    content:
      `We may update these Terms of Use periodically. Continued use of the website after such updates implies your acceptance of the revised terms.`,
  },
  {
    id: 'contact-information',
    title: 'g. Contact Information',
    content:
      `For questions regarding these terms, contact us at info@cretumadvisory.com.`,
  },
];

// Newsletter benefits features
const newsletterBenefits = [
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Get exclusive market analysis and trends"
  },
  {
    icon: Zap,
    title: "Early Access",
    description: "Be the first to know about new services"
  },
  {
    icon: Award,
    title: "Expert Advice",
    description: "Receive tips from financial experts"
  },
  {
    icon: Star,
    title: "Premium Content",
    description: "Access to in-depth research reports"
  }
];

export default function TermsOfUse() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !name) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubscribed(true);
    setIsLoading(false);
    setName('');
    setEmail('');
    
    // Close modal after success
    setTimeout(() => {
      setShowModal(false);
      setIsSubscribed(false);
    }, 3000);
  };

  const openModal = () => {
    setShowModal(true);
    setIsSubscribed(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setIsSubscribed(false);
    setName('');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-[#1B122C] text-gray-100 p-6 sm:p-10 md:p-14 lg:p-20">
      <header className="max-w-7xl mx-auto mb-8 animate-fadeIn mt-10">
        <div className="bg-gradient-to-r from-backgroundSecondary to-[#A164FF] text-white rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Terms of Use</h1>
          <p className="mt-3 text-sm sm:text-base text-purple-100 max-w-3xl leading-relaxed">
            These Terms of Use govern your access to and use of Cretum Advisory's website. By
            continuing to browse or use our site, you agree to these terms.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Table of contents */}
        <aside className="lg:col-span-3 order-2 lg:order-1 animate-slideInLeft">
          <nav
            aria-label="Table of contents"
            className="sticky top-6 bg-[#221736]/80 backdrop-blur-md border border-[#2f2450] rounded-xl p-5 shadow-sm"
          >
            <h2 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">Contents</h2>
            <ul className="space-y-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block text-sm text-gray-400 hover:text-[#A164FF] transition-all duration-200 hover:translate-x-1"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Content area */}
        <article className="lg:col-span-6 order-1 lg:order-2 bg-[#221736] rounded-2xl p-6 sm:p-8 shadow-md border border-[#2f2450] animate-fadeInUp">
          <header className="mb-6">
            <p className="text-sm text-gray-400">Last updated: <time dateTime="2025-10-27">October 27, 2025</time></p>
          </header>

          <div className="space-y-8">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">{s.content}</p>

                {s.id === 'contact-information' && (
                  <p className="mt-4">
                    <a
                      href="mailto:info@cretumadvisory.com"
                      className="text-[#A164FF] hover:text-[#8B3EFF] transition-colors underline"
                    >
                      info@cretumadvisory.com
                    </a>
                  </p>
                )}
              </section>
            ))}
          </div>

          <div className="mt-10 border-t border-[#2f2450] pt-6 text-sm text-gray-400">
            <p>
              Please read these terms carefully. If you do not agree with any part of these terms,
              you must stop using the Website.
            </p>
          </div>
        </article>

        {/* Right column */}
        <aside className="lg:col-span-3 order-3 animate-slideInRight">
          <div className="bg-[#221736] rounded-2xl border border-[#2f2450] p-5 shadow-md sticky top-6">
            <h4 className="text-sm font-semibold text-gray-300">Notes</h4>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              This page is intended for informational purposes and is not legal advice.
            </p>

            <div className="mt-4 text-sm">
              <p className="font-medium text-gray-300">Changes</p>
              <p className="text-gray-400 mt-1">
                We may update these terms periodically. Continued use implies acceptance.
              </p>
            </div>

            <div className="mt-5">
              <Link to="/contact" className="inline-block bg-buttonBackground text-white px-3 py-2 rounded-lg hover:bg-buttonBackgroundHover">
                Contact Us
              </Link>
            </div>
          </div>
        </aside>
      </main>

      {/* Enhanced Newsletter Subscription Section */}
      <div className="max-w-6xl mx-auto mt-16">
        <div className="bg-gradient-to-br from-[#2A1B45] to-[#1B122C] rounded-2xl p-8 sm:p-12 border border-[#3f2e6b] relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#A164FF] rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#8B3EFF] rounded-full opacity-10 blur-3xl animate-pulse-slow animation-delay-2000"></div>
            
            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-5 animate-float"
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${20 + i * 8}%`,
                  animationDelay: `${i * 0.7}s`,
                  animationDuration: `${4 + i * 0.5}s`
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-[#A164FF]/20 rounded-2xl">
                  <Bell className="w-8 h-8 text-[#A164FF] animate-bounce animation-delay-1000" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Stay <span className="bg-gradient-to-r from-[#A164FF] to-[#8B3EFF] bg-clip-text text-transparent">Informed</span>
                </h2>
              </div>
              
              <p className="text-xl text-gray-300 mb-3 font-semibold">
                JOIN OUR EXCLUSIVE NEWSLETTER
              </p>
              
              <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Get expert financial insights, market updates, and exclusive content delivered directly to your inbox
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {newsletterBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-[#221736] rounded-xl p-5 border border-[#3f2e6b] hover:border-[#A164FF] transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-[#A164FF]/20 rounded-lg group-hover:bg-[#A164FF]/30 transition-colors">
                      <benefit.icon className="w-5 h-5 text-[#A164FF]" />
                    </div>
                    <h3 className="text-white font-semibold text-sm">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-[#221736] rounded-2xl p-8 border border-[#3f2e6b]">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Ready to Elevate Your Financial Knowledge?
                  </h3>
                  <p className="text-gray-400 mb-4 lg:mb-0">
                    Join 10,000+ professionals who receive our weekly insights
                  </p>
                </div>
                
                <button
                  onClick={openModal}
                  className="px-8 py-4 bg-gradient-to-r from-[#A164FF] to-[#8B3EFF] text-white rounded-xl font-semibold hover:from-[#8B3EFF] hover:to-[#7A2BFF] transform transition-all duration-300 hover:scale-105 flex items-center gap-3 group shadow-lg hover:shadow-xl min-w-[200px] justify-center"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Subscribe Now</span>
                  <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-[#3f2e6b] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span>100% Secure & Private</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span>No Spam Ever</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>Unsubscribe anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Beautiful Newsletter Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative max-w-md w-full animate-scaleIn">
            {/* Modal Content */}
            <div className="bg-gradient-to-br from-[#2A1B45] to-[#1B122C] rounded-3xl border border-[#3f2e6b] shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="relative p-6 border-b border-[#3f2e6b]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#A164FF]/20 rounded-lg">
                    <Sparkles className="w-6 h-6 text-[#A164FF]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Join Our Elite Circle</h2>
                    <p className="text-gray-400 text-sm">Get premium financial insights</p>
                  </div>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-[#3f2e6b] rounded-lg transition-all duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                {isSubscribed ? (
                  <div className="text-center py-8 animate-fadeIn">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Welcome to Our Community!</h3>
                    <p className="text-gray-300 mb-4">
                      You'll receive your first insights shortly
                    </p>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#A164FF] to-[#8B3EFF] rounded-full mx-auto"></div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      {/* Name Field */}
                      <div className="group">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                          <User className="w-4 h-4 text-[#A164FF]" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 bg-[#1B122C] border border-[#3f2e6b] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#A164FF] focus:ring-2 focus:ring-[#A164FF]/20 transition-all duration-300"
                          required
                        />
                      </div>

                      {/* Email Field */}
                      <div className="group">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                          <Mail className="w-4 h-4 text-[#A164FF]" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full px-4 py-3 bg-[#1B122C] border border-[#3f2e6b] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#A164FF] focus:ring-2 focus:ring-[#A164FF]/20 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    {/* Privacy Note */}
                    <div className="bg-[#1B122C] rounded-xl p-4 border border-[#3f2e6b]">
                      <div className="flex items-start gap-3">
                        <Shield className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-gray-400 leading-relaxed">
                          By subscribing, you agree to receive communication from us via email. 
                          No spam, promise. We will not share your information with any third parties.
                        </p>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 bg-gradient-to-r from-[#A164FF] to-[#8B3EFF] text-white rounded-xl font-semibold hover:from-[#8B3EFF] hover:to-[#7A2BFF] transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 group"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Subscribing...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          <span>Join Exclusive List</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.15; }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease-in-out both; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-in-out both; }
        .animate-slideInLeft { animation: slideInLeft 0.7s ease-in-out both; }
        .animate-slideInRight { animation: slideInRight 0.7s ease-in-out both; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out both; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        .animation-delay-2000 { animation-delay: 2000ms; }
      `}</style>
    </div>
  );
}
