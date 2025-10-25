import React from 'react'
import MapBase from '../../../assets/mapbase.png';
function HeroSection() {
  return (
    <div className="min-h-screen bg-backgroundPrimary p-6 sm:p-10 md:p-14 lg:p-16">
        <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <header className="text-center mb-6 sm:mb-10 mt-16 ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Your Trusted Partner for US  <br/> Accounting & Compliance
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl max-w-3xl mx-auto mt-4">
                From fund accounting to audit support — we provide comprehensive finance and accounting solutions tailored for businesses expanding to the US.
            </p>
            </header>
            <div className='items-center text-center '>
                <button className='bg-buttonBackground rounded-full text-white py-2 px-4'>Schedule a Call</button>
                <button className='border-2 border-white rounded-full text-white  py-2 px-6'>Chat with desk expert</button>
            </div>
        </div>
        <div>
            <img 
                src={MapBase}
            />
        </div>
    </div>
  )
}

export default HeroSection