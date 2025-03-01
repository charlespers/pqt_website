export default function About() {
  return (
    <div className="flex flex-col items-center text-white w-full max-w-4xl p-8">
      <div className="content-box w-full max-w-6xl bg-gradient-to-b from-black to-orange-700 p-10 rounded-xl shadow-lg">
        <h2 className="text-4xl text-orange-500 font-bold mb-10 text-center">
          About Princeton QT
        </h2>

        {/* Grid container with proper spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full">
          {["Competitions", "Projects", "Research", "Education"].map((section) => (
            <div
              key={section}
              className="about-box bg-black/30 p-6 rounded-xl shadow-lg flex flex-col"
            >
              <h3 className="text-2xl font-semibold text-orange-400">{section}</h3>
              <p className="text-white mt-2 flex-grow">
                Description of {section} initiatives.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
