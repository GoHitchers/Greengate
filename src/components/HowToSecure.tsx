const steps = [
  {
    number: '01',
    title: 'Schedule a Viewing',
    body: 'Call our office to schedule a viewing appointment and receive more information about the development.',
  },
  {
    number: '02',
    title: 'Visit the Site',
    body: 'View the site in person and ask all your questions regarding the upcoming development and available homes.',
  },
  {
    number: '03',
    title: 'Receive Documents',
    body: 'Receive verification documents via email after your viewing appointment for your records.',
  },
  {
    number: '04',
    title: 'Due Diligence',
    body: 'Conduct your own due diligence with your lawyers and verify with the local municipality.',
  },
  {
    number: '05',
    title: 'Secure Your Home',
    body: 'Once satisfied, proceed with securing your home — complete and sign the agreement documents.',
  },
  {
    number: '06',
    title: 'Submit & Confirm',
    body: 'Submit all required documents with proof of payment. Your investor profile will be added to the development database.',
  },
];

export default function HowToSecure() {
  return (
    <section id="how-to-secure" className="py-24 lg:py-32 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 lg:mb-20">
          <p className="font-sans text-[#A78F51] text-xs tracking-[0.3em] uppercase mb-5">
            How to Invest
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-[#2F5D8C] font-light">
            Six Simple Steps<br />
            <em>to Your New Home</em>
          </h2>
          <div className="w-12 h-px bg-[#A78F51] mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map(({ number, title, body }) => (
            <div
              key={number}
              className="bg-white p-8 border-t-2 border-[#2F5D8C] hover:shadow-md transition-shadow duration-300"
            >
              <p className="font-display text-5xl text-[#2F5D8C]/10 font-light mb-4 leading-none">
                {number}
              </p>
              <h3 className="font-display text-xl text-[#2F5D8C] mb-3">{title}</h3>
              <p className="font-sans text-sm text-[#40454A] leading-[1.8] font-light">{body}</p>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-16 bg-[#2F5D8C] p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
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
