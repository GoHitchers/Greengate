import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import DevelopmentDetails from './components/DevelopmentDetails';
import WhyInvest from './components/WhyInvest';
import HouseTypes from './components/HouseTypes';
import HowToSecure from './components/HowToSecure';
import PastDevelopments from './components/PastDevelopments';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Nav scrolled={scrolled} />
      <Hero />
      <About />
      <DevelopmentDetails />
      <WhyInvest />
      <HouseTypes />
      <HowToSecure />
      <PastDevelopments />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
