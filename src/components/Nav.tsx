import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavProps {
  scrolled: boolean;
}

const links = [
  { label: 'About', href: '#about' },
  { label: 'Development', href: '#development' },
  { label: 'Why Invest', href: '#why-invest' },
  { label: 'How to Secure', href: '#how-to-secure' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav({ scrolled }: NavProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span
            className={`font-display text-xl tracking-wider font-semibold transition-colors duration-300 ${
              scrolled ? 'text-[#2F5D8C]' : 'text-white'
            }`}
          >
            GREENGATE
          </span>
          <span
            className={`font-sans text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 ${
              scrolled ? 'text-[#A78F51]' : 'text-[#A78F51]'
            }`}
          >
            Lifestyle Estate
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 hover:text-[#A78F51] ${
                scrolled ? 'text-[#40454A]' : 'text-white/90'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 bg-[#A78F51] text-white text-xs tracking-widest uppercase font-sans hover:bg-[#8f7840] transition-colors duration-300"
          >
            View Available Homes
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden transition-colors duration-300 ${scrolled ? 'text-[#2F5D8C]' : 'text-white'}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-sans text-xs tracking-widest uppercase text-[#40454A] hover:text-[#A78F51] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-6 py-3 bg-[#A78F51] text-white text-xs tracking-widest uppercase font-sans text-center hover:bg-[#8f7840] transition-colors duration-300"
            >
              View Available Homes
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
