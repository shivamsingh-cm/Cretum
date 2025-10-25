


// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { NavLink } from "react-router-dom";
// import Logo from "../../assets/Logo.png";
// import Modal from "../../Components/ScheduleCall/Modal";
// import ScheduleCallForm from "../../Components/ScheduleCall/ScheduleCallForm";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => setIsOpen(!isOpen);
//   const [isModalOpen, setIsModalOpen] = useState(false); 

//   const navItems = [
//     { name: "Home", to: "/home" },
//     { name: "Solutions", to: "/solutions" },
//     { name: "Countries", to: "/countries" },
//     { name: "Resources", to: "/resources" },
//     { name: "Career", to: "/career" },
//     { name: "Contact Us", to: "/contact" },
//   ];

//   return (
//     <header className="fixed top-0 left-0 w-full bg-backgroundPrimary text-white z-50 shadow-lg">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <img src={Logo} alt="Logo" />
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center space-x-8">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.to}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-white border-b-2 border-white pb-1 transition"
//                   : "text-gray-300 hover:text-white transition"
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </nav>

//         {/* Schedule Button */}
//         <button 
//           onClick={()=> setIsModalOpen(true)}
//           className="hidden md:block bg-white text-[#151021] font-medium px-5 py-2 rounded-full shadow hover:bg-gray-200 transition">
//           Schedule a Call
//         </button>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={toggleMenu}
//           className="md:hidden text-white focus:outline-none"
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-[#1d162b] px-6 pb-4 space-y-3">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.to}
//               className={({ isActive }) =>
//                 isActive
//                   ? "block text-white font-medium transition"
//                   : "block text-gray-300 hover:text-white transition"
//               }
//               onClick={() => setIsOpen(false)}
//             >
//               {item.name}
//             </NavLink>
//           ))}
//           <button className="w-full mt-3 bg-white text-[#151021] font-medium py-2 rounded-full hover:bg-gray-200 transition">
//             Schedule a Call
//           </button>
//         </div>
//       )}

//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <ScheduleCallForm onSubmit={() => setIsModalOpen(false)} />
//       </Modal>
//     </header>
//   );
// };

// export default Header;


// import React, { useState, useRef, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { NavLink } from "react-router-dom";
// import Logo from "../../assets/Logo.png";
// import Modal from "../../Components/ScheduleCall/Modal";
// import ScheduleCallForm from "../../Components/ScheduleCall/ScheduleCallForm";


// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const navItems = [
//     { name: "Solutions", to: "/solutions" },
//     { name: "Resources", to: ''},
//     { name: "Blog", to: "/blog" },
//     { name: "AboutUs", to: "/about" },
//     { name: "Career", to: "/career" },
//     { name: "Contact Us", to: "/contact" },
//   ];

//   const toggleMenu = () => setIsOpen(!isOpen);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     if (isOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isOpen]);

//   return (
//     <header className="fixed top-0 left-0 w-full bg-backgroundPrimary text-white z-50 shadow-lg">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <img src={Logo} alt="Logo" />
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden lg:flex items-center space-x-8">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.to}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-white border-b-2 border-white pb-1 transition"
//                   : "text-gray-300 hover:text-white transition"
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </nav>

//         {/* Schedule Button */}
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="hidden lg:block bg-white text-[#151021] font-medium px-5 py-2 rounded-full shadow hover:bg-gray-200 transition"
//         >
//           Schedule a Call
//         </button>

//         {/* Hamburger Menu */}
//         <button
//           onClick={toggleMenu}
//           className="lg:hidden text-white focus:outline-none"
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile/Tablet Dropdown */}
//       <div
//         ref={dropdownRef}
//         className={`lg:hidden bg-[#1d162b] overflow-hidden transition-all duration-300 ${
//           isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="px-6 pb-4 space-y-3">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.to}
//               className={({ isActive }) =>
//                 isActive
//                   ? "block text-white font-medium transition"
//                   : "block text-gray-300 hover:text-white transition"
//               }
//               onClick={() => setIsOpen(false)}
//             >
//               {item.name}
//             </NavLink>
//           ))}
//           <button
//             onClick={() => {
//               setIsOpen(false);
//               setIsModalOpen(true);
//             }}
//             className="w-full mt-3 bg-white text-[#151021] font-medium py-2 rounded-full hover:bg-gray-200 transition"
//           >
//             Schedule a Call
//           </button>
//         </div>
//       </div>

//       {/* Modal */}
//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <ScheduleCallForm onSubmit={() => setIsModalOpen(false)} />
//       </Modal>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Modal from "../../Components/ScheduleCall/Modal";
import ScheduleCallForm from "../../Components/ScheduleCall/ScheduleCallForm";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResourceOpen, setIsResourceOpen] = useState(false); // dropdown
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const navItems = [
    // { name: "Solutions", to: "/solutions" },
    { name: "Resources", to: "", dropdown: true },
    { name: "AboutUs", to: "/about" },
    { name: "Career", to: "/career" },
    { name: "Contact Us", to: "/contact" },
  ];

  const resourceItems = [
    { name: "Events & Workshops", to: "/workshops" },
    { name: "Blog" , to: "/blog"},
    { name: "News", to: "/news" },
    { name: "US International Desk", to: "/uaeinternationaldesk" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleResourceDropdown = () => setIsResourceOpen(!isResourceOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsResourceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-backgroundPrimary text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 relative">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleResourceDropdown}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition"
                >
                  <span>Resources</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isResourceOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isResourceOpen && (
                  <div className="absolute left-0 mt-3 w-56 bg-[#2b1f3f] border border-purple-800 rounded-lg shadow-lg py-2">
                    {resourceItems.map((subItem) => (
                      <NavLink
                        key={subItem.name}
                        to={subItem.to}
                        className={({ isActive }) =>
                          isActive
                            ? "block px-4 py-2 text-white bg-purple-800 rounded transition"
                            : "block px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-700/40 transition"
                        }
                        onClick={() => setIsResourceOpen(false)}
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-white border-b-2 border-white pb-1 transition"
                    : "text-gray-300 hover:text-white transition"
                }
              >
                {item.name}
              </NavLink>
            )
          )}
        </nav>

        {/* Schedule Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="hidden lg:block bg-white text-[#151021] font-medium px-5 py-2 rounded-full shadow hover:bg-gray-200 transition"
        >
          Schedule a Call
        </button>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#1d162b] overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4 space-y-3">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="space-y-2">
                <button
                  onClick={toggleResourceDropdown}
                  className="w-full flex justify-between items-center text-gray-300 hover:text-white font-medium transition"
                >
                  <span>Resources</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      isResourceOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mobile Dropdown */}
                {/* {isResourceOpen && (
                  <div className="pl-4 space-y-2">
                    {resourceItems.map((subItem) => (
                      <NavLink
                        key={subItem.name}
                        to={subItem.to}
                        className="block text-sm text-gray-400 hover:text-white transition"
                        onClick={() => {
                              setTimeout(() => {
                              setIsOpen(false);
                              setIsResourceOpen(false);
                            }, 50);

                        }}
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                )} */}

                 {resourceItems.map((subItem) => (
    <button
      key={subItem.name}
      className="w-full text-left block text-sm text-gray-400 hover:text-white transition"
      onClick={() => {
        navigate(subItem.to);   // programmatic navigation
        setIsOpen(false);       // close mobile menu
        setIsResourceOpen(false); // close dropdown
      }}
    >
      {subItem.name}
    </button>
  ))}
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "block text-white font-medium transition"
                    : "block text-gray-300 hover:text-white transition"
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            )
          )}

          <button
            onClick={() => {
              setIsOpen(false);
              setIsModalOpen(true);
            }}
            className="w-full mt-3 bg-white text-[#151021] font-medium py-2 rounded-full hover:bg-gray-200 transition"
          >
            Schedule a Call
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ScheduleCallForm onSubmit={() => setIsModalOpen(false)} />
      </Modal>
    </header>
  );
};

export default Header;




