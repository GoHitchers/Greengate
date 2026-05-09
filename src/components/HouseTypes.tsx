export default function HouseTypes() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/3.jpg"
          alt="Modern residential homes"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1a2e45]/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="font-sans text-[#A78F51] text-xs tracking-[0.3em] uppercase mb-5">
            Property Options
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-white font-light leading-[1.1] mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
            Modern Residences<br />
            <em>Designed for Living</em>
          </h2>
          <div className="w-12 h-px bg-[#A78F51] mx-auto mb-8" />
          <p className="font-sans text-white/85 text-sm leading-[1.9] max-w-2xl mx-auto font-light drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
            Choose from 2-bedroom apartments or 3-bedroom homes — all full-package, move-in ready
            properties within a secure and growing community.
          </p>
        </div>

        {/* Property type cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* 2-Bedroom Apartment */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 lg:p-10 hover:bg-white/15 transition-all duration-300">
            <p className="font-sans text-[#A78F51] text-xs tracking-[0.3em] uppercase mb-4">
              Apartments
            </p>
            <h3 className="font-display text-3xl lg:text-4xl text-white font-light mb-2">
              2-Bedroom
            </h3>
            <p className="font-display text-[#A78F51] text-2xl font-light mb-6">From R880,000</p>
            <div className="w-8 h-px bg-[#A78F51] mb-6" />
            <p className="font-sans text-white/75 text-sm leading-[1.8] font-light mb-8">
              Modern 2-bedroom apartments designed for comfortable living. Ideal for young
              professionals, first-time buyers, or as a rental investment within a secure estate.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-[#A78F51] text-white font-sans text-xs tracking-widest uppercase hover:bg-[#8f7840] transition-colors duration-300"
            >
              Enquire Now
            </a>
          </div>

          {/* 3-Bedroom Home */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 lg:p-10 hover:bg-white/15 transition-all duration-300">
            <p className="font-sans text-[#A78F51] text-xs tracking-[0.3em] uppercase mb-4">
              Family Homes
            </p>
            <h3 className="font-display text-3xl lg:text-4xl text-white font-light mb-2">
              3-Bedroom
            </h3>
            <p className="font-display text-[#A78F51] text-2xl font-light mb-6">From R1.2 Million</p>
            <div className="w-8 h-px bg-[#A78F51] mb-6" />
            <p className="font-sans text-white/75 text-sm leading-[1.8] font-light mb-8">
              Spacious 3-bedroom homes designed for family living. Full-package properties with
              generous living areas in a secure, connected community.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-[#A78F51] text-white font-sans text-xs tracking-widest uppercase hover:bg-[#8f7840] transition-colors duration-300"
            >
              Enquire Now
            </a>
          </div>
        </div>

        {/* Image gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: '/4.jpeeg', label: '2-Bed Apartments' },
            { src: '/5.jpeg', label: 'Modern Interiors' },
            { src: '/6.jpeg', label: '3-Bed Homes' },
            { src: '/7.jpeg', label: 'Spacious Living' },
          ].map(({ src, label }) => (
            <div key={label} className="relative overflow-hidden group">
              <img
                src={src}
                alt={label}
                className="w-full h-36 lg:h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 group-hover:via-transparent group-hover:to-transparent transition-colors duration-300" />
              <p className="absolute bottom-3 left-3 font-sans text-xs tracking-widest uppercase text-white font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
