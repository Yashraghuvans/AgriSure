// app/components/HowItWorksSection.js
import { FaMobileAlt, FaMapMarkerAlt, FaCloudUploadAlt, FaDollarSign, FaRocket } from 'react-icons/fa';

export default function HowItWorksSection() {
  const steps = [
    { number: 1, title: "Farmer registers via mobile/web", icon: FaMobileAlt },
    { number: 2, title: "Geo-tagging & crop input", icon: FaMapMarkerAlt },
    { number: 3, title: "Real-time climate risk analysis", icon: FaCloudUploadAlt },
    { number: 4, title: "Dynamic premium generation", icon: FaDollarSign },
    { number: 5, title: "Auto-payout via satellite-verified damage", icon: FaRocket },
  ];

  return (
    <section id="how-it-works-section" className="py-16 bg-[#111827]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-[#1f2937] p-8 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center h-16 w-16 bg-blue-900 text-blue-400 rounded-full text-2xl font-bold mb-4">
                {step.number}
              </div>
              {step.icon && <step.icon className="h-12 w-12 text-green-400 mb-4" />}
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}