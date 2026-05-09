export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="/2.jpg"
              alt="Residential development"
              className="w-full h-[480px] object-cover"
            />
            {/* Accent card */}
            <div className="absolute -bottom-8 -right-4 lg:-right-10 bg-[#2F5D8C] text-white px-8 py-7 max-w-[220px] shadow-xl">
              <p className="font-display text-3xl font-light">290+</p>
              <p className="font-sans text-[10px] tracking-widest uppercase text-white/70 mt-1">Approved Homes</p>
              <div className="w-8 h-px bg-[#A78F51] mt-3" />
              <p className="font-sans text-[10px] text-white/60 mt-2 leading-relaxed">
                Muldersdrift,<br />Krugersdorp
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="lg:pl-6">
            <p className="font-sans text-[#A78F51] text-xs tracking-[0.3em] uppercase mb-5">
              About the Development
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-[#2F5D8C] font-light leading-[1.1] mb-6">
              A Community Built<br />
              <em>for the Future</em>
            </h2>
            <div className="w-12 h-px bg-[#A78F51] mb-8" />
            <p className="font-sans text-[#40454A] text-sm leading-[1.9] mb-6 font-light">
              Greengate Lifestyle Estate is an approved residential development of over 290 homes
              located in Muldersdrift, Krugersdorp — alongside Beyers Naudé Drive and College Road.
            </p>
            <p className="font-sans text-[#40454A] text-sm leading-[1.9] mb-8 font-light">
              Conveniently positioned near Cradlestone Mall, Pinehaven Private Hospital, Silverstar
              Casino, Cosmo City, Fourways, Northriding, and surrounding areas, residents will
              enjoy seamless access to premier amenities while living within a secure, close-knit
              community.
            </p>

            {/* Location badge */}
            <div className="border border-gray-200 p-5 bg-[#F8F8F8]">
              <p className="font-sans text-[10px] tracking-widest uppercase text-[#A78F51] mb-2">Location</p>
              <p className="font-sans text-sm text-[#40454A] leading-relaxed font-light">
                Portion 142 of the Farm Rietfontein 189 IQ<br />
                Beyers Naudé Drive, Muldersdrift, Krugersdorp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
