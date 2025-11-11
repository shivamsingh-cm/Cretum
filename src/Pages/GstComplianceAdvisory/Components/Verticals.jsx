

import Verticalserver1 from '../../../assets/verticalserver1.png'
import Verticalserver2 from '../../../assets/verticalserver2.png'
import Verticalserver3 from '../../../assets/verticalserver3.png'
import Verticalserver4 from '../../../assets/verticalserver4.png'
import Verticalserver5 from '../../../assets/verticalserver5.png'
import Verticalserver6 from '../../../assets/verticalserver6.png'
export default function Verticals() {
  const items = [
    { icon: Verticalserver1, label: "IT & Technology" },
    { icon: Verticalserver2, label: "D2C & Ecommerce" },
    { icon: Verticalserver3, label: "Manufacturing" },
    { icon: Verticalserver4, label: "Healthcare" },
    { icon: Verticalserver5, label: "Financial Services" },
    { icon: Verticalserver6, label: "Logistics" },
  ];

  return (
    <section className="w-full bg-backgroundPrimary py-20">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium">
          Verticals we serve
        </h2>

        {/* Subtitle */}
        <p className="text-white font-normal text-sm md:text-base max-w-[700px] mx-auto mt-3">
          We combine deep tax expertise with cutting-edge technology to deliver a seamless GST
          experience that transforms compliance into strategic advantage.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {items.map((item, index) => (
            <div
              key={index}
              className=" bg-backgroundSecondary/40 backdrop-blur-xl border border-white/10 rounded-2xl p-3 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl  hover:bg-backgroundSecondary/60 cursor-pointer"
            >
              <img src={item.icon} alt={item.label} className="w-[140px] h-[140px] object-contain" />
              <p className="text-white  text-xl md:text-2xl font-normal">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




