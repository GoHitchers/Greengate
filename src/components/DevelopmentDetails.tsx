import { Ruler, Tag, MapPin, Zap } from 'lucide-react';

const news = [
  'New road opening at the boundary of our development',
  'Beyers Naudé Drive main road expanding',
  'Civil engineering services breaking ground soon',
  'Construction of the development happening soon',
];

const details = [
  {
    icon: Ruler,
    label: 'Stand Sizes',
    value: '150 – 300 sqm',
    sub: 'Residential stands',
  },
  {
    icon: Tag,
    label: 'Pricing',
    value: 'From R199,500',
    sub: 'Per share',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Muldersdrift',
    sub: 'Krugersdorp, Gauteng',
  },
  {
    icon: Zap,
    label: 'Status',
    value: 'Approved',
    sub: '290+ homes planned',
  },
];

export default function DevelopmentDetails() {
  return (
    <section id="development" className="bg-[#F8F8F8] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="font-sans text-[#A78F51] text-xs tracking-[0.3em] uppercase mb-4">
            Development Details
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-[#2F5D8C] font-light">
            Everything You Need to Know
          </h2>
          <div className="w-12 h-px bg-[#A78F51] mx-auto mt-6" />
        </div>

        {/* Key details grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 mb-16">
          {details.map(({ icon: Icon, label, value, sub }) => (
            <div key={label} className="bg-white p-8 lg:p-10 flex flex-col gap-4">
              <div className="w-10 h-10 bg-[#2F5D8C]/8 flex items-center justify-center">
                <Icon size={18} className="text-[#2F5D8C]" />
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-widest uppercase text-[#A78F51] mb-1">{label}</p>
                <p className="font-display text-2xl text-[#2F5D8C] font-light">{value}</p>
                <p className="font-sans text-xs text-[#40454A]/60 mt-1">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Exciting news */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="font-sans text-[#A78F51] text-xs tracking-[0.3em] uppercase mb-5">
              Exciting News
            </p>
            <h3 className="font-display text-3xl lg:text-4xl text-[#2F5D8C] font-light leading-[1.2] mb-8">
              Development<br /><em>Momentum is Building</em>
            </h3>
            <ul className="space-y-4">
              {news.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#A78F51] flex-shrink-0" />
                  <p className="font-sans text-sm text-[#40454A] leading-relaxed font-light">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
              alt="Construction site"
              className="w-full h-72 lg:h-80 object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#2F5D8C]/10" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2F5D8C]/60 to-transparent p-6">
              <p className="font-display text-white text-xl font-light italic">
                "Secure your stand today before prices increase."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
