"use client";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const nonce = "random123"; // Replace with a dynamic nonce later if needed

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <motion.div
        key={usePathname()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="p-8"
      >
        {children}
      </motion.div>
      <Footer />
      <style nonce={nonce}>
        {`
          body { background-color: #111; }
          a { color: #4f46e5; }
        `}
      </style>
    </div>
  );
}
