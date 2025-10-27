import React from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
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
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Resources</a></li>
              <li><a href="contact" className="hover:text-white">Contact</a></li>
              <li><a href="/career" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">SERVICES</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">GST Services</a></li>
              <li><a href="#" className="hover:text-white">Startup Consulting</a></li>
              <li><a href="/usinternationaldesk" className="hover:text-white">US International Desk</a></li>
              <li><a href="/uaeinternationaldesk" className="hover:text-white">UAE International Desk</a></li>
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
              <a 
                href="https://www.facebook.com/cretumadvisory1" 
                target="_blank" rel="noopener noreferrer" 
                className="hover:text-white">
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/company/cretumadvisory/" 
                target="_blank" rel="noopener noreferrer" 
                className="hover:text-white">
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/cretumadvisory/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white">
                <Instagram size={18} />
              </a>
              <a 
                href="https://x.com/AdvisoryCretum" 
                target="_blank" rel="noopener noreferrer" 
                className="hover:text-white">
                <Twitter size={18} />
              </a>
              <a
                href="https://www.youtube.com/@CretumAdvisory"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <Youtube size={18} />
              </a>
            </div>

          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-2 md:space-y-0">
          <p>© 2025 Cretum Advisory. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="/privacypolicy" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

