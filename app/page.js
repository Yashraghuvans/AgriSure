'use client';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorksSection from './components/HowItWorksSection';
import AIInActionSection from './components/AIInActionSection';
import BenefitsSection from './components/BenefitsSection';
import MonetizationSection from './components/MonetizationSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <HeroSection />
      <main>
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />      
        <AIInActionSection />
        <BenefitsSection />
        <MonetizationSection />
      </main>
      <Footer />
    </div>
  );
}