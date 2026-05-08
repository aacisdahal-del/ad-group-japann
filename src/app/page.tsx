"use client";
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Components
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BusinessGrid from '@/components/BusinessGrid';
import ReviewMarquee from '@/components/ReviewMarquee';
import EnquiryHub from '@/components/EnquiryHub';

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const containerRef = useRef(null);

  // Smooth scroll handler for the Magnetic Nav
  const scrollToSection = (id: string) => {
    gsap.to(window, { duration: 1.2, scrollTo: id, ease: "power4.inOut" });
  };

  return (
    <main ref={containerRef} className="bg-[#fcfcfc] text-[#0A192F] selection:bg-[#E67E22] selection:text-white">
      <Navbar onNavClick={scrollToSection} />
      
      <section id="home">
        <Hero />
      </section>

      <section id="services" className="py-24 px-6 md:px-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 uppercase tracking-widest"
        >
          Our Business <span className="text-[#E67E22]">Ecosystem</span>
        </motion.h2>
        <BusinessGrid />
      </section>

      <section id="reviews" className="bg-[#0A192F] py-20 overflow-hidden">
        <ReviewMarquee />
      </section>

      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
           <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="border-t-4 border-[#E67E22] pt-12"
           >
             <h3 className="text-3xl font-bold mb-8">Master Enquiry Hub</h3>
             <EnquiryHub />
           </motion.div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} AD GROUP JAPAN. Built with Precision.
      </footer>
    </main>
  );
}