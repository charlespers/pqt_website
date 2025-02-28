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
      <section className="home-content">
        <div className="content-box">
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
              width={150} 
              height={150} 
              className="princeton-tiger"
              priority
            />
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="home-content">
        <div className="content-box">
          <h2 className="text-3xl font-bold text-orange-500 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6 justify-center items-center">
            {/* Placeholder for member headshots - Replace with actual images */}
            <div className="team-member">
              <Image src="/members/president.png" alt="President" width={150} height={150} className="rounded-full" />
              <p className="text-center mt-2 font-semibold">President</p>
            </div>
            <div className="team-member">
              <Image src="/members/Charles.png" alt="Vice President" width={150} height={150} className="rounded-full" />
              <p className="text-center mt-2 font-semibold">Vice President</p>
            </div>
            <div className="team-member">
              <Image src="/members/treasurer.png" alt="Treasurer" width={150} height={150} className="rounded-full" />
              <p className="text-center mt-2 font-semibold">Treasurer</p>
            </div>
            <div className="team-member">
              <Image src="/members/officer.png" alt="Officer" width={150} height={150} className="rounded-full" />
              <p className="text-center mt-2 font-semibold">Officer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
