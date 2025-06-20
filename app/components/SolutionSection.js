// app/components/SolutionSection.js
import { FaCheckCircle, FaCloud, FaChartPie, FaGlobeAmericas } from 'react-icons/fa';

export default function SolutionSection() {
  const solutions = [
    { text: "Smart climate-resilient crop insurance system", icon: FaCheckCircle },
    { text: "Uses AI, satellite data, and local weather patterns", icon: FaCloud },
    { text: "Dynamic premium calculation and automated claim processing", icon: FaChartPie },
    { text: "Personalized insurance for all farm sizes", icon: FaGlobeAmericas },
  ];

  return (
    <section id="solution-section" className="py-16 bg-[#111827]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">The Solution: Veridian Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {solutions.map((solution, index) => (
            <div key={index} className="flex items-start bg-[#1f2937] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              {solution.icon && <solution.icon className="h-8 w-8 text-green-400 mr-4 flex-shrink-0" />}
              <p className="text-lg text-gray-200 leading-relaxed">{solution.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}