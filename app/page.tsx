export default function Home() {
  return (
    <section className="home-content text-center py-20">
      <div className="content-box bg-gradient-to-b from-black to-orange-700 p-8 rounded-xl shadow-lg text-center max-w-3xl mx-auto">
        <img src="/PQT-Logo1.png" alt="PQT Logo" className="mx-auto w-32" />
        <h1 className="text-4xl font-bold text-orange-500 mt-4">Princeton Quantitative Traders</h1>
        <p className="text-white mt-4">
          Princeton Quantitative Traders is a premier student-run financial group dedicated to leveraging mathematical models, machine learning, and quantitative analysis to develop innovative trading strategies.
        </p>
        <img src="/princeton-tiger.png" alt="Princeton Tiger" className="mx-auto w-24 mt-6" />
      </div>

      {/* Officers Section */}
      <section className="officers-section text-center py-20">
        <h2 className="text-4xl text-orange-500 font-bold mb-8">Meet Our Team</h2>
        <div className="officers-container grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Officer placeholders */}
          {["President", "Vice President", "Treasurer", "Officer"].map((role) => (
            <div key={role} className="officer-card p-4 bg-black rounded-lg">
              <div className="h-32 w-32 bg-gray-700 rounded-full mx-auto"></div>
              <p className="mt-4 text-lg text-white">{role}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
