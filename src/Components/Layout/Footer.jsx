import React from "react";
import { Facebook, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#151021] text-gray-300 pt-10 pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Row content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" />
          </div>
          <p className="text-sm text-white mt-3 md:mt-0">
            Empowering businesses with expert financial solutions
          </p>
        </div>

        <hr className="border-gray-700 mb-10" />

        {/* Middle Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm font-normal">
              {[
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Resources", to: "/resources" },
                { label: "Contact", to: "/contact" },
                { label: "Careers", to: "/career" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="relative hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[1px] after:bg-[#A164FF] hover:after:w-full after:transition-all after:duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">SERVICES</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "GST Services", to: "/gstservices" },
                { label: "Startup Consulting", to: "/startupconsulting" },
                { label: "US International Desk", to: "/usinternationaldesk" },
                { label: "UAE International Desk", to: "/uaeinternationaldesk" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="relative hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[1px] after:bg-[#A164FF] hover:after:w-full after:transition-all after:duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">CONTACT US</h3>
            <p className="text-sm mb-2">+91-8367-9876-90</p>
            <p className="text-sm mb-4">contact@cretumadvisory.com</p>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm invisible">SOCIAL</h3>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/cretumadvisory1" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/cretumadvisory/" },
                { Icon: Instagram, href: "https://www.instagram.com/cretumadvisory/" },
                { Icon: Twitter, href: "https://x.com/AdvisoryCretum" },
                { Icon: Youtube, href: "https://www.youtube.com/@CretumAdvisory" },
              ].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#A164FF] transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-2 md:space-y-0">
          <p>© 2025 Cretum Advisory. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link
              to="/privacypolicy"
              className="relative hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[1px] after:bg-[#A164FF] hover:after:w-full after:transition-all after:duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/termsofuse"
              className="relative hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[1px] after:bg-[#A164FF] hover:after:w-full after:transition-all after:duration-300"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


