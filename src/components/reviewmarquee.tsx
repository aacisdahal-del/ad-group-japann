"use client";
import { motion } from 'framer-motion';

const reviews = [
  { name: "Tanaka S.", text: "Best Halal grocery selection in Chiba!" },
  { name: "John D.", text: "Professional land survey team. Very accurate." },
  { name: "Anita K.", text: "The Himalayan cuisine at their restaurant is top-tier." },
  { name: "Hiroshi M.", text: "Helped me secure my business visa and office space." },
];

export default function ReviewMarquee() {
  return (
    <div className="flex overflow-hidden space-x-12 group py-10">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex space-x-12 whitespace-nowrap"
      >
        {[...reviews, ...reviews].map((rev, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl min-w-[300px]">
            <p className="text-white italic mb-4">"{rev.text}"</p>
            <p className="text-gold font-bold text-sm">- {rev.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}