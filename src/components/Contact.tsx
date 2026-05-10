import { useState } from 'react';
import { Phone, Mail, Globe, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#2F5D8C]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <div>
            <p className="font-sans text-[#4A7C59] text-xs tracking-[0.3em] uppercase mb-5">
              Contact Us
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-white font-light leading-[1.1] mb-6">
              Start Your Journey<br />
              <em>to Greengate</em>
            </h2>
            <div className="w-12 h-px bg-[#4A7C59] mb-10" />

            <div className="space-y-7">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={16} className="text-[#4A7C59]" />
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-widest uppercase text-white/50 mb-1">Phone</p>
                  <a href="tel:0792758821" className="font-sans text-white text-sm hover:text-[#4A7C59] transition-colors">
                    079 275 8821
                  </a>
                  <span className="text-white/40 mx-2 text-xs">/</span>
                  <a href="tel:0115271978" className="font-sans text-white text-sm hover:text-[#4A7C59] transition-colors">
                    011 527 1978
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={16} className="text-[#4A7C59]" />
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-widest uppercase text-white/50 mb-1">Email</p>
                  <a
                    href="mailto:info@greengatelifestyleestate.co.za"
                    className="font-sans text-white text-sm hover:text-[#4A7C59] transition-colors break-all"
                  >
                    info@greengatelifestyleestate.co.za
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Globe size={16} className="text-[#4A7C59]" />
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-widest uppercase text-white/50 mb-1">Website</p>
                  <span className="font-sans text-white text-sm">
                    www.greengatelifestyleestate.co.za
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-[#4A7C59]" />
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-widest uppercase text-white/50 mb-1">Location</p>
                  <p className="font-sans text-white text-sm leading-relaxed">
                    Beyers Naudé Drive<br />
                    Muldersdrift, Krugersdorp<br />
                    South Africa
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 bg-[#4A7C59] flex items-center justify-center mb-6">
                  <Send size={24} className="text-white" />
                </div>
                <h3 className="font-display text-3xl text-white font-light mb-4">
                  Enquiry Received
                </h3>
                <p className="font-sans text-white/70 text-sm leading-relaxed max-w-sm">
                  Thank you for your interest in Greengate Lifestyle Estate. Our team will be in
                  touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans text-[10px] tracking-widest uppercase text-white/50 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/8 border border-white/20 text-white placeholder-white/30 px-4 py-3 font-sans text-sm focus:outline-none focus:border-[#4A7C59] transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[10px] tracking-widest uppercase text-white/50 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white/8 border border-white/20 text-white placeholder-white/30 px-4 py-3 font-sans text-sm focus:outline-none focus:border-[#4A7C59] transition-colors duration-200"
                      placeholder="Your phone"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-sans text-[10px] tracking-widest uppercase text-white/50 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/8 border border-white/20 text-white placeholder-white/30 px-4 py-3 font-sans text-sm focus:outline-none focus:border-[#4A7C59] transition-colors duration-200"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block font-sans text-[10px] tracking-widest uppercase text-white/50 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/8 border border-white/20 text-white placeholder-white/30 px-4 py-3 font-sans text-sm focus:outline-none focus:border-[#4A7C59] transition-colors duration-200 resize-none"
                    placeholder="I'm interested in a 2-bed apartment or 3-bed home at Greengate Lifestyle Estate..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#4A7C59] text-white font-sans text-xs tracking-widest uppercase hover:bg-[#3a6349] transition-colors duration-300 flex items-center justify-center gap-3"
                >
                  <span>Send Enquiry</span>
                  <Send size={14} />
                </button>
                <p className="font-sans text-white/30 text-xs text-center leading-relaxed">
                  By submitting, you agree to be contacted regarding this development.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
