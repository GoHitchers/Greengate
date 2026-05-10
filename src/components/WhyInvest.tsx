import { MapPin, Home, Tag, TrendingUp, Shield, ShoppingBag } from 'lucide-react';

const reasons = [
  {
    icon: MapPin,
    title: 'Prime Location',
    body: 'Situated along Beyers Naudé Drive in Muldersdrift — one of Gauteng\'s fastest-growing residential corridors.',
  },
  {
    icon: Home,
    title: 'Your Dream Home, Ready',
    body: 'Full-package properties from R880,000 — choose from 2-bedroom apartments or 3-bedroom homes, all move-in ready with no hidden costs.',
  },
  {
    icon: Tag,
    title: 'Affordable Entry Point',
    body: '2-bedroom apartments from R880,000 and 3-bedroom homes from R1.2 million — making this one of the most accessible residential investment opportunities in the area.',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Growth',
    body: 'Infrastructure expansion including road upgrades and civil engineering services signal strong capital growth potential.',
  },
  {
    icon: Shield,
    title: 'Secure Community',
    body: 'A planned secure residential estate offering safety and peace of mind for families and homeowners.',
  },
  {
    icon: ShoppingBag,
    title: 'Unmatched Convenience',
    body: 'Minutes from Cradlestone Mall, Fourways, Pinehaven Private Hospital, Silverstar Casino, and major arterial routes.',
  },
];

export default function WhyInvest() {
  return (
    <section id="why-invest" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-16 lg:mb-20">
          <div>
            <p className="font-sans text-[#4A7C59] text-xs tracking-[0.3em] uppercase mb-5">
              Why Invest
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-[#2F5D8C] font-light leading-[1.1]">
              Six Compelling Reasons<br />
              <em>to Choose Greengate</em>
            </h2>
            <div className="w-12 h-px bg-[#4A7C59] mt-6" />
          </div>
          <p className="font-sans text-[#40454A] text-sm leading-[1.9] font-light lg:pb-2">
            Greengate Lifestyle Estate offers a rare combination of location, affordability, and
            long-term residential potential. Whether you are building a family home or making a
            strategic investment, this development delivers exceptional value.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              className="group p-8 border border-gray-100 hover:border-[#2F5D8C]/20 hover:shadow-md transition-all duration-300 bg-white"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 bg-[#2F5D8C]/6 flex items-center justify-center group-hover:bg-[#2F5D8C]/12 transition-colors duration-300">
                  <Icon size={18} className="text-[#2F5D8C]" />
                </div>
                <span className="font-sans text-[10px] text-[#4A7C59] tracking-widest uppercase">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-display text-xl text-[#2F5D8C] mb-3">{title}</h3>
              <p className="font-sans text-sm text-[#40454A] leading-[1.8] font-light">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
