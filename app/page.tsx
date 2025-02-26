"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen text-center glass">
      <h2 className="text-5xl font-extrabold text-blue-400">Welcome to Princeton Quantitative Traders</h2>
      <p className="mt-4 text-lg text-gray-300">
        We leverage quantitative methods to gain a competitive edge in trading.
      </p>
      <div className="mt-6">
        <a href="/mission" className="bg-blue-500 px-6 py-2 rounded-full text-white font-bold hover:bg-blue-600 transition-all">
          Learn More
        </a>
      </div>
    </motion.div>
  );
}