import React from 'react';
import LeaderImage from '../../../assets/leader.png'
const OurBrand = () => {

  const advisors = [
    {
      id: 1,
      name: "Aanchal Malhotra",
      title: "Strategic Advisor | Ex-Ernst & Young",
      imageUrl: LeaderImage, 
      details: [
        { label: "Role", value: "Mergers & Acquisitions, Investment Banking and Tech Experience: Over 13 years" },
        { label: "Clients Managed", value: "NITI Aayog, Ministry of Afghanistan, Ministry of Liberia, Honda" },
        { label: "Qualification", value: "ACA, B.Com (Hons.)" },
      ],
    },
    {
      id: 2,
      name: "Jai Tahalani",
      title: "Legal Advisor",
      imageUrl: LeaderImage,
      details: [
        { label: "Expertise", value: "Legal Matter Advocate" },
        { label: "Role", value: "Litigation and Legal Opinion" },
        { label: "Experience", value: "Over 10 years" },
        { label: "Clients Managed", value: "Ebix, Empaxis, Grohe" },
        { label: "Qualification", value: "LLB, Bcom (Hons)" },
      ],
    },
    {
      id: 3,
      name: "Arun Khetan",
      title: "Foreign Trade Policy Consultant", 
      imageUrl: LeaderImage,
      details: [
        { label: "Role", value: "Foreign Trade Policy consultant" },
        { label: "Experience", value: "Over 24 years Clients Managed" },
        { label: "Qualification", value: "B. Com (Hons)" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-backgroundPrimary text-white font-sans p-6 sm:p-10 lg:p-16">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <h1 className="text-xl sm:text-4xl font-extrabold text-white mb-4 sm:mb-6 lg:mb-8">
          Our Board of Advisors
        </h1>

        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {advisors.map((advisor) => (
            <div
              key={advisor.id}
              className="bg-backgroundPrimaryDark/40 rounded-xl overflow-hidden shadow-xl transition duration-300 ease-in-out hover:scale-[1.01] hover:shadow-2xl flex flex-col"
            >
              {/* Image Section */}
              <div className="relative w-full aspect-[3/2] overflow-hidden">
                <img
                  src={advisor.imageUrl}
                  alt={`Portrait of ${advisor.name}`}
                  className="w-full h-full object-cover rounded-t-xl"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/6b21a8/ffffff?text=Image+Unavailable"; }}
                />
              </div>

              {/* Text Content Section */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col">
                <h3 className="text-xl  font-bold text-white mb-2">
                  {advisor.name}
                </h3>
                <p className="text-purple-300 text-md  mb-6">
                  {advisor.title}
                </p>

                {/* Details List */}
                <ul className="space-y-2 text-white/80  flex-grow">
                  {advisor.details.map((detail, index) => (
                    <li key={index}>
                      <span className="font-semibold text-white/70">{detail.label}:</span>{" "}
                      {detail.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
export default OurBrand;