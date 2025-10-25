// import React from "react";

// const EventsList = () => {
//   const upcomingEvents = [
//     {
//       id: 1,
//       title: "Masterclass on GST & Litigation Management",
//       discription : "Masterclass on GST & Litigation Management Masterclass on GST & Litigation Management Masterclass on GST & Litigation Management",
//       date: "4 PM - 22 Sep 2025",
//       location: "Virtual Session",
//       img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?auto=format&fit=crop&w=800&q=80",
//       button: "Register",
//     },
//     {
//       id: 2,
//       title: "Fundraising & Valuation Workshop for Startups",
//       discription : "Masterclass on GST & Litigation Management Masterclass on GST & Litigation Management Masterclass on GST & Litigation Management",
//       date: "4 PM - 22 Sep 2025",
//       location: "Gurugram",
//       img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
//       button: "Book Your Seat",
//     },
//   ];

//   const pastEvents = [
//     {
//       id: 1,
//       title: "Startup Finance Bootcamp",
//       discription : "Masterclass on GST & Litigation Management Masterclass on GST & Litigation Management Masterclass on GST & Litigation Management",
//       date: "22 Sep 2025",
//       location: "Bengaluru",
//       tag: "150+ Founder Attendend",
//       img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
//     },
//     {
//       id: 2,
//       title: "Webinar: Navigating India’s New Tax Regime",
//       discription : "Masterclass on GST & Litigation Management Masterclass on GST & Litigation Management Masterclass on GST & Litigation Management",
//       date: "22 Sep 2025",
//       location: "Online",
//       tag: "300+ live attendence",
//       img: "https://images.unsplash.com/photo-1554224155-3a589f1b7c49?auto=format&fit=crop&w=800&q=80",
//     },
//     {
//       id: 3,
//       title: "Corporate Governance & Compliance Roundtable",
//       discription : "Masterclass on GST & Litigation Management Masterclass on GST & Litigation Management Masterclass on GST & Litigation Management",
//       date: "22 Sep 2025",
//       location: "Mumbai",
//       tag: "25+ leader participate",
//       img: "https://images.unsplash.com/photo-1573164574472-797cdf4a583c?auto=format&fit=crop&w=800&q=80",
//     },
//   ];

//   return (
//     <section className="bg-backgroundPrimary text-white py-16 px-6 md:px-12 lg:px-20 space-y-20">
//       {/* Upcoming Events */}
//       <div>
//         <h2 className="text-2xl md:text-3xl font-semibold mb-10">
//           Upcoming Events
//         </h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           {upcomingEvents.map((event) => (
//             <div
//               key={event.id}
//               className="bg-backgroundSecondary rounded-lg border border-backgroundSecondary overflow-hidden hover:-translate-y-1 transition-transform"
//             >
//               <img
//                 src={event.img}
//                 alt={event.title}
//                 loading="lazy"
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-6">
//                 <p className="text-sm text-[#a793f5] mb-1">
//                   {event.date} • {event.location}
//                 </p>
//                 <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
//                 <button className="bg-white text-[#1a103d] font-semibold px-5 py-2 rounded-full hover:bg-gray-200 transition">
//                   {event.button}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Past Events */}
//       <div>
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
//           <h2 className="text-2xl md:text-3xl font-semibold">Past Events</h2>
//           <div className="flex gap-3">
//             <input
//               type="text"
//               placeholder="Search Event"
//               className="px-4 py-2 rounded-full text-sm bg-buttonBackground/10 border border-[#3b2a70] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//             <button className="bg-buttonBackground hover:bg-buttonBackground text-white font-semibold px-5 py-2 rounded-full text-sm">
//               Search
//             </button>
//           </div>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {pastEvents.map((event) => (
//             <div
//               key={event.id}
//               className="bg-backgroundSecondary border border-backgroundSecondary rounded-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-transform"
//             >
//               <img
//                 src={event.img}
//                 alt={event.title}
//                 loading="lazy"
//                 className="w-full h-44 object-cover"
//               />
//               <div className="p-6 flex flex-col flex-grow">
//                 <span className="text-xs bg-buttonBackground/10 text-buttonBackground px-3 py-1 rounded-full w-fit mb-3  font-semibold">
//                   {event.tag}
//                 </span>
//                 <p className="text-sm text-[#a793f5] mb-1">
//                   {event.date} • {event.location}
//                 </p>
//                 <h3 className="text-lg font-semibold mb-4 flex-grow">
//                   {event.title}
//                 </h3>
//                 <button className="mt-auto bg-white text-[#1a103d] font-semibold px-5 py-2 rounded-full hover:bg-gray-200 transition">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventsList;


import React from "react";
import RandoMImage from '../../../assets/randomblog.jpg';
const EventsList = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Masterclass on GST & Litigation Management",
      discription:
        "Hands-on insights into GST disputes, litigation strategies, and compliance updates for startups and corporates.",
      date: "4 PM - 22 Sep 2025",
      location: "Virtual Session",
      img: RandoMImage,
      button: "Register",
    },
    {
      id: 2,
      title: "Fundraising & Valuation Workshop for Startups",
      discription:
        "Learn how to structure funding, manage investor expectations, and comply with valuation regulations.",
      date: "4 PM - 22 Sep 2025",
      location: "Gurugram",
      img: RandoMImage,
      button: "Book Your Seat",
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Startup Finance Bootcamp",
      discription:
        "A focused knowledge-building session for founders, exploring fundraising and financial modeling.",
      date: "22 Sep 2025",
      location: "Bengaluru",
      tag: "150+ Founders Attended",
      img: RandoMImage,
    },
    {
      id: 2,
      title: "Webinar: Navigating India’s New Tax Regime",
      discription:
        "Exploring the practical implications of the 2025 Budget for individuals and corporates.",
      date: "22 Sep 2025",
      location: "Online",
      tag: "300+ Live Attendance",
      img: RandoMImage,
    },
    {
      id: 3,
      title: "Corporate Governance & Compliance Roundtable",
      discription:
        "Discussing governance frameworks, risk management, and compliance best practices.",
      date: "22 Sep 2025",
      location: "Mumbai",
      tag: "25+ Leaders Participated",
      img: RandoMImage,
    },
  ];

  return (
    <section className="bg-backgroundPrimary text-white py-16 px-6 md:px-12 lg:px-20 space-y-20">
      {/* Upcoming Events */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-backgroundSecondary rounded-lg border border-backgroundSecondary overflow-hidden hover:-translate-y-1 transition-transform"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-[#a793f5] mb-1">
                  {event.date} • {event.location}
                </p>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-300 text-sm mb-5 line-clamp-3">
                  {event.discription}
                </p>
                <button className="bg-white text-[#1a103d] font-semibold px-5 py-2 rounded-full hover:bg-gray-200 transition">
                  {event.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Events */}
      <div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Past Events</h2>

          {/* Search Bar with Button Inside */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search Event"
              className="w-full pl-4 pr-20 py-2 rounded-full text-sm bg-buttonBackground/10 border border-[#3b2a70] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-buttonBackground hover:bg-buttonBackground text-white font-semibold px-4 rounded-full text-sm">
              Search
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event) => (
            <div
              key={event.id}
              className="bg-backgroundSecondary border border-backgroundSecondary rounded-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-transform"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs bg-buttonBackground/10 text-buttonBackground px-3 py-1 rounded-full w-fit mb-3 font-semibold">
                  {event.tag}
                </span>
                <p className="text-sm text-[#a793f5] mb-1">
                  {event.date} • {event.location}
                </p>
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {event.discription}
                </p>
                <button className="bg-white text-[#1a103d] font-semibold px-5 py-2 rounded-full hover:bg-gray-200 transition self-start">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsList;

