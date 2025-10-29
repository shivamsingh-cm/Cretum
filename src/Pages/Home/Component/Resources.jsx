import React, { useState } from "react";
import ResourceCard from "../../../Components/Common/ResourceCard";

import img1 from "../../../assets/trustedleading1.png";
import img2 from "../../../assets/trustedleading1.png";
import img3 from "../../../assets/trustedleading1.png";

const Resources = () => {
  const [activeTab, setActiveTab] = useState("Updates");

  const resources = {
    Updates: [
      {
        image: img1,
        title: "Form DPT-3 Filing Deadline: Avoid Penalties with Timely Compliance",
      },
      {
        image: img2,
        title: "Andhra Pradesh Textile and Apparel Policy 2022–27",
      },
      {
        image: img3,
        title: "Karnataka Semiconductor Policy: Subsidies, Capex & ESDM Benefits",
      },
    ],
    Blogs: [
      {
        image: img2,
        title: "5 Key Tax Planning Strategies for Small Businesses",
      },
      {
        image: img1,
        title: "Top 10 Financial Mistakes Startups Make",
      },
    ],
    News: [
      {
        image: img3,
        title: "Government Announces New MSME Support Scheme",
      },
    ],
  };

  const tabs = ["Updates", "Blogs", "News"];

  return (
    <section className="bg-backgroundPrimary text-white py-16 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">Resources</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-3">
          {tabs?.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-purple-600 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {resources[activeTab].map((item, index) => (
          <ResourceCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Resources;
