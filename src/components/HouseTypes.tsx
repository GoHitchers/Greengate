export default function HouseTypes() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Modern residential homes"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1a2e45]/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-[#A78F51] text-xs tracking-[0.3em] uppercase mb-5">
              Homes That Can Be Built
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-white font-light leading-[1.1] mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              Modern Residences<br />
              <em>Designed for Living</em>
            </h2>
            <div className="w-12 h-px bg-[#A78F51] mb-8" />
            <p className="font-sans text-white/85 text-sm leading-[1.9] mb-8 font-light drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
              Modern residential homes designed for comfortable family living within a secure
              and growing community. From compact starter homes to spacious family residences,
              Greengate provides the canvas for your vision.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-[#A78F51] text-white font-sans text-xs tracking-widest uppercase hover:bg-[#8f7840] transition-colors duration-300"
            >
              Enquire About Stands
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
                label: 'Family Homes',
              },
              {
                src: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
                label: 'Modern Residences',
              },
              {
                src: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
                label: 'Secure Estates',
              },
              {
                src: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
                label: 'Spacious Interiors',
              },
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
      </div>
    </section>
  );
}
