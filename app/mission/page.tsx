export default function Mission() {
  return (
    <motion.div className="glass mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-bold text-blue-400">Our Mission</h1>
      <p className="mt-4 text-lg text-gray-300">Princeton Quantitative Traders is dedicated to leveraging data-driven insights to make better trading decisions...</p>
    </motion.div>
  );
}