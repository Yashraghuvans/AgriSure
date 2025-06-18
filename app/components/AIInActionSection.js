// app/components/AIInActionSection.js
import { FaLightbulb, FaChartLine, FaSatellite } from 'react-icons/fa';

export default function AIInActionSection() {
  const aiActions = [
    { text: "Predictive modeling: rainfall, soil moisture, disease", icon: FaLightbulb },
    { text: "Risk scoring: yields vs weather variables", icon: FaChartLine },
    { text: "Automated damage detection via satellite + NDVI", icon: FaSatellite },
  ];

  return (
    <section id="ai-in-action-section" className="py-16 bg-[#111827]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">AI in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {aiActions.map((action, index) => (
            <div key={index} className="flex items-start bg-[#1f2937] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              {action.icon && <action.icon className="h-8 w-8 text-blue-400 mr-4 flex-shrink-0" />}
              <p className="text-lg text-gray-200 leading-relaxed">{action.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}