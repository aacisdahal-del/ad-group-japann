"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Components
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import BusinessGrid from '@/components/BusinessGrid';
import ReviewMarquee from '@/components/reviewmarquee';
import EnquireHub from '@/components/EnquireHub';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

export default function Home() {
  const containerRef = useRef<HTMLElement | null>(null);

  // 1. Reading Progress Bar (The "Gold Line")
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 2. Navigation Scroll Handler
  const scrollToSection = (id: string) => {
    gsap.to(window, { 
      duration: 1.5, 
      scrollTo: { y: id, offsetY: 70 }, 
      ease: 'power4.inOut' 
    });
  };

  return (
    <main
      ref={containerRef}
      className="relative bg-[#fcfcfc] text-[#0A192F] selection:bg-[#E67E22] selection:text-white"
    >
      {/* Global Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#E67E22] origin-left z-[100]" 
        style={{ scaleX }} 
      />

      <Navbar onNavClick={scrollToSection} />

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative h-screen overflow-hidden">
        <Hero />
      </section>

      {/* --- CORE SERVICES SECTION --- */}
      <section id="services" className="py-24 md:py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <header className="mb-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 border border-gray-200 rounded-full mb-6"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#E67E22]">
                Our Portfolio
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none"
            >
              The Business <br />
              <span className="text-gray-200">Ecosystem</span>
            </motion.h2>
          </header>

          {/* Grid of your business sectors: Real Estate, Surveying, etc. */}
          <BusinessGrid />
        </div>
      </section>

      {/* --- TRUST & REVIEWS --- */}
      <section id="reviews" className="bg-[#0A192F] py-24 overflow-hidden border-y border-white/5">
        <div className="text-center mb-16">
          <h3 className="text-white text-sm font-bold tracking-[0.3em] uppercase opacity-50">Local Reputation • Chiba</h3>
        </div>
        <ReviewMarquee />
      </section>

      {/* --- CONTACT / ENQUIRY HUB --- */}
      <section id="contact" className="py-24 md:py-40 bg-[#f9f9f9]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-black uppercase tracking-tighter leading-tight mb-6">
                Start a <br /><span className="text-[#E67E22]">Collaboration</span>
              </h2>
              <p className="text-gray-500 mb-10 text-lg">
                Select your required sector. Our local experts will respond with a tailored proposal.
              </p>
              
              {/* Location Detail */}
              <div className="space-y-6 pt-6 border-t border-gray-200">
                <div>
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-1">HQ Operations</h4>
                  <p className="font-bold">Auburn / Chiba / Sydney</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200/50"
              >
                <EnquireHub />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-black text-2xl tracking-tighter italic">
            AD GROUP <span className="text-[#E67E22]">JAPAN</span>
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <a href="/admin" className="hover:text-[#E67E22] transition-colors">Admin Portal</a>
            <span>© 2026 ADG Japan</span>
          </div>
        </div>
      </footer>
    </main>
  );
}