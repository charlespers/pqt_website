export default function Home() {
  return (
    <div className="flex flex-col items-center text-white py-20">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <h1 className="text-5xl font-bold uppercase text-orange-500">Princeton Quantitative Traders</h1>
        <h2 className="text-2xl text-gold mt-4">Algorithmic Excellence. Mathematical Precision.</h2>
      </section>

      {/* Mission Statement Section */}
      <section className="home-content flex flex-col items-center py-20">
        <div className="content-box bg-gradient-to-b from-black to-orange-700 p-8 rounded-xl shadow-lg max-w-3xl text-left">
          <div className="flex justify-center">
            <Image src="/PQT-Logo1.png" alt="PQT Logo" width={200} height={200} />
          </div>
          <p className="text-lg mt-4">
            Our mission is to bridge the gap between Princeton students and quantitative finance 
            through education, research, and competitions.
          </p>
          <div className="flex justify-center mt-4">
            <Image src="/princeton-tiger.png" alt="Princeton Tiger" width={100} height={100} />
          </div>
        </div>
      </section>

      {/* Officers Section */}
      <section className="officers-section text-center py-20">
        <h2 className="text-4xl text-orange-500 font-bold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {["President", "Vice President", "Treasurer", "Officer"].map((role) => (
            <div key={role} className="officer-card p-4 bg-black rounded-lg">
              <div className="h-32 w-32 bg-gray-700 rounded-full mx-auto"></div>
              <p className="mt-4 text-lg text-white">{role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
