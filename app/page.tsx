import Image from "next/image";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-white py-20">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <h1 className="text-5xl font-bold uppercase text-orange-500">Princeton Quantitative Traders</h1>
        <h2 className="text-2xl text-gold mt-4">Algorithmic Excellence. Mathematical Precision.</h2>
      </section>

      {/* Mission Statement Section */}
      <section className="home-content flex justify-center w-full mt-12">
        <div className="content-box w-8/12 max-w-5xl bg-gradient-to-b from-black to-orange-700 p-8 rounded-xl shadow-lg text-left">
          <div className="flex justify-center">
            <Image src="/PQT-Logo1.png" alt="PQT Logo" width={200} height={200} priority />
          </div>
          <p className="text-lg mt-4">
            Our mission is to bridge the gap between Princeton students and quantitative finance 
            through education, research, and competitions.
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-32 h-32 overflow-hidden rounded-full border-4 border-orange-500">
              <Image src="/princeton-tiger.png" alt="Princeton Tiger" width={128} height={128} className="object-cover w-full h-full rounded-full" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="home-content flex justify-center w-full mt-12">
        <div className="content-box w-8/12 max-w-5xl bg-gradient-to-b from-black to-orange-700 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-orange-500 text-center">Meet Our Team</h2>

          {/* Team Member Grid */}
          <div className="grid grid-cols-2 gap-8 mt-6">
            {[
              { name: "President", image: "/members/jerry_headshot.jpg" },
              { name: "Vice President | Project Management | Competitions", image: "/members/charles_headshot.jpeg" },
              { name: "Vice President | Treasurer", image: "/members/rodrigo_headshot.jpg" },
              { name: "Outreach Officer", image: "/members/loc_headshot.jpg" },
              { name: "Outreach Officer", image: "/members/tom_headshot.jpg" },
              { name: "Event Officer", image: "/members/andrew_headshot.png" }
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-32 h-32 overflow-hidden rounded-full border-4 border-orange-500">
                  <Image src={member.image} alt={member.name} width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <p className="mt-2 font-semibold">{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="home-content flex justify-center w-full mt-12">
        <div className="content-box w-8/12 max-w-5xl bg-gradient-to-b from-black to-orange-700 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-orange-500 text-center">Photo Gallery</h2>
          <Gallery />
        </div>
      </section>
    </div>
  );
}
