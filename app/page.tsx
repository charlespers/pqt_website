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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
            {/* Team Members */}
            {[
              { name: "President", image: "/members/president.png" },
              { name: "Vice President", image: "/members/vice-president.png" },
              { name: "Treasurer", image: "/members/treasurer.png" },
              { name: "Officer", image: "/members/officer.png" },
              { name: "Member 1", image: "/members/member1.png" },
              { name: "Member 2", image: "/members/member2.png" }
            ].map((member, index) => (
              <div key={index} className="team-member flex flex-col items-center">
                <div className="w-32 h-32 overflow-hidden rounded-full border-4 border-orange-500">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={128} 
                    height={128} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-center mt-2 font-semibold">{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
