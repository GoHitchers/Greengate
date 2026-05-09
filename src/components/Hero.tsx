import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/1.jpeg"
          alt="Luxury residential estate"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e45]/90 via-[#1a2e45]/75 to-[#1a2e45]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 flex flex-col items-start">
        <p className="font-sans text-[#A78F51] text-xs tracking-[0.3em] uppercase mb-6">
          Muldersdrift · Krugersdorp · South Africa
        </p>

        <h1 className="font-display text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.08] max-w-3xl mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
          Greengate<br />
          <em className="font-light">Lifestyle Estate</em>
        </h1>

        <div className="w-16 h-px bg-[#A78F51] mb-8" />

        <p className="font-sans text-white/90 text-sm sm:text-base leading-relaxed max-w-xl mb-10 font-light drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
          An approved residential development of over 290 homes in Muldersdrift.
          2-bedroom apartments from R880,000 and 3-bedroom homes from R1.2 million — full package, no hidden costs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-[#A78F51] text-white font-sans text-xs tracking-widest uppercase hover:bg-[#8f7840] transition-all duration-300 inline-block"
          >
            View Available Homes
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-white/50 text-white font-sans text-xs tracking-widest uppercase hover:border-white hover:bg-white/10 transition-all duration-300 inline-block"
          >
            Explore Development
          </a>
        </div>

        {/* Key stats */}
        <div className="mt-16 grid grid-cols-4 gap-6 sm:gap-12 border-t border-white/20 pt-10 w-full max-w-xl">
          <div>
            <p className="font-display text-white text-3xl sm:text-4xl font-light">290+</p>
            <p className="font-sans text-white/70 text-[10px] tracking-widest uppercase mt-1">Residential Homes</p>
          </div>
          <div>
            <p className="font-display text-white text-3xl sm:text-4xl font-light">2</p>
            <p className="font-sans text-white/70 text-[10px] tracking-widest uppercase mt-1">Bed Apartments</p>
          </div>
          <div>
            <p className="font-display text-white text-3xl sm:text-4xl font-light">3</p>
            <p className="font-sans text-white/70 text-[10px] tracking-widest uppercase mt-1">Bed Homes</p>
          </div>
          <div>
            <p className="font-display text-[#A78F51] text-2xl sm:text-3xl font-light">R880k</p>
            <p className="font-sans text-white/70 text-[10px] tracking-widest uppercase mt-1">Starting From</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors duration-300"
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
