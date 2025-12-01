// import AnalyticsImg1 from "../../../assets/gstservice.png";
// import AnalyticsImg from "../../../assets/aipowered.png";

// function GstServices() {
//   const AiPoweredTool = [
//     {
//       id: 1,
//       title: "AI-Powered GST Management Automated Reconciliation",
//       description:
//         "AI-powered matching of purchase records with GSTR-2A/2B to maximize ITC claims.",
//     },
//     {
//       id: 2,
//       title: "Deadline Alerts",
//       description:
//         "Never miss a filing deadline with automated reminders & task management.",
//     },
//     {
//       id: 3,
//       title: "Notice Management",
//       description:
//         "Early detection and expert handling of GST notices to prevent penalties.",
//     },
//     {
//       id: 4,
//       title: "Real-time Analytics",
//       description:
//         "Comprehensive dashboards with actionable insights on your GST position.",
//     },
//   ];

//   return (
//     <>
//       <section className="bg-backgroundPrimary text-white py-16 px-6 md:px-12 lg:px-20">
//         {/* Top Heading */}
//         <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
//           AI–POWERED GST ANALYTICS TOOL
//         </h2>

//         {/* Wrapper with equal height columns */}
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-stretch">
//           {/* LEFT SIDE - Image Section */}
//           <div className="flex justify-center order-2 lg:order-1">
//             <div className="bg-white/5  rounded-2xl shadow-xl w-full h-full flex items-center justify-center">
//               <img
//                 src={AnalyticsImg}
//                 alt="GST Analytics Dashboard"
//                 className="w-full h-full object-cover rounded-lg shadow-lg"
//               />
//             </div>
//           </div>

//           {/* RIGHT SIDE - Feature Cards */}
//           <div className="order-1 lg:order-2 flex flex-col justify-center">
//             <div className="space-y-4 h-full">
//               {AiPoweredTool.map((tool) => (
//                 <div
//                   key={tool.id}
//                   className="bg-white/5 rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-500 hover:border-purple-300 group hover:translate-x-2"
//                 >
//                   <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-purple-200 transition-colors">
//                     {tool.title}
//                   </h3>
//                   <p className="text-gray-300 leading-relaxed">
//                     {tool.description}
//                   </p>
//                   {/* Decorative element */}
//                   <div className="w-0 group-hover:w-12 h-0.5 bg-purple-400 mt-3 transition-all duration-300"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* CTA BUTTON */}
//         <div className="text-center mt-12">
//           <button className="bg-purple-600 hover:bg-purple-700 px-8 py-2 rounded-full text-lg font-medium shadow-lg transition-all duration-300 transform hover:scale-105">
//             Book a Free GST Review
//           </button>
//         </div>
//       </section>

//       <section className="w-full bg-backgroundPrimary text-white py-16 px-4 md:px-12 lg:px-20">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-5xl font-bold leading-tight">
//             GST Health Check -In Just{" "}
//             <span className="text-purple-400">60 Seconds</span>
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           {/* Left side - Content */}
//           <div className="space-y-6">
//             <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
//               <p className="text-gray-200 text-lg md:text-xl leading-relaxed whitespace-pre-line">
//                 Find out if your GST compliance is Helping or hurting your
//                 business— Get a free, AI-powered report with Actionable
//                 insights.
//               </p>
//             </div>

//             <div className="bg-white/5 rounded-2xl p-8 border border-purple-500/30">
//               <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium whitespace-pre-line">
//                 Answer a few quick questions and Discover your GST Compliance
//                 Score. We'll analyze your filings, ITC status, and potential
//                 risks - Then Share a personalized improvement Plan.
//               </p>
//             </div>

//             {/* CTA Button */}
//             <div className="pt-4">
//               <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-8 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
//                 Check Free Income Tax Status Now
//               </button>
//             </div>
//           </div>

//           {/* Right side - Image */}
//           <div className="flex justify-center lg:justify-start">
//             <div className="relative">
//               <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-1 shadow-2xl">
//                 <div className="bg-white rounded-xl p-6">
//                   <img
//                     src={AnalyticsImg1}
//                     loading="lazy"
//                     className="w-full max-w-md h-auto rounded-lg"
//                     alt="Income Tax Status Dashboard"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default GstServices;

import AnalyticsImg1 from "../../../assets/gstservice.png";
import AnalyticsImg from "../../../assets/aipowered.png";
import {
  Sparkles,
  Bell,
  AlertTriangle,
  BarChart3,
  Clock,
  Shield,
  CheckCircle,
  Zap,
  TrendingUp,
  Target,
  ArrowRight,
} from "lucide-react";

function GstServices() {
  const AiPoweredTool = [
    {
      id: 1,
      title: "AI-Powered GST Management Automated Reconciliation",
      description:
        "AI-powered matching of purchase records with GSTR-2A/2B to maximize ITC claims.",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Deadline Alerts",
      description:
        "Never miss a filing deadline with automated reminders & task management.",
      icon: <Bell className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Notice Management",
      description:
        "Early detection and expert handling of GST notices to prevent penalties.",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-amber-500 to-orange-500",
    },
    {
      id: 4,
      title: "Real-time Analytics",
      description:
        "Comprehensive dashboards with actionable insights on your GST position.",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-emerald-500 to-green-500",
    },
  ];

  return (
    <>
      {/* First Section */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              AI–Powered GST Analytics Tool
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced GST management with artificial intelligence for maximum
              efficiency
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-6">
            {/* Left Side - Image */}
            <div className="relative group order-2 lg:order-1">
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-40 transition duration-500"></div>

              <div className="relative bg-white rounded-2xl p-2 border border-gray-200 shadow-2xl overflow-hidden">
                <img
                  src={AnalyticsImg}
                  alt="GST Analytics Dashboard"
                  className="w-full rounded-xl transform group-hover:scale-[1.02] transition-transform duration-700"
                />

                {/* Live Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">
                      Live Demo
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Feature Cards */}
            <div className="space-y-4 order-1 lg:order-2">
              {AiPoweredTool.map((tool) => (
                <div
                  key={tool.id}
                  className="group relative overflow-hidden bg-white rounded-2xl p-4 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  {/* Animated Border */}
                  <div
                    className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${tool.color}`}
                  ></div>

                  <div className="flex items-start gap-4">
                    {/* Icon Container */}
                    <div
                      className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${tool.color
                        .replace("from-", "from-")
                        .replace(
                          "to-",
                          "to-"
                        )} bg-opacity-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div
                        className={`bg-clip-text bg-gradient-to-r ${tool.color}`}
                      >
                        {tool.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {tool.description}
                      </p>

                      {/* Animated Underline */}
                      <div className="w-0 group-hover:w-16 h-0.5 mt-2 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-700 hover:to-purple-700 text-white font-semibold text-lg px-6 py-2 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Shine Effect */}
              <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              <span className="relative">Book a Free GST Review</span>
              <ArrowRight className="w-5 h-5 relative group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
           
          
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              GST Health Check
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-600">
                In Just 60 Seconds
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover your GST compliance status instantly with AI-powered
              analysis
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Card 1 */}
              <div className="relative overflow-hidden bg-white rounded-2xl p-4 border border-gray-200 shadow-lg">
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-lg text-gray-800 leading-relaxed font-medium">
                      Find out if your GST compliance is helping or hurting your
                      business.
                    </p>
                    <p className="text-gray-600 ">
                      Get a free, AI-powered report with actionable insights.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-4 border border-emerald-100 shadow-lg">
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-lg text-gray-800 leading-relaxed font-medium">
                      Answer a few quick questions and discover your GST
                      Compliance Score.
                    </p>
                    <p className="text-gray-700 ">
                      We'll analyze your filings, ITC status, and potential
                      risks — then share a personalized improvement plan.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits List */}
              <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  What you'll get:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: <CheckCircle className="w-4 h-4 text-green-500" />,
                      text: "Compliance Score",
                    },
                    {
                      icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
                      text: "ITC Optimization",
                    },
                    {
                      icon: (
                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                      ),
                      text: "Risk Assessment",
                    },
                    {
                      icon: <BarChart3 className="w-4 h-4 text-purple-500" />,
                      text: "Actionable Insights",
                    },
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      {benefit.icon}
                      <span className="text-gray-700">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="group relative w-full sm:w-auto bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-500 hover:to-purple-700 text-white font-semibold text-lg px-6 py-2 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    <Clock className="w-5 h-5" />
                    <span>Check Free GST Health Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-green-400 rounded-3xl blur opacity-30 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-2 border border-gray-200 shadow-2xl overflow-hidden">
                <img
                  src={AnalyticsImg1}
                  alt="GST Health Check Dashboard"
                  loading="lazy"
                  className="w-full rounded-xl transform group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GstServices;
