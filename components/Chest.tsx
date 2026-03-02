import React from 'react';
import { ChestProps } from '../types';

const Chest: React.FC<ChestProps> = ({ id, status, onClick, disabled }) => {
  const uid = `chest-${id}`;
  const isOpen = status !== 'closed';

  // State specific flags
  const isEmpty = status === 'opened_empty';
  const hasGold = status === 'opened_gold' || status === 'opened_jackpot';
  const isJackpot = status === 'opened_jackpot';

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`relative group w-full h-full flex items-center justify-center select-none ${disabled ? 'cursor-default' : 'cursor-pointer'}`}
      onClick={handleClick}
    >

      {/* 
        ===========================================
        GLOW EFFECTS (Behind Chest)
        ===========================================
      */}
      {/* Soft Gold/Jackpot Glow */}
      <div
        className={`absolute inset-[-25%] rounded-full bg-orange-500 blur-[30px] transition-all duration-700 ease-out z-0
          ${hasGold ? 'opacity-50 scale-100' : 'opacity-0 scale-75'}
          ${isJackpot ? 'animate-pulse-slow bg-yellow-500 opacity-70' : ''}
        `}
      />

      {/* Inner Light Gradient (Subtle halo directly behind) */}
      <div
        className={`absolute inset-[5%] rounded-full bg-yellow-200 blur-[20px] transition-opacity duration-700 z-0
            ${hasGold ? 'opacity-30' : 'opacity-0'}
        `}
      />

      {/* 
        ===========================================
        MAIN CHEST CONTAINER
        Handles scale animations and brightness
        ===========================================
      */}
      <div className={`relative z-10 w-full aspect-square transition-transform ease-out
          ${!disabled && !isOpen ? 'duration-500 group-hover:scale-[1.03] group-hover:-translate-y-[3px] group-hover:animate-shake group-active:scale-[0.98] group-active:duration-[80ms]' : 'duration-500'}
          ${isOpen ? 'animate-bounce-open' : ''}
          ${isEmpty ? 'brightness-90 grayscale-[0.2]' : ''}
      `}>

        {/* God Rays (Hover Only) */}
        {!isOpen && !disabled && (
          <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.1)_20deg,transparent_40deg)] animate-ray-spin opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-[-1]" />
        )}

        {/* Floor Shadow - Darkens/Expands slightly on 'open' state to ground the pop */}
        <div className={`absolute bottom-[8%] left-[12%] right-[12%] h-[12%] bg-black blur-[10px] rounded-[100%] transition-all duration-500
             ${isOpen ? 'opacity-80 scale-110' : 'opacity-60 scale-100'}
          `} />

        {/* 
            ===========================================
            SVG ART (ALWAYS CLOSED)
            ===========================================
          */}
        <svg
          viewBox="0 0 240 240"
          className={`w-full h-full overflow-visible transition-all duration-500 
                ${hasGold ? 'drop-shadow-[0_25px_30px_rgba(251,191,36,0.3)]' : 'drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]'}
                ${!disabled && !isOpen ? 'group-hover:drop-shadow-[0_25px_25px_rgba(0,0,0,0.7)]' : ''}
            `}
        >
          <defs>
            <linearGradient id={`${uid}-wood-lid`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3E2723" />
              <stop offset="20%" stopColor="#5D4037" />
              <stop offset="50%" stopColor="#8D6E63" />
              <stop offset="80%" stopColor="#5D4037" />
              <stop offset="100%" stopColor="#21110e" />
            </linearGradient>

            <linearGradient id={`${uid}-wood-body`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4E342E" />
              <stop offset="100%" stopColor="#251612" />
            </linearGradient>

            <linearGradient id={`${uid}-gold-v`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#B45309" />
              <stop offset="20%" stopColor="#FCD34D" />
              <stop offset="45%" stopColor="#FFFBEB" />
              <stop offset="60%" stopColor="#F59E0B" />
              <stop offset="90%" stopColor="#78350F" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>

            <linearGradient id={`${uid}-gold-h`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="30%" stopColor="#FBBF24" />
              <stop offset="60%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>

            <pattern id={`${uid}-grain`} width="100%" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,10 Q60,0 120,10 T240,10" fill="none" stroke="#000" strokeOpacity="0.15" strokeWidth="1.5" />
            </pattern>
          </defs>

          {/* --- BODY --- */}
          {/* Back panel (for depth) */}
          <path d="M55,120 L185,120 L185,190 L55,190 Z" fill="#1a0f0a" />

          {/* Front Panel */}
          <path
            d="M45,120 L195,120 L185,190 C185,200 175,205 160,205 L80,205 C65,205 55,200 55,190 L45,120 Z"
            fill={`url(#${uid}-wood-body)`}
            stroke="#1a0f0a" strokeWidth="1"
          />
          <path
            d="M45,120 L195,120 L185,190 C185,200 175,205 160,205 L80,205 C65,205 55,200 55,190 L45,120 Z"
            fill={`url(#${uid}-grain)`}
          />
          {/* Corner Reinforcements */}
          <path d="M45,120 L65,120 L67,190 L55,195 L45,120 Z" fill={`url(#${uid}-gold-v)`} />
          <path d="M195,120 L175,120 L173,190 L185,195 L195,120 Z" fill={`url(#${uid}-gold-v)`} />


          {/* --- LID (Sitting on top) --- */}
          <g>
            {/* Shadow under lid overhang */}
            <path d="M40,122 L200,122 L200,135 L40,135 Z" fill="black" opacity="0.5" filter="blur(4px)" />

            {/* Main Dome */}
            <path
              d="M35,120 C35,45 205,45 205,120 Z"
              fill={`url(#${uid}-wood-lid)`}
              stroke="#2a150b" strokeWidth="1"
            />
            {/* Grain */}
            <g opacity="0.2" fill="none" stroke="#000" strokeWidth="1.5">
              <path d="M45,100 Q120,60 195,100" />
              <path d="M55,80 Q120,45 185,80" />
            </g>

            {/* Bands */}
            <path d="M70,120 C70,55 95,55 95,120 L95,122 L70,122 Z" fill={`url(#${uid}-gold-v)`} />
            <path d="M145,120 C145,55 170,55 170,120 L170,122 L145,122 Z" fill={`url(#${uid}-gold-v)`} />

            {/* Rim */}
            <path
              d="M30,120 L210,120 L210,135 C210,140 205,142 200,142 L40,142 C35,142 30,140 30,135 Z"
              fill={`url(#${uid}-gold-h)`}
              stroke="#78350F" strokeWidth="0.5"
            />
            <path d="M30,122 L210,122" stroke="#FFFBEB" strokeWidth="1.5" opacity="0.9" />

            {/* Lock */}
            <rect x="100" y="115" width="40" height="45" rx="4" fill={`url(#${uid}-gold-v)`} stroke="#78350F" strokeWidth="0.5" />
            <circle cx="120" cy="140" r="12" fill={`url(#${uid}-gold-h)`} stroke="#78350F" strokeWidth="0.5" />
            <path d="M120,136 L120,144 L123,148 L117,148 L120,144" fill="#1a0f0a" />
            <circle cx="120" cy="136" r="3.5" fill="#1a0f0a" />

            {/* Studs/Bolts */}
            <g fill="#FFFBEB" stroke="#B45309" strokeWidth="0.5">
              <circle cx="82.5" cy="70" r="2" />
              <circle cx="82.5" cy="90" r="2" />
              <circle cx="82.5" cy="110" r="2" />
              <circle cx="157.5" cy="70" r="2" />
              <circle cx="157.5" cy="90" r="2" />
              <circle cx="157.5" cy="110" r="2" />
              <circle cx="40" cy="131" r="2" />
              <circle cx="200" cy="131" r="2" />
            </g>

            {/* Specular Highlight */}
            <ellipse cx="120" cy="65" rx="50" ry="12" fill="white" opacity="0.2" filter="blur(8px)" />
            <path d="M102,118 L138,118" stroke="white" strokeWidth="1" opacity="0.7" />
          </g>

        </svg>
      </div>

      {/* 
        ===========================================
        SPARKLES (Jackpot Only) - Z-20 above chest
        ===========================================
      */}
      {isJackpot && (
        <>
          <div className="absolute top-0 right-0 animate-pulse z-20">
            <SparkleIcon size={28} />
          </div>
          <div className="absolute bottom-6 left-0 animate-pulse delay-700 z-20">
            <SparkleIcon size={20} />
          </div>
          <div className="absolute top-[-10%] left-[20%] animate-pulse delay-300 z-20">
            <SparkleIcon size={24} />
          </div>
        </>
      )}
    </div>
  );
};

// Simple Sparkle SVG component for reuse
const SparkleIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="white" className="drop-shadow-[0_0_4px_rgba(255,255,255,1)]" />
  </svg>
);

export default Chest;