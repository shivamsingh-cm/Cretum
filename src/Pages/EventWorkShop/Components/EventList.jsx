// import RandoMImage from "../../../assets/randomblog.jpg";
// const EventsList = () => {
//   const upcomingEvents = [
//     {
//       id: 1,
//       title: "Masterclass on GST & Litigation Management",
//       discription:
//         "Hands-on insights into GST disputes, litigation strategies, and compliance updates for startups and corporates.",
//       date: "4 PM - 22 Sep 2025",
//       location: "Virtual Session",
//       img: RandoMImage,
//       button: "Register",
//     },
//     {
//       id: 2,
//       title: "Fundraising & Valuation Workshop for Startups",
//       discription:
//         "Learn how to structure funding, manage investor expectations, and comply with valuation regulations.",
//       date: "4 PM - 22 Sep 2025",
//       location: "Gurugram",
//       img: RandoMImage,
//       button: "Book Your Seat",
//     },
//   ];

//   const pastEvents = [
//     {
//       id: 1,
//       title: "Startup Finance Bootcamp",
//       discription:
//         "A focused knowledge-building session for founders, exploring fundraising and financial modeling.",
//       date: "22 Sep 2025",
//       location: "Bengaluru",
//       tag: "150+ Founders Attended",
//       img: RandoMImage,
//     },
//     {
//       id: 2,
//       title: "Webinar: Navigating India’s New Tax Regime",
//       discription:
//         "Exploring the practical implications of the 2025 Budget for individuals and corporates.",
//       date: "22 Sep 2025",
//       location: "Online",
//       tag: "300+ Live Attendance",
//       img: RandoMImage,
//     },
//     {
//       id: 3,
//       title: "Corporate Governance & Compliance Roundtable",
//       discription:
//         "Discussing governance frameworks, risk management, and compliance best practices.",
//       date: "22 Sep 2025",
//       location: "Mumbai",
//       tag: "25+ Leaders Participated",
//       img: RandoMImage,
//     },
//   ];

//   return (
//     <section className="bg-backgroundPrimary text-white py-16 px-6 md:px-12 lg:px-20 space-y-20">
//       {/* Upcoming Events */}
//       <div>
//         <h2 className="text-xl md:text-2xl font-medium mb-10">
//           Upcoming Events
//         </h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           {upcomingEvents?.map((event) => (
//             <div
//               key={event.id}
//               className="bg-backgroundSecondary rounded-lg border border-backgroundSecondary overflow-hidden hover:-translate-y-1 transition-transform"
//             >
//               <img
//                 src={event?.img}
//                 alt={event.title}
//                 loading="lazy"
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-6">
//                 <p className="text-lg font-normal text-[#a793f5] mb-1">
//                   {event?.date} • {event?.location}
//                 </p>
//                 <h3 className="text-xl font-medium mb-2">{event?.title}</h3>
//                 <p className="text-gray-300  mb-5 line-clamp-3 text-base font-normal">
//                   {event?.discription}
//                 </p>
//                 <button className="bg-white text-sm font-medium text-[#1a103d]  px-5 py-2 rounded-full hover:bg-gray-200 transition">
//                   {event?.button}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Past Events */}
//       <div>
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
//           <h2 className="text-xl md:text-2xl font-medium">Past Events</h2>

//           {/* Search Bar with Button Inside */}
//           <div className="relative w-full md:w-72">
//             <input
//               type="text"
//               placeholder="Search Event"
//               className="w-full pl-4 pr-20 py-2 rounded-full text-sm bg-buttonBackground/10 border border-[#3b2a70] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//             <button className="absolute right-1 top-1 bottom-1 bg-buttonBackground hover:bg-buttonBackground text-white font-semibold px-4 rounded-full text-sm">
//               Search
//             </button>
//           </div>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {pastEvents?.map((event) => (
//             <div
//               key={event.id}
//               className="bg-backgroundSecondary border border-backgroundSecondary rounded-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-transform"
//             >
//               <img
//                 src={event?.img}
//                 alt={event.title}
//                 loading="lazy"
//                 className="w-full h-44 object-cover"
//               />
//               <div className="p-6 flex flex-col flex-grow">
//                 <span className="text-sm font-normal bg-buttonBackground/10 text-buttonBackground px-3 py-1 rounded-full w-fit mb-3 ">
//                   {event.tag}
//                 </span>
//                 <p className="text-lg font-normal text-[#a793f5] mb-1">
//                   {event.date} • {event.location}
//                 </p>
//                 <h3 className="text-xl  font-medium mb-2">{event?.title}</h3>
//                 <p className="text-gray-300 text-base font-normal mb-4 line-clamp-3">
//                   {event.discription}
//                 </p>
//                 <button className="bg-white text-sm text-[#1a103d] font-normal px-5 py-2 rounded-full hover:bg-gray-200 transition self-start">
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

import RandoMImage from "../../../assets/randomblog.jpg";
import { Link } from "react-router-dom";

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
      title: "Webinar: Navigating India's New Tax Regime",
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
    <section className="bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-8 xl:px-20 space-y-16">
      {/* Upcoming Events */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {upcomingEvents?.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={event?.img}
                alt={event.title}
                loading="lazy"
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="p-6">
                <p className="text-base font-medium text-purple-400 mb-2">
                  {event?.date} • {event?.location}
                </p>
                <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                  {event?.title}
                </h3>
                <p className="text-gray-600 mb-5 line-clamp-3 text-base leading-relaxed">
                  {event?.discription}
                </p>
                <button className="bg-buttonBackground text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-buttonBackgroundHover transition-colors duration-300">
                  {event?.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Events */}
      <div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Past Events
          </h2>

          {/* Search Bar with Button Inside */}
          <div className="relative w-full lg:w-80">
            <input
              type="text"
              placeholder="Search Event"
              className="w-full pl-4 pr-24 py-3 rounded-full text-sm bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-buttonBackground hover:bg-buttonBackgroundHover text-white font-semibold px-5 rounded-full text-sm transition-colors duration-300">
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {pastEvents?.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={event?.img}
                alt={event.title}
                loading="lazy"
                className="w-full h-40 sm:h-44 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-sm font-medium bg-gray-200 text-purple-600 px-3 py-1.5 rounded-full w-fit mb-3">
                  {event.tag}
                </span>
                <p className="text-base font-medium text-blue-600 mb-2">
                  {event.date} • {event.location}
                </p>
                <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                  {event?.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-4 line-clamp-3 flex-grow">
                  {event.discription}
                </p>
                <Link
                  to={`/events/${event.id}`}
                  className="bg-buttonBackground text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-buttonBackgroundHover transition-colors duration-300 self-start"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsList;
