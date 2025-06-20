import Link from 'next/link';
import { FaShieldAlt, FaSeedling, FaWater, FaCloud, FaChartBar, FaFire, FaSnowflake, FaBug, FaLeaf } from 'react-icons/fa';

const dummyInsurances = [
	{
		id: 'plan-1',
		name: 'Drought Resilience Plan',
		description:
			'Covers crop losses due to insufficient rainfall for extended periods.',
		price: '$50/acre',
		icon: FaWater,
	},
	{
		id: 'plan-2',
		name: 'Flood Protection Plan',
		description:
			'Protects against crop damage from excessive rainfall and flooding.',
		price: '$45/acre',
		icon: FaSeedling,
	},
	{
		id: 'plan-3',
		name: 'Pest & Disease Safeguard',
		description:
			'Comprehensive cover for yield loss caused by major pest infestations or disease outbreaks.',
		price: '$35/acre',
		icon: FaShieldAlt,
	},
	{
		id: 'plan-4',
		name: 'Hailstorm Guard',
		description:
			'Specific protection against physical damage to crops from hailstorms.',
		price: '$20/acre',
		icon: FaCloud,
	},
	{
		id: 'plan-5',
		name: 'Heatwave Protection',
		description:
			'Covers losses due to extreme heat events affecting crop yield and quality.',
		price: '$30/acre',
		icon: FaFire,
	},
	{
		id: 'plan-6',
		name: 'Cold Snap Shield',
		description:
			'Protects crops from unexpected frost and cold snaps during the growing season.',
		price: '$28/acre',
		icon: FaSnowflake,
	},
	{
		id: 'plan-7',
		name: 'Multi-Peril Crop Insurance',
		description:
			'Comprehensive plan covering drought, flood, pests, and diseases in one package.',
		price: '$60/acre',
		icon: FaShieldAlt,
	},
	{
		id: 'plan-8',
		name: 'Livestock Loss Cover',
		description:
			'Insurance for livestock loss due to disease, weather, or accidents.',
		price: '$40/animal',
		icon: FaLeaf,
	},
	{
		id: 'plan-9',
		name: 'Market Price Guarantee',
		description:
			'Protects farmers against sudden drops in market prices for their crops.',
		price: '$15/acre',
		icon: FaChartBar,
	},
	{
		id: 'plan-10',
		name: 'Insect Outbreak Cover',
		description:
			'Covers losses from severe insect outbreaks not controlled by standard measures.',
		price: '$25/acre',
		icon: FaBug,
	},
];

export default function InsurancesPage() {
	return (
		<div className="min-h-screen bg-[#111827] py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-4xl font-bold text-center text-white mb-12">
					Veridian Analytics Insurance Plans
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{dummyInsurances.map((plan) => (
						<div
							key={plan.id}
							className="bg-[#1f2937] rounded-lg shadow-xl p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300"
						>
							{plan.icon && (
								<plan.icon className="h-16 w-16 text-green-400 mb-6" />
							)}
							<h2 className="text-2xl font-semibold text-white mb-3">
								{plan.name}
							</h2>
							<p className="text-gray-300 mb-4 flex-grow">
								{plan.description}
							</p>
							<p className="text-3xl font-bold text-green-400 mb-6">
								{plan.price}
							</p>
							<Link href={`/insurances/${plan.id}`} passHref>
								<button className="btn-green w-full sm:w-auto text-base md:text-lg">
									View Details
								</button>
							</Link>
						</div>
					))}
				</div>

				<div className="mt-12 text-center">
					<Link
						href="/"
						className="font-medium text-green-400 hover:text-green-300"
					>
						&rarr; Back to Home Page
					</Link>
				</div>
			</div>
		</div>
	);
}