import Link from 'next/link';
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaFire, FaSnowflake, FaLeaf, FaChartBar, FaBug } from 'react-icons/fa';


const dummyInsurancesData = {
  'plan-1': {
    name: 'Drought Resilience Plan',
    description: 'This plan provides comprehensive coverage for crop losses directly attributable to severe or prolonged drought conditions. It utilizes satellite imagery and local weather station data to accurately assess rainfall deficits and soil moisture levels. Payouts are triggered automatically based on pre-defined drought indices, ensuring rapid compensation without lengthy manual assessments.',
    features: [
      'Automated drought index monitoring',
      'Payouts based on area-specific rainfall data',
      'Coverage for major cash crops and staples',
      'Real-time alerts on drought severity',
    ],
    eligibility: [
      'Registered farmer with geo-tagged land',
      'Cultivation of approved drought-susceptible crops',
      'Minimum landholding of 1 acre',
    ],
    exclusions: [
      'Damage due to non-drought factors (e.g., pests, disease)',
      'Losses outside the specified coverage period',
      'Fraudulent claims',
    ],
    price: '$50/acre/season',
    faq: [
      { question: 'How is drought measured?', answer: 'Drought is measured using a combination of satellite-derived rainfall data and ground-based weather stations, analyzed against historical averages to determine deviation.' },
      { question: 'When are payouts made?', answer: 'Payouts are typically processed within 7-10 working days once the pre-defined drought severity index is met and verified by our system.' },
    ],
  },
  'plan-2': {
    name: 'Flood Protection Plan',
    description: 'Designed to protect farmers from crop damage caused by excessive rainfall and flooding. This plan leverages real-time hydrological models and water inundation maps to identify affected areas and calculate damage. Claims are processed swiftly, allowing farmers to recover and replant faster.',
    features: [
      'Covers standing crop and newly planted crop damage',
      'Utilizes satellite-based flood mapping',
      'Quick claim processing with minimal documentation',
      'Post-flood advisory services',
    ],
    eligibility: [
      'Farmer cultivating crops in flood-prone areas',
      'Enrollment before monsoon season begins',
      'Compliance with local agricultural practices',
    ],
    exclusions: [
      'Damage from irrigation system failures',
      'Pre-existing conditions before plan activation',
      'Intentional damage or negligence',
    ],
    price: '$45/acre/season',
    faq: [
      { question: 'What level of flooding is covered?', answer: 'The plan covers damage from water inundation exceeding a pre-defined threshold level, typically causing standing water for more than 24-48 hours.' },
      { question: 'Can I get advice after a flood?', answer: 'Yes, our platform provides access to agricultural experts who can offer guidance on post-flood recovery and suitable next steps.' },
    ],
  },
  'plan-3': {
    name: 'Pest & Disease Safeguard',
    description: 'This plan offers financial protection against significant yield losses due to major pest infestations or disease outbreaks identified by our AI models. It combines satellite data with ground observations to detect early signs of threats, enabling proactive measures and fair compensation for unavoidable losses.',
    features: [
      'AI-driven early detection of outbreaks',
      'Coverage for listed major pests and diseases',
      'Preventative advisories and mitigation strategies',
      'Yield loss assessment based on historical data and severity of outbreak',
    ],
    eligibility: [
      'All registered farmers with active cultivation',
      'Adherence to recommended crop protection practices',
      'Regular reporting of farm conditions (if requested)',
    ],
    exclusions: [
      'Minor localized infestations not impacting overall yield',
      'Damage due to farmer negligence in pest control',
      'Diseases not covered in the plan terms',
    ],
    price: '$35/acre/season',
    faq: [
      { question: 'How does AI detect outbreaks?', answer: 'Our AI analyzes changes in crop health indicators from satellite imagery and weather patterns, correlating them with known pest and disease outbreak conditions.' },
      { question: 'What if I already have a minor infestation?', answer: 'The plan covers significant yield losses from major outbreaks. Minor, controllable infestations are expected to be managed through standard farming practices.' },
    ],
  },
  'plan-4': {
    name: 'Hailstorm Guard',
    description: 'Specifically designed to cover direct physical damage to crops caused by hailstorms. This plan uses immediate weather alerts and post-storm satellite verification to assess damage quickly and accurately, ensuring prompt support to farmers affected by sudden, destructive weather events.',
    features: [
      'Direct physical damage coverage',
      'Rapid post-hailstorm assessment',
      'Fixed payout per percentage of damage',
      'Applicable across all crop types',
    ],
    eligibility: [
      'Farmers in areas susceptible to hailstorms',
      'Crop type specified at enrollment',
      'Report of hailstorm incident within 24 hours',
    ],
    exclusions: [
      'Damage from strong winds without hail',
      'Damage to farm infrastructure (e.g., sheds)',
      'Pre-existing crop damage before hailstorm',
    ],
    price: '$20/acre/event',
    faq: [
      { question: 'How is hail damage assessed?', answer: 'Damage is assessed visually through drone imagery or satellite data, and in some cases, confirmed by local agronomists for severity.' },
      { question: 'Is partial damage covered?', answer: 'Yes, the plan covers partial damage. Payouts are typically proportional to the percentage of yield loss estimated due to hail.' },
    ],
  },
  'plan-5': {
    name: 'Heatwave Protection',
    description: 'Covers losses due to extreme heat events affecting crop yield and quality. Utilizes temperature anomaly data and crop stress indices for rapid assessment and payout.',
    features: [
      'Covers heat-induced crop stress',
      'Automated temperature anomaly detection',
      'Rapid payout on verified heatwave events',
      'Covers a wide range of crops',
    ],
    eligibility: [
      'Farmers in heatwave-prone regions',
      'Enrollment before summer season',
      'Minimum 1 acre of eligible crops',
    ],
    exclusions: [
      'Losses from unrelated weather events',
      'Damage to non-crop assets',
      'Claims outside the coverage window',
    ],
    price: '$30/acre/season',
    faq: [
      { question: 'How is a heatwave defined?', answer: 'A heatwave is defined by local meteorological standards, typically as a period of abnormally high temperatures lasting several days.' },
      { question: 'Are all crops covered?', answer: 'Most major crops are covered; check the plan details for specific inclusions.' },
    ],
  },
  'plan-6': {
    name: 'Cold Snap Shield',
    description: 'Protects crops from unexpected frost and cold snaps during the growing season. Uses real-time temperature monitoring and frost alerts for quick claim processing.',
    features: [
      'Frost and cold snap coverage',
      'Real-time temperature monitoring',
      'Automated frost alerts',
      'Covers sensitive crop stages',
    ],
    eligibility: [
      'Farmers in cold-prone areas',
      'Enrollment before winter season',
      'Crops listed as frost-sensitive',
    ],
    exclusions: [
      'Damage from snow or hail',
      'Claims for non-listed crops',
      'Negligence in frost protection measures',
    ],
    price: '$28/acre/season',
    faq: [
      { question: 'How is frost damage verified?', answer: 'Frost damage is verified using temperature data and satellite imagery, sometimes supported by local inspection.' },
      { question: 'Can I enroll mid-season?', answer: 'Enrollment is only open before the start of the winter season.' },
    ],
  },
  'plan-7': {
    name: 'Multi-Peril Crop Insurance',
    description: 'Comprehensive plan covering drought, flood, pests, and diseases in one package. Ideal for farmers seeking all-in-one protection.',
    features: [
      'All major perils covered',
      'Single premium, multi-risk protection',
      'Streamlined claim process',
      'Customizable coverage options',
    ],
    eligibility: [
      'Registered farmers',
      'Minimum 2 acres of cultivation',
      'Compliance with recommended farming practices',
    ],
    exclusions: [
      'Non-agricultural losses',
      'Intentional damage',
      'Unreported landholdings',
    ],
    price: '$60/acre/season',
    faq: [
      { question: 'Can I customize my coverage?', answer: 'Yes, you can select specific perils and adjust coverage limits as needed.' },
      { question: 'Is there a waiting period?', answer: 'A short waiting period applies after enrollment before coverage begins.' },
    ],
  },
  'plan-8': {
    name: 'Livestock Loss Cover',
    description: 'Insurance for livestock loss due to disease, weather, or accidents. Includes veterinary support and rapid claim settlement.',
    features: [
      'Covers cattle, sheep, goats, and poultry',
      'Disease outbreak and accident coverage',
      'Veterinary helpline access',
      'Quick claim settlement',
    ],
    eligibility: [
      'Registered livestock owners',
      'Animals tagged and documented',
      'Compliance with animal health protocols',
    ],
    exclusions: [
      'Losses from theft',
      'Unregistered animals',
      'Negligence in animal care',
    ],
    price: '$40/animal/season',
    faq: [
      { question: 'What animals are covered?', answer: 'Cattle, sheep, goats, and poultry are covered under this plan.' },
      { question: 'How do I file a claim?', answer: 'Claims can be filed online with supporting documents and animal identification.' },
    ],
  },
  'plan-9': {
    name: 'Market Price Guarantee',
    description: 'Protects farmers against sudden drops in market prices for their crops. Ensures a minimum guaranteed price for enrolled crops.',
    features: [
      'Minimum price guarantee',
      'Covers major cash crops',
      'Monthly market price monitoring',
      'Direct payout for price shortfall',
    ],
    eligibility: [
      'Farmers selling through registered markets',
      'Enrollment before harvest',
      'Crops listed in the plan',
    ],
    exclusions: [
      'Price drops due to quality issues',
      'Unregistered market sales',
      'Late enrollment',
    ],
    price: '$15/acre/season',
    faq: [
      { question: 'How is the guaranteed price set?', answer: 'The guaranteed price is based on historical averages and government MSP (Minimum Support Price) where applicable.' },
      { question: 'When are payouts made?', answer: 'Payouts are made at the end of the marketing season if the market price falls below the guaranteed level.' },
    ],
  },
  'plan-10': {
    name: 'Insect Outbreak Cover',
    description: 'Covers losses from severe insect outbreaks not controlled by standard measures. Uses pest surveillance and rapid response for assessment.',
    features: [
      'Major insect outbreak coverage',
      'Pest surveillance network',
      'Rapid response assessment',
      'Covers a wide range of crops',
    ],
    eligibility: [
      'Farmers enrolled in pest monitoring',
      'Use of recommended pest control',
      'Reporting of outbreaks within 48 hours',
    ],
    exclusions: [
      'Minor infestations',
      'Negligence in pest management',
      'Non-recommended pesticides',
    ],
    price: '$25/acre/season',
    faq: [
      { question: 'What insects are covered?', answer: 'The plan covers major pests listed in the policy document.' },
      { question: 'How fast are claims processed?', answer: 'Claims are processed within 5-7 working days after outbreak verification.' },
    ],
  },
};

export default function InsuranceDetailPage({ params }) {
  const { id } = params;
  const insurance = dummyInsurancesData[id];

  if (!insurance) {
    return (
      <div className="min-h-screen bg-[#111827] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Insurance Plan Not Found</h1>
        <p className="text-gray-400 mb-8">The requested insurance plan could not be found.</p>
        <Link href="/insurances" className="font-medium text-green-400 hover:text-green-300">
          &larr; Back to All Insurances
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111827] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-[#1f2937] rounded-lg shadow-xl p-8 md:p-10">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">{insurance.name}</h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed text-center">{insurance.description}</p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-400 mb-4 flex items-center">
            <FaCheckCircle className="mr-2 text-2xl" /> Key Features
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
            {insurance.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center">
            <FaInfoCircle className="mr-2 text-2xl" /> Eligibility
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
            {insurance.eligibility.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4 flex items-center">
            <FaExclamationTriangle className="mr-2 text-2xl" /> Exclusions
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
            {insurance.exclusions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {insurance.faq && insurance.faq.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-100 mb-4 flex items-center">
              <FaInfoCircle className="mr-2 text-2xl" /> FAQs
            </h2>
            <div className="space-y-4">
              {insurance.faq.map((item, index) => (
                <details key={index} className="bg-[#111827] p-4 rounded-lg shadow-sm cursor-pointer">
                  <summary className="font-semibold text-gray-100 flex items-center">
                    {item.question}
                  </summary>
                  <p className="mt-2 text-gray-300 pl-4">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-10">
          <p className="text-4xl font-bold text-green-400 mb-6">Price: {insurance.price}</p>
          <button className="btn-green w-full sm:w-auto text-base md:text-lg">
            Apply Now (Dummy Action)
          </button>
        </div>

        <div className="mt-12 text-center">
          <Link href="/insurances" className="font-medium text-green-400 hover:text-green-300">
            &larr; Back to All Insurances
          </Link>
        </div>
      </div>
    </div>
  );
}