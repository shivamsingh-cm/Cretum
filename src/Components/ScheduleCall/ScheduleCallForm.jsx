import React, { useState } from 'react'

function ScheduleCallForm() {
    const [inputForm , setInputFrom]=useState({
        name : "",
        email : "",
        phoneNo : "",
        message : "",
    })

    
    const handleChange = (e)=>{
       setInputFrom({
        ...inputForm,
        [e.target.name] : e.target.value
       });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputFrom(inputForm);
        console.log("Form Submitted:", inputForm);
    };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-white mb-2">Schedule a Call</h2>

      <input
        name="name"
        type="text"
        placeholder="Your Name"
        value={inputForm.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={inputForm.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <input
        name="phoneNo"
        type="tel"
        placeholder="Your Phone Number"
        value={inputForm.phoneNo}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={inputForm.message}
        onChange={handleChange}
        rows={3}
        className="w-full px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-buttonBackground to-buttonBackground/80 hover:from-buttonBackgroundHover hover:to-buttonBackgroundHover/80 text-white font-medium px-4 py-2 rounded-full transition-all duration-300"
      >
        Submit
      </button>
    </form>
  )
}

export default ScheduleCallForm