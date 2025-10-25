import React from 'react';
import LeaderImage from '../../../assets/leader.png'
const OurLeader = () => {
  
  const leaders = [
    {
      id: 1,
      name: "Devan Gupta",
      title: "Managing Partner | Ex-KPMG, PwC",
      imageUrl: LeaderImage,
      specializations: [
        "Structuring and Assurance",
      ],
      experience: "13+ years",
      keyClients: "NDTV, HCL, Medanta, Ebix",
      qualification: "FCA, B.Com (Hons)",
      focus: "Business Structuring and Corporate Advisory"
    },
    {
      id: 2,
      name: "Kapil Mahani",
      title: "Indirect Tax Partner | Ex-EY",
      imageUrl: LeaderImage,
      specializations: [
        "Indirect Taxation (GST), Customs & Foreign Trade",
      ],
      experience: "13+ years",
      keyClients: "Grohe, Lixil, Nivea, Mahindra, Nokia, Huawei",
      qualification: "FCA, B.Com (Hons)",
      focus: "GST, Customs & Foreign Trade Policy"
    },
  ];

  return (
    <div className="min-h-screen bg-backgroundPrimary text-white font-sans p-6 sm:p-10 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">

        
        <h1 className="text-xl sm:text-4xl font-extrabold text-white mb-4 sm:mb-6 lg:mb-8">
          Our Leadership Champions
        </h1>

        {/* Leadership Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="bg-backgroundPrimaryDark/40 rounded-xl overflow-hidden shadow-xl transition duration-300 ease-in-out hover:scale-[1.01] hover:shadow-2xl flex flex-col"
            >
              {/* Image Section */}
              <div className="relative w-full aspect-[3/2] overflow-hidden">
                <img
                  src={leader.imageUrl}
                  alt={`Portrait of ${leader.name}`}
                  className="w-full h-full object-cover rounded-t-xl"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/6b21a8/ffffff?text=Image+Unavailable"; }}
                />
              </div>

              {/* Text Content Section */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col">
                <h3 className="text-xl  font-bold text-white mb-2">
                  {leader.name}
                </h3>
                <p className="text-purple-300 text-md mb-6">
                  {leader.title}
                </p>

                {/* Details List */}
                <ul className="space-y-2 text-white/70 flex-grow">
                  <li>
                    <span className="font-semibold text-white/70">Specialization:</span>{" "}
                    {leader.specializations.join(", ")}
                  </li>
                  <li>
                    <span className="font-semibold text-white/70">Experience:</span>{" "}
                    {leader.experience}
                  </li>
                  <li>
                    <span className="font-semibold text-white/70">Key Clients:</span>{" "}
                    {leader.keyClients}
                  </li>
                  <li>
                    <span className="font-semibold text-white/70">Qualification:</span>{" "}
                    {leader.qualification}
                  </li>
                  <li>
                    <span className="font-semibold text-white/70">Focus:</span>{" "}
                    {leader.focus}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OurLeader;