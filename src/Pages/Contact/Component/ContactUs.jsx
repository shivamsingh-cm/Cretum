import React from "react";
import { Mail, Phone, Facebook, Instagram, X, Youtube } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="bg-backgroundPrimary text-white py-16 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center md:text-left">
        Contact Us
      </h2>

      {/* Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* left section  */}
        <div className="bg-[#1e1630] p-6 md:p-8 rounded-2xl shadow-lg space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="enter name "
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:border-buttonBackground outline-none text-sm placeholder-gray-400"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
            <div className="flex items-center gap-2">
              <span className="text-sm bg-[#2a1d47] px-3 py-3 rounded-lg border border-gray-600">
                🇮🇳 +91
              </span>
              <input
                type="tel"
                placeholder="1234567890"
                className="flex-1 px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:border-buttonBackground outline-none text-sm placeholder-gray-400"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <input
              type="email"
              placeholder="ex.john@email.com"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:border-buttonBackground outline-none text-sm placeholder-gray-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:border-buttonBackground outline-none text-sm placeholder-gray-400 resize-none"
            />
          </div>

          {/* Newsletter Checkbox */}
          <div className="flex items-start gap-2 text-sm text-gray-400">
            <input
              type="checkbox"
              id="newsletter"
              className="mt-1 accent-buttonBackground"
            />
            <label htmlFor="newsletter">
              Sign up for our email list for updates, promotions, and more.
            </label>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-buttonBackground hover:bg-buttonBackgroundHover text-white py-3 rounded-lg text-sm font-medium transition-all duration-300">
            Submit
          </button>
        </div>

        {/* Right Side - Contact Info */}
        <div className="space-y-6">
        
          <div className="bg-[#1e1630] rounded-2xl p-6 flex items-center justify-between">
            <div>
              <h4 className="text-sm text-gray-400 mb-1">SUPPORT</h4>
              <p className="text-white text-sm md:text-base">
                info@cretumadvisory.com
              </p>
            </div>
            <Mail className="text-purple-400" />
          </div>

          {/* Call Us */}
          <div className="bg-[#1e1630] rounded-2xl p-6 flex items-center justify-between">
            <div>
              <h4 className="text-sm text-gray-400 mb-1">CALL US</h4>
              <p className="text-white text-sm md:text-base">+91 8800895931</p>
            </div>
            <Phone className="text-purple-400" />
          </div>

          {/* Social Media */}
          <div className="bg-[#1e1630] rounded-2xl p-6">
            <h4 className="text-sm text-gray-400 mb-3">SOCIAL MEDIA</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <X size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
