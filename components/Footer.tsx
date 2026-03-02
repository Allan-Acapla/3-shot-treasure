import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#020617] border-t border-[#f57f17]/30 py-8 px-6 relative z-50 mt-auto shadow-[0_-5px_20px_rgba(0,0,0,0.9)]">
      {/* Inner Highlight Line (Subtle) */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#fff9c4] opacity-5 pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-3 md:gap-4 font-sans text-[#94a3b8] text-[9px] sm:text-[10px] md:text-[11px] leading-relaxed">

        {/* Line 1: Copyright */}
        <p className="font-bold text-[#cbd5e1]">
          © 2026 3 Shot Treasure. All Rights Reserved.
        </p>

        {/* Line 2: Responsibility Warning */}
        <p className="font-bold text-[#cbd5e1] tracking-wide">
          21+ | Play Responsibly. Gambling Problem? Call 1-800-GAMBLER.
        </p>

        {/* Paragraph 1: Disclaimer */}
        <p className="opacity-80 max-w-3xl mx-auto">
          The prize displayed reward credits represents the standard new player incentive currently offered by qualified registrants. No purchase is necessary to play. The "treasure" result is a gamified presentation of the available welcome offer and does not guarantee a unique or exclusive reward different from the standard public offer.
        </p>

        {/* Paragraph 2: Affiliate Disclosure */}
        <p className="opacity-80 max-w-3xl mx-auto">
          This website is an independent informational portal and is not owned or operated by a casino or iGaming operator. We may receive a commission from the operator if you click links on this page and open a new account. This does not affect the cost of your bets or the value of your bonus.
        </p>

        {/* Line 3: Footer Nav Links */}
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mt-2 opacity-90">
          <Link to="/privacy" className="hover:text-white hover:underline transition-colors decoration-white/40 underline-offset-2">Privacy Policy</Link>
          <span className="text-gray-600">|</span>
          <Link to="/terms" className="hover:text-white hover:underline transition-colors decoration-white/40 underline-offset-2">Terms of Service</Link>
          <span className="text-gray-600">|</span>
          <Link to="/about" className="hover:text-white hover:underline transition-colors decoration-white/40 underline-offset-2">About Us</Link>
          <span className="text-gray-600">|</span>
          <Link to="/contact" className="hover:text-white hover:underline transition-colors decoration-white/40 underline-offset-2">Contact Us</Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;