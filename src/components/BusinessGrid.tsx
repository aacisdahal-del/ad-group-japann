"use client";
import { motion } from 'framer-motion';

const sectors = [
  { title: "Land Survey", icon: "📐", desc: "Precision measurement and mapping." },
  { title: "Restaurants", icon: "🍱", desc: "Authentic multi-cuisine dining." },
  { title: "Halal Shop", icon: "🛒", desc: "International grocery supply." },
  { title: "Real Estate", icon: "🏠", desc: "Property solutions in Chiba." },
  { title: "Trading", icon: "🚢", desc: "Global import and export." },
  { title: "Consultancy", icon: "🤝", desc: "Business setup & support." },
];

export default function BusinessGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {sectors.map((s, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -10, rotateY: 5, rotateX: -5 }}
          className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-[#E67E22] cursor-pointer group"
        >
          <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">
            {s.icon}
          </div>
          <h3 className="text-xl font-bold text-[#0A192F]">{s.title}</h3>
          <p className="text-gray-500 mt-2 text-sm">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}