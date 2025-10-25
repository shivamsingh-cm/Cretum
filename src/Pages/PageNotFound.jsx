import React from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-backgroundPrimary via-[#2C1A4C] to-[#120B24] text-white px-6 text-center">
    
      <h1 className="text-[8rem] md:text-[12rem] font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text animate-pulse">
        404
      </h1>

    
      <h2 className="text-2xl md:text-3xl font-semibold mb-3">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-300 max-w-md mb-8 text-sm md:text-base">
        The page you’re looking for doesn’t exist or has been moved.
        Let’s get you back on track!
      </p>

    
      <button
        onClick={() => navigate("/home")}
        className="flex items-center gap-2 bg-gradient-to-r from-buttonBackground to-pink-500 hover:from-buttonBackgroundHover hover:to-pink-600 transition-all px-6 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-xl"
      >
        <Home size={18} />
        Go Home
      </button>

  
      <div className="absolute bottom-8 text-xs text-gray-500">
        © {new Date().getFullYear()} Cretum Advisory
      </div>
    </section>
  );
};

export default PageNotFound;
