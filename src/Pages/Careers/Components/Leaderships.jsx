import React from 'react'
import LeaderImage from '../../../assets/leader.png'

function LeadershipSection() {
  return (
    <section className="w-full bg-backgroundPrimary py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Left: Image take 50%  */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={LeaderImage}
            alt="Leadership Team"
            loading="lazy"
            className="w-full max-w-md md:max-w-none h-96 object-cover rounded-lg"
          />
        </div>

        {/* Right: Text Content take 50%  */}
        <div className="w-full md:w-1/2 text-white space-y-4">
          <h6 className="text-buttonBackground text-base font-medium">
            Meet Our Leadership
          </h6>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium">
            Guiding Vision. Driving Impact.
          </h1>
          <div className="space-y-[24px]">
            <p className="text-sm sm:text-base md:text-base font-normal text-white/90 leading-[150%]">
              At Cretum Advisory, leadership isn’t just about titles — it’s about setting 
              direction, inspiring people, and creating opportunities for growth. Our
              leadership team brings together deep industry expertise, entrepreneurial
              thinking, and a shared commitment to building a future where businesses
              don’t just adapt, but thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadershipSection


