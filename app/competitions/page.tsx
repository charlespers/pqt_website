"use client";
import { motion } from "framer-motion";
export default function Competitions() {
  return (
    <motion.div className="glass mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-bold text-blue-400">Competitions</h1>
      <p className="mt-4 text-lg text-gray-300">We participate in high-stakes competitions to sharpen our skills...</p>
    </motion.div>
  );
}