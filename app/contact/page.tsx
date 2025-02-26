export default function Contact() {
  return (
    <motion.div className="glass mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-bold text-blue-400">Contact Us</h1>
      <p className="mt-4 text-lg text-gray-300">Reach out to us for collaborations and inquiries...</p>
    </motion.div>
  );
}