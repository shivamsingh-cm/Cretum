import { Construction } from "lucide-react";

function Index() {
  return (
    <section className="min-h-screen bg-backgroundPrimary p-6 sm:p-10 md:p-14 lg:p-16 flex items-center justify-center">
      <div className="max-w-7xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <Construction size={100} className="text-purple-400 animate-pulse" />
        </div>

        {/* Main Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Work in Progress
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          We're working on something amazing! Please check back soon.
        </p>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-2 mb-8">
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
          <div
            className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>

        {/* Progress Indicator */}
        <div className="w-full max-w-xs mx-auto bg-gray-700 rounded-full h-2 mb-4">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-2/3 animate-pulse"></div>
        </div>
        <p className="text-gray-400 text-sm">67% Complete</p>
      </div>
    </section>
  );
}

export default Index;
