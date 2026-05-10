import { Calculator, Ligature as FileSignature, Landmark, Key, Lightbulb, ShieldCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Calculator,
    title: 'Prepare Financially & Get Pre-qualified',
    bullets: [
      'Get Pre-qualified — Use our real estate agencies and bond originator to understand what you can afford, which strengthens your offer.',
      'Check Credit Score — Ensure your credit rating is good to secure a better interest rate.',
      'Calculate Costs — Account for bond registration and transfer duty (payable on properties over R1.1 million).',
      'Save for a Deposit — While 100% loans are available, a 10% deposit often yields better rates.',
    ],
  },
  {
    number: '02',
    icon: FileSignature,
    title: 'Sign Offer to Purchase (OTP)',
    bullets: [
      'This binding contract outlines the price, terms, and conditions of your property purchase.',
    ],
  },
  {
    number: '03',
    icon: Landmark,
    title: 'Bond Approval & Conveyancing',
    bullets: [
      'Apply for a Bond — Submit your documents (ID, proof of income, bank statements) to our real estate agents.',
      'Conveyancing — The seller appoints a conveyancer to transfer ownership at the Deeds Office.',
    ],
  },
  {
    number: '04',
    icon: Key,
    title: 'Finalising the Purchase',
    bullets: [
      'Bond Registration — A bond attorney registers the mortgage in your name.',
      'Costs Payment — Pay all required transfer and bond costs.',
    ],
  },
  {
    number: '05',
    icon: Key,
    title: 'Registration & Key Handover',
    bullets: [
      'Once the deeds are registered, ownership transfers, and you get the keys to your new home.',
    ],
  },
];

const tips = [
  {
    icon: Lightbulb,
    title: 'First-Time Buyers',
    body: 'Check for government subsidies, such as FLISP, if your income is between R3,501 and R22,000 per month.',
  },
  {
    icon: ShieldCheck,
    title: 'Foreign Buyers',
    body: 'Non-residents can buy property but are subject to South African Reserve Bank (SARB) regulations regarding fund repatriation.',
  },
  {
    icon: ShieldCheck,
    title: 'Due Diligence',
    body: 'Always check for approved building plans to avoid issues with your local municipality.',
  },
];

export default function HowToSecure() {
  return (
    <section id="how-to-secure" className="py-24 lg:py-32 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 lg:mb-20">
          <p className="font-sans text-[#A78F51] text-xs tracking-[0.3em] uppercase mb-5">
            How to Purchase
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-[#2F5D8C] font-light">
            Your Path<br />
            <em>to Home Ownership</em>
          </h2>
          <div className="w-12 h-px bg-[#A78F51] mx-auto mt-6" />
        </div>

        {/* Steps */}
        <div className="space-y-6 mb-20">
          {steps.map(({ number, icon: Icon, title, bullets }) => (
            <div
              key={number}
              className="bg-white p-8 lg:p-10 border-l-2 border-[#2F5D8C] hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-[#2F5D8C]/8 flex items-center justify-center">
                    <Icon size={20} className="text-[#2F5D8C]" />
                  </div>
                  <span className="font-display text-sm text-[#A78F51] tracking-wider">{number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl text-[#2F5D8C] mb-4">{title}</h3>
                  <ul className="space-y-3">
                    {bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[#A78F51] flex-shrink-0" />
                        <p className="font-sans text-sm text-[#40454A] leading-[1.8] font-light">{bullet}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Tips */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <p className="font-sans text-[#A78F51] text-xs tracking-[0.3em] uppercase mb-3">
              Important Tips
            </p>
            <h3 className="font-display text-2xl lg:text-3xl text-[#2F5D8C] font-light">
              Know Before You Buy
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tips.map(({ icon: TipIcon, title, body }) => (
              <div
                key={title}
                className="bg-white p-8 border border-gray-100 hover:border-[#2F5D8C]/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#A78F51]/10 flex items-center justify-center mb-5">
                  <TipIcon size={18} className="text-[#A78F51]" />
                </div>
                <h4 className="font-display text-lg text-[#2F5D8C] mb-3">{title}</h4>
                <p className="font-sans text-sm text-[#40454A] leading-[1.8] font-light">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA bar */}
        <div className="bg-[#2F5D8C] p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <p className="font-sans text-[#A78F51] text-xs tracking-[0.3em] uppercase mb-3">
              Ready to Get Started?
            </p>
            <h3 className="font-display text-3xl lg:text-4xl text-white font-light">
              Join the Greengate<br /><em>Lifestyle Community</em>
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a
              href="tel:0792758821"
              className="px-8 py-4 bg-[#A78F51] text-white font-sans text-xs tracking-widest uppercase hover:bg-[#8f7840] transition-colors duration-300 text-center"
            >
              Call Us Now
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white/40 text-white font-sans text-xs tracking-widest uppercase hover:border-white hover:bg-white/10 transition-all duration-300 text-center"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
