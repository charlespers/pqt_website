import Image from "next/image";
import MemberCard from "../components/MemberCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-white py-20 px-4">
      {/* Hero Section */}
      <section className="hero-section text-center w-full max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-bold uppercase text-orange-500">
            Princeton Quantitative Traders
        </h1>
        <h2 className="text-lg sm:text-2xl text-white mt-4">
          •Research  •Projects  •Education  •Scholarship
        </h2>
      </section>

      {/* Mission Statement */}
      <section className="home-content flex justify-center w-full mt-12">
        <div className="content-box w-full max-w-4xl p-8 rounded-xl shadow-lg text-left bg-black bg-opacity-90">
          <div className="flex justify-center">
            <Image src="/PQT-Logo1.png" alt="PQT Logo" width={200} height={200} priority />
          </div>
          <p className="text-lg mt-4 text-left">
          Welcome to  Princeton Quantitative Traders, a student-led quantitative trading club dedicated to exploring data-driven financial markets and algorithmic trading. Our mission is to equip members with the skills and knowledge needed to develop, test, and deploy quantitative trading strategies.
          </p>
          <h3>
          What We Do
          </h3>
          <p className="text-lg mt-4 text-left">
            <strong>Strategy Research</strong> – We research and build algorithmic trading strategies using statistical models, machine learning, and financial data analysis.
          </p>
          <p className="text-lg mt-2 text-left">
            <strong>Technical Workshops</strong> – We offer hands-on training in Python, backtesting frameworks, and trading infrastructure to prepare members for real-world applications.
          </p>
          <p className="text-lg mt-2 text-left">
            <strong>Trading Competitions</strong> – Members participate in simulated and live trading competitions to test strategies in dynamic market conditions.
          </p>
          <p className="text-lg mt-2 text-left">
            <strong>Industry & Career Development</strong> – We connect members with professionals, host guest speakers, and provide resources for careers in quantitative finance.
          </p>
          <p className="text-lg mt-2 text-left">
            <strong>Collaborations & Professionalism</strong> – We work with other trading clubs and research groups to explore cutting-edge developments in quantitative finance.
          </p>
          <p className="text-lg mt-4 text-left font-bold">
            Join us today!
          </p>

          <div className="flex justify-center mt-4">
            <Image
              src="/princeton-tiger.jpg"
              alt="Princeton Tiger"
              width={128}
              height={128}
              className="object-cover w-32 h-32 rounded-full border-4 border-orange-500"
              priority
            />
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="home-content flex justify-center w-full mt-12">
        <div className="content-box w-full max-w-4xl bg-gradient-to-b from-black to-orange-700 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-orange-500 text-center">Meet Our Team</h2>

          {/* Team Members Grid (Two Columns on Desktop) */}
          <div className="member-grid mt-6">
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