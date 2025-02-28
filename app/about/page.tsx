export default function About() {
  return (
    <div className="flex flex-col items-center text-white py-20 px-4">
      <div className="content-box w-full max-w-5xl bg-gradient-to-b from-black to-orange-700 p-8 rounded-xl shadow-lg text-left">
        <h2 className="text-4xl text-orange-500 font-bold mb-8">About Princeton QT</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {["Competitions", "Projects", "Research", "Education"].map((section) => (
            <div
              key={section}
              className="about-box bg-gradient-to-b from-black to-orange-700 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-orange-400">{section}</h3>
              <p className="text-white mt-2">Description of {section} initiatives.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
