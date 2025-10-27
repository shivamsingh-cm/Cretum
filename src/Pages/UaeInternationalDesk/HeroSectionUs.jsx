import React, { useRef, useEffect, useState } from "react";
import MapBase from '../../assets/mapbase.png';
import { MapPin } from "lucide-react";
import Modal from "../../Components/ScheduleCall/Modal";
import ScheduleCallForm from "../../Components/ScheduleCall/ScheduleCallForm";

const locations = [
  { name: "New York", top: 25, left: 20 }, // percentages as numbers
  { name: "Chicago", top: 35, left: 45 },
  { name: "Los Angeles", top: 50, left: 70 },
  { name: "Houston", top: 60, left: 55 },
];

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const mapRef = useRef(null);
  const [mapSize, setMapSize] = useState({ width: 0, height: 0 });

  // Update map size on mount and resize
  useEffect(() => {
    const updateSize = () => {
      if (mapRef.current) {
        const rect = mapRef.current.getBoundingClientRect();
        setMapSize({ width: rect.width, height: rect.height });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Convert percentage coordinates to pixels
  const getPixelCoords = (loc) => ({
    x: (loc.left / 100) * mapSize.width,
    y: (loc.top / 100) * mapSize.height,
  });

  // Generate SVG paths
  const generatePaths = () => {
    const paths = [];
    for (let i = 0; i < locations.length - 1; i++) {
      const start = getPixelCoords(locations[i]);
      const end = getPixelCoords(locations[i + 1]);

      const control1 = { x: start.x + (end.x - start.x) * 0.25, y: start.y };
      const control2 = { x: start.x + (end.x - start.x) * 0.75, y: end.y };

      const d = `M${start.x},${start.y} C${control1.x},${control1.y} ${control2.x},${control2.y} ${end.x},${end.y}`;
      paths.push(d);
    }
    return paths;
  };

  const paths = generatePaths();

  return (
    <div className="min-h-screen bg-backgroundPrimary p-6 sm:p-10 md:p-14 lg:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-6 sm:mb-10 mt-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Your Trusted Partner for US <br /> Accounting & Compliance
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl max-w-3xl mx-auto mt-4">
            From fund accounting to audit support — we provide comprehensive finance
            and accounting solutions tailored for businesses expanding to the US.
          </p>
        </header>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <button 
             onClick={()=> setIsModalOpen(true)}
            className="bg-buttonBackground rounded-full text-white py-2 px-4"
            >
            Schedule a Call
          </button>
          <button className="border-2 border-white rounded-full text-white py-2 px-6">
            Chat with desk expert
          </button>
        </div>

        {/* Map Section */}
        <div ref={mapRef} className="relative w-full max-w-7xl mx-auto mt-10">
          <img
            src={MapBase}
            alt="Map"
            className="w-full h-96 md:h-full lg:h-full rounded-xl"
          />

          {/* SVG Curved Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {paths.map((d, idx) => (
              <path
                key={idx}
                d={d}
                stroke="#A855F7"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="transparent"
              />
            ))}
          </svg>

          {/* Location Pins */}
          {locations.map((loc, idx) => {
            const coords = getPixelCoords(loc);
            return (
              <div
                key={idx}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ top: coords.y, left: coords.x }}
              >
                <MapPin size={24} className="text-buttonBackground" />
              </div>
            );
          })}
        </div>
      </div>

       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ScheduleCallForm onSubmit={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}


