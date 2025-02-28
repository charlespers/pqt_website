export default function Contact() {
  return (
    <div className="flex flex-col items-center text-white py-20">
      <h2 className="text-4xl text-orange-500 font-bold mb-8">Contact Us</h2>
      <div className="bg-gradient-to-b from-black to-orange-700 p-6 rounded-xl shadow-lg text-left max-w-2xl">
        <p>Email us at: <a href="mailto:pqt@princeton.edu" className="text-gold">pqt@princeton.edu</a></p>
        <p className="mt-2">Feel free to reach out with any questions or collaboration opportunities.</p>
      </div>
    </div>
  );
}
