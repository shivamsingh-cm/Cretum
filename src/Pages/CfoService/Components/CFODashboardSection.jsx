import React from "react";

// Reusable Card Component
const DashboardCard = ({ image, title, description }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="text-gray-800 font-semibold text-lg sm:text-xl mb-3 text-center group-hover:text-purple-600 transition-colors duration-300">
          {title}
        </h3>
        {description && (
          <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

function CFODashboardSection() {
  const dashboardFeatures = [
    {
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=60",
      title: "Unified Financial View",
      description:
        "Consolidate all financial data into a single dashboard for complete visibility",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=60",
      title: "AI-Driven Automation",
      description:
        "Smart automation that reduces manual work and improves accuracy",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=60",
      title: "Real-Time Risk Alerts",
      description:
        "Instant notifications for financial risks and compliance issues",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=60",
      title: "Expert Review & Support",
      description:
        "Get insights and guidance from experienced financial experts",
    },
  ];

  return (
    <section className="w-full bg-backgroundPrimary py-16 sm:py-18 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6">
            What Makes Our CFO Dashboard Different?
          </h2>

          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            We help CFOs move beyond routine compliance and gain full visibility
            into GST, cash flow, and financial risks that directly impact
            business decisions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
          {dashboardFeatures.map((feature, index) => (
            <DashboardCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-8 ">
          <button className="bg-purple-400 hover:bg-purple-600 transform hover:-translate-y-1 transition-all duration-300 px-8  py-2  rounded-full text-white text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl">
            Transform Your Finance Today
          </button>
        </div>
      </div>
    </section>
  );
}

export default CFODashboardSection;
