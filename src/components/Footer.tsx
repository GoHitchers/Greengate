const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Development Details', href: '#development' },
  { label: 'Why Invest', href: '#why-invest' },
  { label: 'How to Secure', href: '#how-to-secure' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#40454A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-14">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <p className="font-display text-2xl tracking-wider font-semibold text-white">
                GREENGATE
              </p>
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#A78F51] mt-0.5">
                Lifestyle Estate
              </p>
            </div>
            <div className="w-8 h-px bg-[#A78F51] mb-5" />
            <p className="font-sans text-white/60 text-xs leading-[1.9]">
              An approved residential development of over 290 homes in Muldersdrift, Krugersdorp —
              providing affordable full-package properties — 2-bedroom apartments from R880,000 and 3-bedroom homes from R1.2 million — in a growing, connected community.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#A78F51] mb-6">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-sans text-xs text-white/60 hover:text-white transition-colors duration-200 tracking-wide"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#A78F51] mb-6">
              Get in Touch
            </p>
            <div className="space-y-3">
              <p className="font-sans text-xs text-white/60">
                <span className="text-white/40">Phone:</span>{' '}
                <a href="tel:0792758821" className="hover:text-white transition-colors">079 275 8821</a>
                {' / '}
                <a href="tel:0115271978" className="hover:text-white transition-colors">011 527 1978</a>
              </p>
              <p className="font-sans text-xs text-white/60 break-all">
                <span className="text-white/40">Email:</span>{' '}
                <a href="mailto:info@greengatelifestyleestate.co.za" className="hover:text-white transition-colors">
                  info@greengatelifestyleestate.co.za
                </a>
              </p>
              <p className="font-sans text-xs text-white/60">
                <span className="text-white/40">Location:</span>{' '}
                Beyers Naudé Drive, Muldersdrift, Krugersdorp
              </p>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-block px-6 py-3 bg-[#A78F51] text-white font-sans text-[10px] tracking-widest uppercase hover:bg-[#8f7840] transition-colors duration-300"
            >
              View Available Homes
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] text-white/30 tracking-wide">
            &copy; {new Date().getFullYear()} Greengate Lifestyle Estate. All rights reserved.
          </p>
          <p className="font-sans text-[10px] text-white/30 tracking-wide">
            Muldersdrift · Krugersdorp · South Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
