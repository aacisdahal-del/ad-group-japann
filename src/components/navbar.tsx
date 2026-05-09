"use client";
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface NavbarProps {
  onNavClick: (id: string) => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Enquire', href: '#enquire' },
];

export default function Navbar({ onNavClick }: NavbarProps) {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const links = document.querySelectorAll('.nav-link');
    
    links.forEach((link) => {
      link.addEventListener('mousemove', (e: any) => {
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Move the link text toward the mouse
        gsap.to(link, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: "power2.out" });
      });

      link.addEventListener('mouseleave', () => {
        // Snap back to center
        gsap.to(link, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
      });
    });
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 p-6">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 flex justify-between items-center shadow-lg"
      >
        <div className="font-black text-xl tracking-tighter text-[#0A192F]">
          AD GROUP <span className="text-[#E67E22]">JAPAN</span>
        </div>

        <ul className="flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(link.href);
                }}
                className="nav-link block text-sm font-bold uppercase tracking-widest text-[#0A192F] hover:text-[#E67E22] transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}