import stepImg from "../../../assets/gstserviceleftbgimage.jpg";

export default function ThreeStepApproach({ imageRight = false, steps }) {
  return (
    <section className="w-full bg-backgroundPrimary text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto">
        {/* LEFT IMAGE (if imageRight = false) */}
        {!imageRight && (
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[702px]">
            <img
              src={stepImg}
              alt="3 Step Approach"
              className="absolute top-0 left-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-12 py-10">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
            Our Unique 3-Step Approach
          </h2>

          {steps?.map((step, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-medium mb-2">{step?.title}</h3>
              <p className="text-[#C5C2CF] text-sm leading-relaxed">
                {step?.description}
              </p>
            </div>
          ))}

          <button className="mt-4 px-6 py-3 bg-[#7A3EFF] hover:bg-[#692fe0] rounded-full text-sm font-medium w-fit transition">
            Book a Free GST Review
          </button>
        </div>

        {/* RIGHT IMAGE (if imageRight = true) */}
        {imageRight && (
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[702px]">
            <img
              src={stepImg}
              alt="3 Step Approach"
              className="absolute top-0 right-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </section>
  );
}
