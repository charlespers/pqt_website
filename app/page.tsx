import Image from "next/image";
import Gallery from "../components/Gallery";
import MemberCard from "../components/MemberCard";

export default function Home() {
  return (
    <div className="content-box flex flex-col items-center text-white py-20 px-4">
      {/* Hero Section */}
      <section className="hero-section text-center w-full max-w-4xl">
        <h1 className="text-2xl sm:text-3xl font-bold uppercase text-orange-500">
          Princeton Quantitative Traders
        </h1>
        <h2 className="text-sm sm:text-lg text-gold mt-4">
          Algorithmic Excellence. Mathematical Precision.
        </h2>
      </section>

      {/* Mission Statement */}
      <section className="home-content flex justify-center w-full mt-12">
        <div className="content-box w-full max-w-4xl p-8 rounded-xl shadow-lg bg-gradient-to-b from-black to-orange-700">
          <div className="flex justify-center">
            <Image src="/PQT-Logo1.png" alt="PQT Logo" width={150} height={150} priority />
          </div>
          <p className="text-lg mt-4 text-center">
            Our mission is to bridge the gap between Princeton students and quantitative finance 
            through education, research, and competitions.
          </p>
          <div className="flex justify-center mt-4">
            <Image
              src="/princeton-tiger.jpg"
              alt="Princeton Tiger"
              width={120}
              height={120}
              className="object-cover w-28 h-28 rounded-full border-4 border-orange-500"
              priority
            />
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="home-content flex justify-center w-full mt-12">
        <div className="content-box w-full max-w-4xl bg-gradient-to-b from-black to-orange-700 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-orange-500 text-center">Meet Our Team</h2>

          {/* Team Members Grid - Fixed to ensure two-column layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
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

      {/* Photo Gallery Section */}
      <section className="home-content flex justify-center w-full mt-12">
        <div className="content-box w-full max-w-4xl bg-gradient-to-b from-black to-orange-700 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-orange-500 text-center">Photo Gallery</h2>
          <Gallery />
        </div>
      </section>
    </div>
  );
}
