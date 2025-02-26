"use client";
import { motion } from "framer-motion";
export default function Members() {
  return (
    <motion.div className="glass mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-bold text-blue-400">Our Members</h1>
      <p className="mt-4 text-lg text-gray-300">Meet the brilliant minds behind our success...</p>
    </motion.div>
  );
}