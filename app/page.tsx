"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div 
      className="container"
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <h1>🚀 Welcome to Princeton Quantitative Traders</h1>
      <p>
        PQT is Princeton’s premier student-run organization for algorithmic 
        trading and quantitative finance. We explore cutting-edge strategies, 
        data-driven decision-making, and market inefficiencies through research, 
        competitions, and real-world applications.
      </p>
      <p>
        Our members develop robust trading algorithms, leverage mathematical 
        modeling, and dive deep into high-frequency trading techniques.  
        Whether you’re a coding expert or a finance enthusiast, PQT is the 
        place to innovate, compete, and excel.
      </p>
    </motion.div>
  );
}
