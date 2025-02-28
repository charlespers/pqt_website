import Image from "next/image";

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
            <Image 
              src="/PQT-Logo1.png" 
              alt="PQT Logo" 
              width={200} 
              height={200} 
              priority
            />
          </div>
          <p className="text-lg mt-4">
            Our mission is to bridge the gap between Princeton students and quantitative finance 
            through education, research, and competitions.
          </p>
          <div className="flex justify-center mt-4">
            <Image 
              src="/princeton-tiger.png" 
              alt="Princeton Tiger" 
              width={100} 
              height={100} 
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
