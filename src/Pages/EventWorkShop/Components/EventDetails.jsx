import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import RandoMImage from "../../../assets/randomblog.jpg";

const EventDetailsPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [similarEvents, setSimilarEvents] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [activeSection, setActiveSection] = useState(0);

  // Mock data - in real app, this would come from API
  const allEvents = [
    {
      id: 1,
      title: "Startup Finance Bootcamp",
      description:
        "A focused workshop guiding founders on taxation, compliance, and fundraising.",
      fullDescription: `This comprehensive bootcamp is designed specifically for startup founders and entrepreneurs looking to master the financial aspects of running a successful business. Over the course of this intensive workshop, you'll gain practical insights into:
      
• Tax planning and optimization strategies for startups
• Compliance requirements and regulatory frameworks
• Fundraising techniques and investor pitch preparation
• Financial modeling and cash flow management
• Equity structuring and cap table management
• GST and other statutory compliance requirements

Our expert facilitators include seasoned CFOs, tax consultants, and successful entrepreneurs who have helped numerous startups navigate their financial journey.`,
      date: "22 Sep 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Bengaluru",
      venue: "TechHub Innovation Center, Koramangala",
      tag: "69+ Founders attended",
      img: RandoMImage,
      category: "workshop",
      speakers: [
        { name: "Kapil Mahani", role: "Indirect Tax Partner" },
        { name: "Devan Gupta", role: "Managing Partner " },
        { name: "Aanchal Malhotra", role: "Strategic Advisor" },
      ],
      summary: {
        sections: [
          {
            title: "Rise of Online Education and Virtual Workspaces",
            content: `When schools and colleges suddenly declared a shutdown, semesters, exams and every other assignment was shifted to online portals such as Zoom, Google Meet, Skype, among a few others. These forums saw huge traffic, and increased economic gains from the lockdown situation. Every conference, exam and submission rely on the WiFi provider companies, and these online platforms. This reliability has opened opportunities for the online platforms to become reapers of large economic gains. Other than these forums, students and teachers are seen sharing slides, assignments, presentations. In the near future, this employment of virtual reality in the world of education and formal workspaces has great potential of emerging to become a permanent form of interaction between colleagues. Even with the situation toning down in the world, the risk of face-to-face interactions will be consuming of international fear to such an extent that education will have to take on a more online that offline approach. This would mean an evolution in the system of education.`,
          },
          {
            title: "Challenges of Digital Divide in Education",
            content: `The rapid shift to online education has highlighted significant disparities in access to technology and internet connectivity. Many students from rural areas and low-income families struggle to participate in digital learning due to lack of devices, reliable internet, or digital literacy. This digital divide threatens to widen existing educational inequalities and requires immediate attention from policymakers and educational institutions.`,
          },
          {
            title: "Future of Digital Learning",
            content: `As we move forward, blended learning models combining online and offline education are likely to become the norm. Educational institutions must invest in digital infrastructure and teacher training to ensure equitable access to quality education for all students.`,
          },
        ],
      },
    },
    {
      id: 2,
      title: "Webinar: Navigating India's New Tax Regime",
      description:
        "Exploring the practical implications of the 2025 Budget for individuals and corporates.",
      fullDescription:
        "Deep dive into the latest tax reforms and their impact on businesses and individuals...",
      date: "22 Sep 2025",
      location: "Online",
      tag: "300+ Live Attendance",
      img: RandoMImage,
      category: "webinar",
    },
    {
      id: 3,
      title: "Corporate Governance & Compliance Roundtable",
      description:
        "Discussing governance frameworks, risk management, and compliance best practices.",
      fullDescription:
        "Interactive roundtable discussion with industry leaders...",
      date: "22 Sep 2025",
      location: "Mumbai",
      tag: "25+ Leaders Participated",
      img: RandoMImage,
      category: "roundtable",
    },
  ];

  useEffect(() => {
    // Find current event
    const currentEvent = allEvents.find((e) => e.id === parseInt(eventId));
    setEvent(currentEvent);

    // Find similar events (excluding current event)
    if (currentEvent) {
      const similar = allEvents
        .filter((e) => e.id !== parseInt(eventId))
        .slice(0, 3);
      setSimilarEvents(similar);
    }
  }, [eventId]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for registering! We'll contact you soon.");
  };

  if (!event) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Event Not Found
          </h2>
          <button
            onClick={() => navigate("/events")}
            className="px-6 py-2 bg-buttonBackground hover:bg-buttonBackgroundHover text-white rounded-lg transition-colors duration-300"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Event Header */}
      <div className="bg-backgroundPrimary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="py-12 sm:py-16 lg:py-20">
            <button
              onClick={() => navigate(-1)}
              className="mt-4 flex items-center gap-2 text-blue-200 hover:text-white mb-8 transition-colors duration-300 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-300">
                ←
              </span>
              Back to Events
            </button>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              {/* Event Image */}
              <div className="lg:w-2/5 w-full">
                <div className="relative group">
                  <img
                    src={event.img}
                    alt={event.title}
                    loading="lazy"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Event Info */}
              <div className="lg:w-3/5 w-full">
                <div className="mb-6">
                  <span className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4 shadow-lg">
                    {event.tag}
                  </span>
                  <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-5xl font-bold mb-4 leading-tight">
                    {event.title}
                  </h1>
                  <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <span className="text-lg sm:text-xl">📅</span>
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs sm:text-sm">Date</p>
                      <p className="font-semibold text-white text-sm sm:text-base">
                        {event.date}
                      </p>
                      {event.time && (
                        <p className="text-blue-100 text-xs sm:text-sm">
                          {event.time}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <span className="text-lg sm:text-xl">📍</span>
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs sm:text-sm">
                        Location
                      </p>
                      <p className="font-semibold text-white text-sm sm:text-base">
                        {event.location}
                      </p>
                      {event.venue && (
                        <p className="text-blue-100 text-xs sm:text-sm truncate">
                          {event.venue}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button className="px-6 py-2 bg-buttonBackground text-white font-medium rounded-xl hover:bg-buttonBackgroundHover transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base shadow-lg">
                    Register Now
                  </button>
                  <button className="px-6 py-2 border-2 border-white text-white font-medium rounded-xl hover:bg-buttonBackground transition-all duration-300 text-sm sm:text-base">
                    Save Event
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-4 sm:px-6 lg:px-8 max-w-7xl py-8 sm:py-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Sidebar - Table of Contents */}
          {event.summary && (
            <div className="xl:col-span-3">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 sticky top-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-purple-400">📋</span>
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {event.summary.sections.map((section, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSection(index)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                        activeSection === index
                          ? "bg-blue-50 border border-blue-200 text-blue-700 font-semibold"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            activeSection === index
                              ? "bg-blue-600"
                              : "bg-gray-300"
                          }`}
                        ></div>
                        <span className="text-sm font-medium">
                          {section.title}
                        </span>
                      </div>
                    </button>
                  ))}
                </nav>

                {/* Quick Stats */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">69+</div>
                      <div className="text-xs text-gray-500">Attendees</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">
                        4.8
                      </div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Middle Content - Event Summary & Details */}
          <div className="xl:col-span-6 space-y-6 lg:space-y-8">
            {/* Event Summary */}
            {event.summary && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Event Summary
                  </h2>
                </div>

                {/* Current Active Section */}
                <div className="mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    {event.summary.sections[activeSection]?.title}
                  </h3>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                    {event.summary.sections[activeSection]?.content}
                  </div>
                </div>

                {/* Section Navigation */}
                <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                  <button
                    onClick={() =>
                      setActiveSection(Math.max(0, activeSection - 1))
                    }
                    disabled={activeSection === 0}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ← Previous
                  </button>
                  <div className="flex items-center gap-2">
                    {event.summary.sections.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSection(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          activeSection === index
                            ? "bg-blue-500 w-4"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() =>
                      setActiveSection(
                        Math.min(
                          event.summary.sections.length - 1,
                          activeSection + 1
                        )
                      )
                    }
                    disabled={
                      activeSection === event.summary.sections.length - 1
                    }
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next →
                  </button>
                </div>
              </section>
            )}

            {/* Full Description */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  About This Event
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line leading-relaxed">
                {event.fullDescription}
              </div>
            </section>

            {/* Speakers */}
            {event.speakers && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Our Speakers
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                        {speaker.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg">
                        {speaker.name}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {speaker.role}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Sidebar - Registration Form */}
          <div className="xl:col-span-3 space-y-6 lg:space-y-8">
            {/* Registration Form */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 sticky top-6">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-lg">🎫</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Register Now
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Secure your spot today
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-gray-50"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="flex gap-3">
                   
                   
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="9876543210"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-gray-50"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-gray-50"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your expectations..."
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-gray-50 resize-none"
                  />
                </div>

                {/* Newsletter Signup */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                  />
                  <label
                    htmlFor="newsletter"
                    className="text-sm text-gray-600 leading-tight"
                  >
                    Sign up for our email list for updates, promotions, and more
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
                >
                  Submit Registration
                </button>
              </form>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  By registering, you agree to our Terms and Privacy Policy
                </p>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-blue-600">ℹ️</span>
                Event Details
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-sm">📅</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date & Time</p>
                    <p className="font-semibold text-gray-900 text-sm">
                      {event.date}
                    </p>
                    {event.time && (
                      <p className="text-gray-600 text-xs">{event.time}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-sm">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold text-gray-900 text-sm">
                      {event.location}
                    </p>
                    {event.venue && (
                      <p className="text-gray-600 text-xs">{event.venue}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-sm">🎯</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-semibold text-gray-900 text-sm capitalize">
                      {event.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Events */}
        <section className="mt-12 sm:mt-16 pt-12 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Similar Events
            </h2>
            <Link
              to="/events"
              className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
            >
              View All Events
              <span>→</span>
            </Link>
          </div>

          {similarEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarEvents.map((similarEvent) => (
                <div
                  key={similarEvent.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={similarEvent.img}
                      alt={similarEvent.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                        {similarEvent.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-medium text-blue-600 mb-2">
                      {similarEvent.date} • {similarEvent.location}
                    </p>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {similarEvent.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                      {similarEvent.description}
                    </p>
                    <Link
                      to={`/events/${similarEvent.id}`}
                      className="inline-flex items-center gap-2 bg-buttonBackground text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-buttonBackgroundHover  transition-all duration-300"
                    >
                      Learn More
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No similar events found.</p>
              <Link
                to="/events"
                className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-semibold"
              >
                Browse All Events
              </Link>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default EventDetailsPage;
