export default function PastDevelopments() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <p className="font-sans text-[#4A7C59] text-xs tracking-[0.3em] uppercase mb-5">
              Our Track Record
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-[#2F5D8C] font-light leading-[1.1] mb-6">
              P&S Robinpark Estate<br />
              <em>A Proven Success</em>
            </h2>
            <div className="w-12 h-px bg-[#4A7C59] mb-8" />
            <p className="font-sans text-[#40454A] text-sm leading-[1.9] mb-6 font-light">
              Our successful P&S Robinpark Estate development demonstrates the team's commitment
              to quality residential infrastructure. Completed and ongoing phases of the project
              showcase our ability to deliver on our promises to investors and homeowners alike.
            </p>
            <p className="font-sans text-[#40454A] text-sm leading-[1.9] font-light">
              This track record of delivery gives investors in Greengate Lifestyle Estate the
              confidence that their investment is in experienced and trustworthy hands.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-[#4A7C59] pl-4">
                <p className="font-display text-2xl text-[#2F5D8C] font-light">Quality</p>
                <p className="font-sans text-xs text-[#40454A]/60 tracking-wide mt-1">Infrastructure delivered</p>
              </div>
              <div className="border-l-2 border-[#4A7C59] pl-4">
                <p className="font-display text-2xl text-[#2F5D8C] font-light">Growth</p>
                <p className="font-sans text-xs text-[#40454A]/60 tracking-wide mt-1">Investment returns</p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/9.jpeg"
              alt="Completed development"
              className="w-full h-56 object-cover col-span-2"
            />
            <img
              src="/10.jpeg"
              alt="Residential estate"
              className="w-full h-40 object-cover"
            />
            <img
              src="/11.jpeg"
              alt="Modern home"
              className="w-full h-40 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
