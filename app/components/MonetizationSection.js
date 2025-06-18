// app/components/MonetizationSection.js
import { FaCreditCard, FaStore, FaHandshake, FaRedoAlt } from 'react-icons/fa';

export default function MonetizationSection() {
  const monetizationMethods = [
    { text: "Freemium for farmers (basic features free, premium for advanced)", icon: FaCreditCard },
    { text: "API licensing to insurers/governments for data & services", icon: FaStore },
    { text: "Partnerships with agri-tech companies", icon: FaHandshake },
    { text: "Future: agri credit score, microloans based on yield data", icon: FaRedoAlt },
  ];

  return (
    <section id="monetization-section" className="py-16 bg-[#111827]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Monetization & Sustainability</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {monetizationMethods.map((method, index) => (
            <div key={index} className="flex items-start bg-[#1f2937] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              {method.icon && <method.icon className="h-8 w-8 text-green-400 mr-4 flex-shrink-0" />}
              <p className="text-lg text-gray-200 leading-relaxed">{method.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}