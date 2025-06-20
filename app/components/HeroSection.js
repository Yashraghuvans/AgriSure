// app/components/HeroSection.js
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const scrollToNextSection = () => {
    const el = document.getElementById('problem-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero-section"
      className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden bg-[#111827]"
    >
      <Image
        src="/hero-bg.jpg"
        alt="Climate-resilient crops"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="z-0"
        priority
      />
      <div className="absolute inset-0 bg-[#111827] bg-opacity-90 z-10"></div>
      <div className="z-20 p-4 md:p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-white">
          Veridian Analytics: Building Farmer Trust with Smart Insurance
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-400">
          Climate-Resilient Crop Protection using AI &amp; Data
        </p>
        <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto text-gray-300">
          Veridian Analytics's mission is to empower farmers with reliable, data-driven crop insurance solutions, ensuring their livelihoods are protected against the unpredictable impacts of climate change.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={scrollToNextSection}
            className="btn-green"
            type="button"
          >
            Learn More
          </button>
          <Link href="/login" passHref>
            <button className="btn-blue" type="button">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}