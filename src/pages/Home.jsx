import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  // Smooth scroll behavior for internal links on Home
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        if(this.getAttribute('href') === '#') return;
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default Home;
