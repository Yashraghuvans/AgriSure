// app/components/BenefitsSection.js
import { FaUsers, FaBuilding, FaUniversity } from 'react-icons/fa';

export default function BenefitsSection() {
  const benefits = {
    farmers: [
      "Guaranteed income stability",
      "Faster, transparent payouts",
      "Personalized risk assessment",
      "Access to accurate climate data",
    ],
    governments: [
      "Efficient disaster response",
      "Reduced administrative burden",
      "Enhanced food security",
      "Data-driven policy making",
    ],
    insurers: [
      "Accurate risk pricing",
      "Automated claims processing",
      "Reduced fraud",
      "New market opportunities",
    ],
  };

  return (
    <section id="benefits-section" className="py-16 bg-[#111827]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1f2937] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-green-400 mb-4 flex items-center">
              <FaUsers className="h-7 w-7 mr-2" /> Farmers
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              {benefits.farmers.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="bg-[#1f2937] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center">
              <FaBuilding className="h-7 w-7 mr-2" /> Governments
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              {benefits.governments.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="bg-[#1f2937] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-green-400 mb-4 flex items-center">
              <FaUniversity className="h-7 w-7 mr-2" /> Insurers
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              {benefits.insurers.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}