// app/components/Footer.js
import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1f2937] text-gray-300 py-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg mb-4 italic">
          “Let’s build resilience for the hands that feed us.”
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          <Link href="https://github.com/your-username/agrisure" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-300">
            <FaGithub className="h-7 w-7 inline-block mr-1" /> GitHub
          </Link>
          <Link href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
            <FaLinkedin className="h-7 w-7 inline-block mr-1" /> LinkedIn
          </Link>
          <Link href="mailto:info@agrisure.com" className="hover:text-blue-400 transition-colors duration-300">
            <FaEnvelope className="h-7 w-7 inline-block mr-1" /> Email
          </Link>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AgriSure. All rights reserved.
        </p>
      </div>
    </footer>
  );
}