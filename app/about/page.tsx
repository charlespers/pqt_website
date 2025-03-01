export default function About() {
  return (
    <div className="flex flex-col items-center text-white w-full max-w-4xl p-8">
      <div className="content-box w-full max-w-6xl bg-gradient-to-b from-black to-orange-700 p-10 rounded-xl shadow-lg">
        <h2 className="text-4xl text-orange-500 font-bold mb-10 text-center">
          About Princeton QT
        </h2>

        {/* Grid container with proper spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full">
          {[
            {
              title: "Competitions",
              description: "Coming Soon"
            },
            {
              title: "Projects",
              description:
                "Students will get into groups and work on real-industry quantitative projects such as building machine learning models, integrating live data to create algorithms on exchanges, targeting arbitrage in markets, and market-making projects using statistics, data science tools, and language, with the guidance of professional mentors."
            },
            {
              title: "Research",
              description:
                "Students will experiment with different trading strategies, time series analysis, pricing models, derivatives, optimization schemes, machine learning theory, and compile results into iterative research models, driving the cutting edge of financial analytics."
            },
            {
              title: "Education",
              description:
                "Our curriculum is beginner-friendly, designed for those with no prior experience in quantitative trading. We teach how to learn, how to prepare for interviews, and provide essential quantitative trading know-how to build a strong foundation in the field."
            }
          ].map(({ title, description }) => (
            <div
              key={title}
              className="about-box bg-black/30 p-6 rounded-xl shadow-lg flex flex-col"
            >
              <h3 className="text-2xl font-semibold text-orange-400">{title}</h3>
              <p className="text-white mt-2 flex-grow">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}