// app/components/ProblemSection.js
import { FaLightbulb, FaCloud, FaFileAlt, FaChartBar } from 'react-icons/fa';

export default function ProblemSection() {
  const problems = [
    { text: "80% of farmers lack reliable insurance", icon: FaLightbulb },
    { text: "Climate change causes unpredictable yields and rising losses", icon: FaCloud },
    { text: "Government schemes are slow, generic, or inefficient", icon: FaFileAlt },
    { text: "Current insurance doesn't factor in real-time risk or local data", icon: FaChartBar },
  ];

  return (
    <section id="problem-section" className="py-16 bg-[#111827]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">The Problem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="flex items-start bg-[#1f2937] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              {problem.icon && <problem.icon className="h-8 w-8 text-blue-400 mr-4 flex-shrink-0" />}
              <p className="text-lg text-gray-200 leading-relaxed">{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}