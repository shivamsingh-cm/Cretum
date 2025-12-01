// import React from "react";
// import CfoDashboard1 from "../../../assets/cfodashboard1.png";
// import CfoDashboard2 from "../../../assets/cfodashboard2.png";
// import { CheckCircle } from "lucide-react";

// const AnalyticsSection = () => {

//   const Analytics = [
//                 {
//                   title: "Financial Analytics & Insights",
//                   features: [
//                     "Full 360° view of revenue and expenses",
//                     "Identify key performance trends",
//                     "Track real-time business health",
//                   ],
//                 },
//                 {
//                   title: "Key Performance Indicators",
//                   features: [
//                     "Sales growth metrics",
//                     "Cash flow tracking",
//                     "Profit margins & operating ratios",
//                   ],
//                 },
//                 {
//                   title: "Automated Alerts",
//                   features: [
//                     "Budget deviation warnings",
//                     "Compliance risk alerts",
//                     "Cash flow triggers",
//                   ],
//                 },
//               ]
//   return (
//     <section className="bg-gradient-to-br from-[#1B1035] to-[#2A1A50] text-white px-6 md:px-12 lg:px-20 py-16 lg:py-24">
//       {/* AI Powered Section */}
//       <div className="max-w-7xl mx-auto">
//         {/* Centered Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//             CFO Dashboard Tool
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Image */}
//           <div className="flex justify-center">
//             <div className="relative">
//               <img
//                 src={CfoDashboard1}
//                 loading="lazy"
//                 alt="AI Powered CFO Dashboard"
//                 className="relative w-full max-w-lg rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           </div>

//           {/* Right Content */}
//           <div>
//             <ul className="space-y-4">
//               {Analytics.map((item, index) => (
//                 <li
//                   key={index}
//                   className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
//                 >
//                   <h3 className="text-xl font-semibold mb-3 text-white flex items-center">
//                     <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
//                     {item.title}
//                   </h3>
//                   <ul className="space-y-2">
//                     {item.features.map((feature, featureIndex) => (
//                       <li
//                         key={featureIndex}
//                         className="text-gray-300 flex items-center text-sm md:text-base"
//                       >
//                         <svg
//                           className="w-4 h-4 text-green-400 mr-2 flex-shrink-0"
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </li>
//               ))}
//             </ul>

//             <div className="text-center mt-10">
//               <button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 px-8 py-4 rounded-full text-base font-semibold shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1">
//                 Get Free Demo Now
//                 <span className="ml-2">→</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="max-w-7xl mx-auto">
//         <div className="relative my-20">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-700/50"></div>
//           </div>
//         </div>
//       </div>

//       {/* Business Health Check Section */}
//       <div className="max-w-7xl mx-auto">
//         {/* Centered Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//             Business Health Check – In Just 60 Seconds
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Left Content */}
//           <div>
//             <p className="text-gray-300 text-lg leading-relaxed mb-8">
//               This Dashboard gives a CFO exactly what they need at a glance. It
//               pulls together every critical GST metric—sales, purchases, ITC,
//               refunds, demands, notices, and mismatches—and turns it into a
//               simple, decision-ready view. Instead of digging through
//               spreadsheets or chasing the accounts team for updates, you see the
//               entire indirect tax position in one clean screen.
//             </p>

//             <div className="text-center">
//               <button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 px-8 py-4 rounded-full text-base font-semibold shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1">
//                 GET Free Health Check Now
//                 <span className="ml-2">→</span>
//               </button>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="flex justify-center lg:justify-end">
//             <div className="relative">
//               <img
//                 src={CfoDashboard2}
//                 loading="lazy"
//                 alt="Business Health Check Analytics"
//                 className="relative w-full max-w-lg rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AnalyticsSection;

// import React from "react";
// import CfoDashboard1 from "../../../assets/cfodashboard1.png";
// import CfoDashboard2 from "../../../assets/cfodashboard2.png";
// import { CheckCircle, ArrowRight } from "lucide-react";

// const AnalyticsSection = () => {
//   const Analytics = [
//     {
//       title: "Financial Analytics & Insights",
//       features: [
//         "Full 360° view of revenue and expenses",
//         "Identify key performance trends",
//         "Track real-time business health",
//       ],
//     },
//     {
//       title: "Key Performance Indicators",
//       features: [
//         "Sales growth metrics",
//         "Cash flow tracking",
//         "Profit margins & operating ratios",
//       ],
//     },
//     {
//       title: "Automated Alerts",
//       features: [
//         "Budget deviation warnings",
//         "Compliance risk alerts",
//         "Cash flow triggers",
//       ],
//     },
//   ];

//   return (
//     <section className="bg-backgroundPrimary text-white px-6 md:px-12 lg:px-20 py-16 lg:py-24">
//       {/* AI Powered Section */}
//       <div className="max-w-7xl mx-auto">
//         {/* Centered Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//             CFO Dashboard Tool
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Image */}
//           <div className="flex justify-center">
//             <div className="relative">
//               <img
//                 src={CfoDashboard1}
//                 loading="lazy"
//                 alt="AI Powered CFO Dashboard"
//                 className="relative w-full max-w-lg rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           </div>

//           {/* Right Content */}
//           <div>
//             <ul className="space-y-4">
//               {Analytics.map((item, index) => (
//                 <li
//                   key={index}
//                   className="bg-white/5 backdrop-blur-sm border-l-8 border-purple-400 border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-all duration-300 group hover:border-purple-400"
//                 >
//                   <h3 className="text-xl font-semibold mb-3 text-white flex items-center">
//                     <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
//                     {item.title}
//                   </h3>
//                   <ul className="space-y-2">
//                     {item.features.map((feature, featureIndex) => (
//                       <li
//                         key={featureIndex}
//                         className="text-gray-300 flex items-center text-sm md:text-base"
//                       >
//                         <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </li>
//               ))}
//             </ul>

//             <div className="text-center mt-10">
//               <button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 px-8 py-4 rounded-full text-base font-semibold shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 flex items-center justify-center mx-auto">
//                 Get Free Demo Now
//                 <ArrowRight className="ml-2 w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="max-w-7xl mx-auto">
//         <div className="relative my-20">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-700/50 mb-20"></div>
//           </div>
//         </div>
//       </div>

//       {/* Business Health Check Section */}
//       <div className="max-w-7xl mx-auto">
//         {/* Centered Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//             Business Health Check – In Just 60 Seconds
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Left Content */}
//           <div>
//             <p className="text-gray-300 text-lg leading-relaxed mb-8">
//               This Dashboard gives a CFO exactly what they need at a glance. It
//               pulls together every critical GST metric—sales, purchases, ITC,
//               refunds, demands, notices, and mismatches—and turns it into a
//               simple, decision-ready view. Instead of digging through
//               spreadsheets or chasing the accounts team for updates, you see the
//               entire indirect tax position in one clean screen.
//             </p>

//             <div className="text-center">
//               <button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 px-8 py-4 rounded-full text-base font-semibold shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 flex items-center justify-center mx-auto">
//                 GET Free Health Check Now
//                 <ArrowRight className="ml-2 w-4 h-4" />
//               </button>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="flex justify-center lg:justify-end">
//             <div className="relative">
//               <img
//                 src={CfoDashboard2}
//                 loading="lazy"
//                 alt="Business Health Check Analytics"
//                 className="relative w-full max-w-lg rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AnalyticsSection;


import React from "react";
import CfoDashboard1 from "../../../assets/cfodashboard1.png";
import CfoDashboard2 from "../../../assets/cfodashboard2.png";
import {
  CheckCircle,
  ArrowRight,
  TrendingUp,
  BarChart3,
  AlertCircle,
  Activity,
  Shield,
  Zap,
  Clock,
  Eye,

} from "lucide-react";

const AnalyticsSection = () => {
  const Analytics = [
    {
      title: "Financial Analytics & Insights",
      icon: <BarChart3 className="w-6 h-6" />,
      features: [
        "Real-time view of revenue and expenses.",
        "Efficiency and recovery metrics.",
        "Month-wise Performance trends",
        "Quick visuals for spotting growth or leakage.",
      ],
    },
    {
      title: "Key Performance Indicators",
      icon: <TrendingUp className="w-6 h-6" />,
      features: [
        "Gross Profit margin",
        "Net profit margin",
        "Expense ratio",
        "Net Operating margin",
      ],
    },
    {
      title: "Automated Alerts",
      icon: <AlertCircle className="w-6 h-6" />,
      features: [
        "Budget overshoot warnings",
        "Yellow-flag anomalies",
        "Compliance lapses",
        "Cashflow risk triggers",
      ],
    },
  ];

  const features = [
    { icon: <Activity className="w-5 h-5" />, text: "Real-time monitoring" },
    { icon: <Shield className="w-5 h-5" />, text: "GST compliance tracking" },
    { icon: <Zap className="w-5 h-5" />, text: "60-second health check" },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Centered like Verticals */}
        <div className="text-center mb-12 ">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              CFO Dashboard Tool
            </span>
            <br />
            <span className="text-gray-800">Smart Financial Intelligence</span>
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
            Transform complex financial data into actionable insights with our
            AI-powered dashboard
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20 lg:mb-24">
          {/* Image with Decorative Frame */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-10 blur-xl"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-xl border border-gray-200">
                <img
                  src={CfoDashboard1}
                  loading="lazy"
                  alt="AI Powered CFO Dashboard"
                  className="w-full rounded-lg sm:rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-500"
                />
                {/* Image Badge */}
                <div className="absolute -bottom-3 -right-3 bg-white rounded-lg shadow-lg px-4 py-2 border border-gray-200">
                  <span className="text-sm font-semibold text-gray-800">
                    Live Preview
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="order-1 lg:order-2 space-y-4 ">
            <div className="space-y-4 ">
              {Analytics.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl sm:rounded-2xl p-4 shadow-lg hover:shadow-xl border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-purple-600">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <ul className="space-y-2">
                        {item.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-gray-600 flex items-start gap-2 text-sm sm:text-base"
                          >
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold text-base sm:text-lg px-8 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                <span>Get Free Demo Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-white px-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center border-8 border-white shadow-lg">
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Business Health Check Section */}
        <div className="mb-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-900">Business Health Check</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                In Just 60 Seconds
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get instant insights into your financial health with our
              AI-powered analysis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div>
              <div className="space-y-8">
                {/* Main Description */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 border border-gray-200 shadow-lg">
                  <p className=" text-gray-700 leading-relaxed">
                    This Dashboard gives a CFO exactly what they need at a
                    glance. It pulls together every critical GST metric—sales,
                    purchases, ITC, refunds, demands, notices, and
                    mismatches—and turns it into a simple, decision-ready view.
                  </p>
                </div>

                {/* Pain Points */}
                <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-4 border border-rose-100">
                  <div className="flex items-center gap-3 ">
                    <div className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-rose-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      Instead of digging through:
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {[
                      { text: "Spreadsheets for hours", icon: "📊" },
                      { text: "Chasing accounts team for updates", icon: "🏃‍♂️" },
                      { text: "Manual data compilation", icon: "✍️" },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-4">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-gray-700 text">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Result */}
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-4 border border-emerald-100 relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-200/20 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 ">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        Result:
                      </h4>
                    </div>
                    <p className="text-gray-800 text-base font-medium mb-2">
                      See the entire indirect tax position in one clean screen
                    </p>
                    <p className="text-gray-600">
                      Real-time insights, automated reports, and predictive
                      analytics
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="group relative w-full bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-700 hover:to-purple-700 text-white font-semibold text-lg px-6 py-2 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    <Clock className="w-5 h-5" />
                    <span>Get Free 60-Second Health Check</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right Side - Dashboard Preview */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-green-400 rounded-3xl blur opacity-30 group-hover:opacity-40 transition duration-500"></div>

              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-1 border border-gray-200/50 shadow-2xl">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={CfoDashboard2}
                    alt="Business Health Check Dashboard"
                    className="w-full transform group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>

                {/* Timer Badge */}
                <div className="absolute -top-3 -left-3">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-bold">
                      60-Second Analysis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
