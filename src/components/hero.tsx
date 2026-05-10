"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-[#0A192F] overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* The Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-64 h-64 md:w-96 md:h-96 mb-8 drop-shadow-[0_0_50px_rgba(230,126,34,0.3)]"
        >
          <Image
  src="/ad-group-japann/logo-main-b.png" // This matches your GitHub repository name
  alt="AD Group Japan Logo"
  fill
  className="object-contain"
  priority
/>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-white text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-4">
            AD GROUP <span className="text-[#E67E22]">JAPAN</span>
          </h1>
          <p className="text-gray-400 font-bold tracking-[0.4em] uppercase text-xs">
            Reliability • Innovation • Excellence
          </p>
        </motion.div>
      </div>

      {/* Decorative Gradient Glow */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#E67E22] opacity-10 blur-[120px] rounded-full" />
    </div>
  );
}