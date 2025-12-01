// import { useState } from "react";
// import ResourceCard from "../../../Components/Common/ResourceCard";
// import img1 from "../../../assets/trustedleading1.png";
// import img2 from "../../../assets/trustedleading1.png";
// import img3 from "../../../assets/trustedleading1.png";

// const Resources = () => {
//   const [activeTab, setActiveTab] = useState("Updates");

//   const resources = {
//     Updates: [
//       {
//         image: img1,
//         title:
//           "Form DPT-3 Filing Deadline: Avoid Penalties with Timely Compliance",
//       },
//       {
//         image: img2,
//         title: "Andhra Pradesh Textile and Apparel Policy 2022–27",
//       },
//       {
//         image: img3,
//         title:
//           "Karnataka Semiconductor Policy: Subsidies, Capex & ESDM Benefits",
//       },
//     ],
//     Blogs: [
//       {
//         image: img2,
//         title: "5 Key Tax Planning Strategies for Small Businesses",
//       },
//       {
//         image: img1,
//         title: "Top 10 Financial Mistakes Startups Make",
//       },
//     ],
//     News: [
//       {
//         image: img3,
//         title: "Government Announces New MSME Support Scheme",
//       },
//     ],
//   };

//   const tabs = ["Updates", "Blogs", "News"];

//   return (
//     <section className="bg-backgroundPrimary text-white py-16 px-6 md:px-12 lg:px-20">
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <h2 className="text-2xl md:text-4xl font-semibold mb-6">Resources</h2>

//         {/* Filter Buttons */}
//         <div className="flex justify-center space-x-3">
//           {tabs?.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-5 py-2 rounded-full text-base font-medium transition-all duration-300 ${
//                 activeTab === tab
//                   ? "bg-purple-600 text-white"
//                   : "bg-white/10 text-gray-300 hover:bg-white/20"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Cards */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {resources[activeTab].map((item, index) => (
//           <ResourceCard key={index} {...item} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Resources;

import { useState } from "react";
import ResourceCard from "../../../Components/Common/ResourceCard1";
import img1 from "../../../assets/r1.jpg";
import img2 from "../../../assets/r2.jpg";
import img3 from "../../../assets/r3.jpg";

const Resources = () => {
  const [activeTab, setActiveTab] = useState("Updates");

  const resources = {
    Updates: [
      {
        image: img1,
        title:
          "Form DPT-3 Filing Deadline: Avoid Penalties with Timely Compliance",
        description:
          "Learn about the crucial deadlines and compliance requirements for Form DPT-3 filing to avoid penalties and ensure regulatory adherence.",
        date: "Dec 15, 2024",
        readTime: "5 min read",
        category: "Compliance",
        resourceType: "Updates",
      },
      {
        image: img2,
        title: "Andhra Pradesh Textile and Apparel Policy 2022–27",
        description:
          "Comprehensive analysis of the new textile policy offering subsidies, incentives, and growth opportunities for businesses in Andhra Pradesh.",
        date: "Dec 12, 2024",
        readTime: "7 min read",
        category: "Policy",
        resourceType: "Updates",
      },
      {
        image: img3,
        title: "GST Return Filing: Latest Updates and Compliance Guidelines",
        description:
          "Stay updated with the latest GST return filing procedures and compliance guidelines for seamless business operations.",
        date: "Dec 8, 2024",
        readTime: "4 min read",
        category: "Tax",
        resourceType: "Updates",
      },
    ],
    Blogs: [
      {
        image: img1,
        title: "5 Key Tax Planning Strategies for Small Businesses",
        description:
          "Discover effective tax planning strategies that can help small businesses optimize their tax liabilities and improve profitability.",
        date: "Nov 28, 2024",
        readTime: "6 min read",
        category: "Tax",
        resourceType: "Blogs",
      },
      {
        image: img2,
        title: "Top 10 Financial Mistakes Startups Make",
        description:
          "Learn about common financial pitfalls that startups encounter and how to avoid them for sustainable growth.",
        date: "Nov 25, 2024",
        readTime: "8 min read",
        category: "Startup",
        resourceType: "Blogs",
      },
    ],
    News: [
      {
        image: img3,
        title: "Government Announces New MSME Support Scheme",
        description:
          "Latest government initiative to support MSMEs with enhanced credit facilities and technology upgradation subsidies.",
        date: "Nov 15, 2024",
        readTime: "3 min read",
        category: "News",
        resourceType: "News",
      },
      {
        image: img1,
        title: "RBI Updates Foreign Investment Policy Framework",
        description:
          "Recent RBI circular updates the foreign direct investment framework with simplified procedures and new sectors.",
        date: "Nov 12, 2024",
        readTime: "4 min read",
        category: "Policy",
        resourceType: "News",
      },
    ],
  };

  const tabs = ["Updates", "Blogs", "News"];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto md:ml-8 md:mr-8">
        {/* Heading Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Our <span className="text-purple-400">Resources</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest compliance updates, insightful blogs,
            and important news to drive your business forward.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12 sm:mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-1.5 shadow-sm border border-gray-200">
            <div className="flex flex-wrap justify-center gap-1">
              {tabs?.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-xl text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-purple-400 to-purple-500 text-white shadow-lg shadow-blue-500/25"
                      : "text-gray-600 hover:text-gray-900 hover:bg-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 ">
          {resources[activeTab].map((item, index) => (
            <div key={index} className="group">
              <ResourceCard
                {...item}
                resourceType={activeTab} // Pass the active tab as resourceType
                className="h-full transform group-hover:-translate-y-2 transition-all duration-300 group-hover:shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
