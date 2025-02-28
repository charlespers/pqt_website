import Image from "next/image";
import MemberCard from "../components/MemberCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-white py-20">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <h1 className="text-5xl font-bold uppercase text-orange-500">Princeton Quantitative Traders</h1>
        <h2 className="text-2xl text-gold mt-4">Algorithmic Excellence. Mathematical Precision.</h2>
      </section>

      {/* Mission Statement Section */}
      <section className="home-content flex justify-center w-full">
        <div className="content-box w-8/12 max-w-5xl bg-gradient-to-b from-black to-orange-700 p-8 rounded-xl shadow-lg text-left">
          <div className="flex justify-center">
            <Image 
              src="/PQT-Logo1.png" 
              alt="PQT Logo" 
              width={200} 
              height={200} 
              priority
            />
          </div>
          <p className="text-lg mt-4 text-center">
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
      <section className="home-content flex justify-center w-full">
        <div className="content-box w-8/12 max-w-5xl bg-gradient-to-b from-black to-orange-700 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-orange-500 text-center">Meet Our Team</h2>

          {/* Two-Column Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 place-items-center">
            {[
              { name: "President", image: "/members/jerry_headshot.jpg" },
              { name: "Vice President | Project Management | Competitions", image: "/members/charles_headshot.jpeg" },
              { name: "Vice President | Treasurer", image: "/members/rodrigo_headshot.jpg" },
              { name: "Outreach Officer", image: "/members/loc_headshot.jpg" },
              { name: "Outreach Officer", image: "/members/tom_headshot.jpg" },
              { name: "Event Officer", image: "/members/andrew_headshot.png" }
            ].map((member, index) => (
              <MemberCard key={index} name={member.name} image={member.image} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
