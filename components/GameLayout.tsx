import React, { useState } from 'react';
import GameFrame from './GameFrame';
import Footer from './Footer';
import HeaderLogo from './HeaderLogo';
import Modal from './Modal';
import { ChestStatus } from '../types';

interface ModalConfig {
  title: string;
  headline?: string;
  body: string;
  buttonText: string;
}

const GameLayout: React.FC = () => {
  // Game State
  const [gameStarted, setGameStarted] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [chests, setChests] = useState<ChestStatus[]>(Array(9).fill('closed'));

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalConfig, setModalConfig] = useState<ModalConfig>({
    title: "You’re a Winner!",
    body: "You have been selected to participate in a lottery with valuable prizes from 3 Shot Treasure! You have 3 chances to open the chests and win some amazing prizes. Lady Luck likes the number 3, doesn't she?",
    buttonText: "START NOW"
  });

  const handleModalAction = () => {
    // If it's the final claim step, redirect
    if (attempt === 3) {
      window.location.href = 'https://caesarspalaceonline.com/?AR=a-26549b-2662c-&bc=HNLAUNCH&utm_offer=HNLAUNCH&siteid=26549&af_c_id=HNLAUNCH';
      return;
    }

    // Otherwise, close modal and resume game
    setIsModalOpen(false);
    if (!gameStarted) {
      setGameStarted(true);
    }
  };

  const handleChestClick = (index: number) => {
    if (!gameStarted || attempt >= 3 || chests[index] !== 'closed') return;

    const newChests = [...chests];
    let nextModalConfig: ModalConfig | null = null;
    let nextAttempt = attempt + 1;

    // 1. Logic for First Click (Attempt 0 -> 1)
    if (attempt === 0) {
      newChests[index] = 'opened_empty';
      nextModalConfig = {
        title: "Try Again!",
        body: "You only have 2 more chances left. Good luck!",
        buttonText: "TRY AGAIN"
      };
    }
    // 2. Logic for Second Click (Attempt 1 -> 2)
    else if (attempt === 1) {
      newChests[index] = 'opened_gold';
      nextModalConfig = {
        title: "Congratulations!",
        body: "You got a Up to 100% welcome bonus! More chances left: 1",
        buttonText: "TRY AGAIN"
      };
    }
    // 3. Logic for Third Click (Attempt 2 -> 3)
    else if (attempt === 2) {
      newChests[index] = 'opened_jackpot';
      nextModalConfig = {
        title: "Congratulations!",
        headline: "REWARD UNLOCKED!",
        body: "You've won 2,500 Reward Credits + $10 Sign-Up + 100% Deposit Match up to $1,000!",
        buttonText: "CLAIM"
      };
    }

    setChests(newChests);
    setAttempt(nextAttempt);

    // Short delay before showing modal to allow chest animation to start
    if (nextModalConfig) {
      setTimeout(() => {
        setModalConfig(nextModalConfig!);
        setIsModalOpen(true);
      }, 500);
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex flex-col font-sans bg-[#020617]">

      {/* 
        ===========================================
        BACKGROUND & ATMOSPHERE
        ===========================================
      */}
      {/* 1. Base Gradient (Deep Night Sky) */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#020617] z-0" />

      {/* 2. Micro-noise for texture */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
        }}
      />

      {/* 3. Glitter dots */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[length:30px_30px] mix-blend-screen" />

      {/* 4. Ambient Light (Top Center) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[60vh] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent_70%)] z-0 pointer-events-none" />

      {/* Layer 4: Floating Atmosphere (Coins, Confetti, Sparkles) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

        {/* === Background Layer (Small, Blurred, Far Away) === */}
        <FloatingCoin id="c1" x="5%" y="8%" size="w-16" delay="0s" rotate={-15} blur level="high" />
        <FloatingCoin id="c2" x="92%" y="12%" size="w-20" delay="2.5s" rotate={30} blur level="high" />
        <FloatingCoin id="c3" x="45%" y="5%" size="w-12" delay="1s" rotate={90} blur level="high" />
        <FloatingCoin id="c4" x="15%" y="90%" size="w-16" delay="4s" rotate={-45} blur level="high" />
        <FloatingCoin id="c5" x="75%" y="95%" size="w-14" delay="3s" rotate={60} blur level="high" />

        <Confetti x="20%" y="10%" delay="1s" rotate={15} blur level="high" />
        <Confetti x="80%" y="5%" delay="3s" rotate={-20} blur level="high" />
        <Confetti x="50%" y="90%" delay="5s" rotate={45} blur level="high" />

        <Sparkle x="10%" y="20%" delay="2s" scale={0.5} />
        <Sparkle x="90%" y="80%" delay="4s" scale={0.5} />

        {/* === Mid-Ground Layer (Medium, Semi-Sharp) === */}
        <FloatingCoin id="c6" x="82%" y="30%" size="w-14" delay="1.5s" rotate={10} blur level="low" />
        <FloatingCoin id="c7" x="12%" y="35%" size="w-16" delay="4s" rotate={-20} blur level="low" />
        <FloatingCoin id="c8" x="88%" y="70%" size="w-12" delay="0.5s" rotate={45} blur level="low" />
        <FloatingCoin id="c9" x="65%" y="15%" size="w-10" delay="3.5s" rotate={15} blur level="low" />

        <Confetti x="5%" y="50%" delay="0.5s" rotate={80} blur level="low" />
        <Confetti x="95%" y="40%" delay="2.5s" rotate={-40} blur level="low" />
        <Confetti x="30%" y="85%" delay="4s" rotate={10} blur level="low" />

        <Sparkle x="25%" y="25%" delay="0s" scale={0.8} />
        <Sparkle x="75%" y="15%" delay="2s" scale={0.8} />
        <Sparkle x="85%" y="65%" delay="4s" scale={0.8} />
        <Sparkle x="15%" y="55%" delay="1.5s" scale={0.8} />

        {/* === Foreground Layer (Large, Sharp, Detailed) === */}
        {/* Left Side Cluster */}
        <FloatingCoin id="c10" x="-6%" y="60%" size="w-32" delay="1s" rotate={-30} />
        <FloatingCoin id="c11" x="8%" y="75%" size="w-24" delay="2s" rotate={15} />

        {/* Right Side Cluster */}
        <FloatingCoin id="c12" x="94%" y="20%" size="w-36" delay="3.5s" rotate={25} />
        <FloatingCoin id="c13" x="85%" y="50%" size="w-28" delay="1.2s" rotate={-10} />

        {/* Random Floating Extras */}
        <FloatingCoin id="c14" x="25%" y="12%" size="w-16" delay="5s" rotate={180} blur level="low" />
        <FloatingCoin id="c15" x="60%" y="85%" size="w-20" delay="2.2s" rotate={-90} blur level="low" />

        <Confetti x="15%" y="25%" delay="1.2s" rotate={-15} />
        <Confetti x="85%" y="80%" delay="3.2s" rotate={30} />
        <Confetti x="40%" y="15%" delay="5.5s" rotate={60} />

        {/* Large Sparkles */}
        <Sparkle x="55%" y="85%" delay="3.5s" scale={1.2} />
        <Sparkle x="5%" y="45%" delay="1s" scale={1.2} />
        <Sparkle x="92%" y="30%" delay="4.5s" scale={1.0} />

        {/* Subtle Light Streaks (Very Faint) */}
        <div className="absolute top-0 right-1/3 w-1 h-[70vh] bg-gradient-to-b from-transparent via-white/5 to-transparent transform rotate-[20deg] blur-xl opacity-20" />
      </div>

      {/* 
        ========================================
        MAIN CONTENT
        ========================================
      */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center p-4 min-h-[600px] pb-24 lg:pb-32">

        {/* Flex container to handle stacking */}
        {/* Added gap to pull frame closer to logo (gap-1/2) but added margin bottom for footer separation */}
        <div className="flex flex-col items-center gap-1 md:gap-2 w-full max-w-2xl transform transition-all duration-500 mb-8 md:mb-12">

          {/* Title / Logo Area */}
          <div className="w-full flex justify-center z-20">
            <HeaderLogo />
          </div>

          {/* Game Frame Area */}
          {/* Pass game state down */}
          <div className={`relative w-full flex justify-center z-10 transition-all duration-300`}>
            {/* Responsive Width Control for the Frame */}
            <div className="w-[90vw] max-w-[400px] md:max-w-[480px] lg:max-w-[520px]">
              <GameFrame
                chests={chests}
                onChestClick={handleChestClick}
                gameActive={gameStarted && attempt < 3}
              />
            </div>
          </div>

        </div>
      </div>

      <Footer />

      {/* 
        ========================================
        MODAL SYSTEM
        ========================================
      */}
      <Modal
        isOpen={isModalOpen}
        title={modalConfig.title}
        headline={modalConfig.headline}
        body={modalConfig.body}
        buttonText={modalConfig.buttonText}
        onAction={handleModalAction}
      />
    </div>
  );
};

// --- Asset Components ---

const FloatingCoin: React.FC<{ id: string, x: string, y: string, size: string, delay: string, rotate?: number, blur?: boolean, level?: 'low' | 'high' }> = ({ id, x, y, size, delay, rotate = 0, blur, level }) => {
  // Cleaner blur handling
  const blurClass = level === 'high' ? 'blur-[3px] opacity-40' : level === 'low' ? 'blur-[1px] opacity-80' : 'opacity-100 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]';

  return (
    <div
      className={`absolute ${blurClass} animate-float`}
      style={{ left: x, top: y, animationDelay: delay }}
    >
      {/* Rotation Container */}
      <div style={{ transform: `rotate(${rotate}deg)` }}>
        <svg viewBox="0 0 100 115" className={`${size} overflow-visible`}>
          <defs>
            {/* 1. Side/Edge Gradient: Vertical banding for metallic sheen */}
            <linearGradient id={`${id}-side`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#854d0e" />  {/* Dark Edge */}
              <stop offset="25%" stopColor="#ca8a04" /> {/* Highlight */}
              <stop offset="50%" stopColor="#fef08a" /> {/* Bright Reflection */}
              <stop offset="75%" stopColor="#ca8a04" /> {/* Highlight */}
              <stop offset="100%" stopColor="#854d0e" /> {/* Dark Edge */}
            </linearGradient>

            {/* 2. Face Gradient: Smooth Radial Gold */}
            <radialGradient id={`${id}-face`} cx="30%" cy="30%" r="80%">
              <stop offset="0%" stopColor="#fef9c3" /> {/* Lightest */}
              <stop offset="40%" stopColor="#fbbf24" /> {/* Mid Gold */}
              <stop offset="100%" stopColor="#d97706" /> {/* Dark Gold */}
            </radialGradient>

            {/* 3. Rim Metallic Gradient */}
            <linearGradient id={`${id}-rim`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="30%" stopColor="#ca8a04" />
              <stop offset="50%" stopColor="#fef08a" />
              <stop offset="70%" stopColor="#ca8a04" />
              <stop offset="100%" stopColor="#a16207" />
            </linearGradient>

            {/* 4. Inner Shadow (Recess) */}
            <radialGradient id={`${id}-shadow`} cx="50%" cy="50%" r="50%">
              <stop offset="85%" stopColor="transparent" />
              <stop offset="100%" stopColor="#713f12" stopOpacity="0.5" />
            </radialGradient>
          </defs>

          {/* 3D Thickness (Side) - Extrudes down by 10px */}
          <path
            d="M2,50 L2,60 A48,48 0 0,0 98,60 L98,50 A48,48 0 0,1 2,50 Z"
            fill={`url(#${id}-side)`}
          />

          {/* Base for Rim (Background) */}
          <circle cx="50" cy="50" r="48" fill="#ca8a04" />

          {/* The Rim (Wide Stroke) */}
          <circle cx="50" cy="50" r="44" fill="none" stroke={`url(#${id}-rim)`} strokeWidth="8" />

          {/* The Face (Center) */}
          <circle cx="50" cy="50" r="40" fill={`url(#${id}-face)`} />

          {/* Inner Shadow to Simulate Recess */}
          <circle cx="50" cy="50" r="40" fill={`url(#${id}-shadow)`} />

          {/* Sharp Outer Edge Highlight */}
          <path d="M10,20 A45,45 0 0,1 90,20" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.8" strokeLinecap="round" />

          {/* Sharp Inner Rim Highlight */}
          <path d="M20,30 A35,35 0 0,1 80,30" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />

          {/* Specular Highlight on Face */}
          <ellipse cx="35" cy="35" rx="15" ry="8" fill="white" opacity="0.4" transform="rotate(-45 35 35)" filter="blur(2px)" />

        </svg>
      </div>
    </div>
  );
}

const Confetti: React.FC<{ x: string, y: string, delay: string, rotate?: number, blur?: boolean, level?: 'low' | 'high' }> = ({ x, y, delay, rotate = 0, blur, level }) => {
  // Style props for blur depth
  const blurClass = level === 'high' ? 'blur-[2px] opacity-40 w-3 h-6' : level === 'low' ? 'blur-[1px] opacity-70 w-4 h-8' : 'opacity-90 w-5 h-10 drop-shadow-md';

  return (
    <div
      className={`absolute ${blurClass} animate-float`}
      style={{ left: x, top: y, animationDelay: delay }}
    >
      <div
        className="w-full h-full bg-gradient-to-br from-[#fcd34d] via-[#fbbf24] to-[#b45309]"
        style={{
          transform: `rotate(${rotate}deg)`,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
        }}
      />
    </div>
  )
}

const Sparkle: React.FC<{ x: string, y: string, delay: string, scale?: number }> = ({ x, y, delay, scale = 1 }) => (
  <div
    className="absolute w-8 h-8 animate-pulse-slow"
    style={{
      left: x,
      top: y,
      animationDelay: delay,
      transform: `translate(-50%, -50%) scale(${scale})`
    }}
  >
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
      <defs>
        <radialGradient id="sparkleCenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="40%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Center Glow */}
      <circle cx="50" cy="50" r="25" fill="url(#sparkleCenter)" />

      {/* Main Cross Flare - Concave Diamond Shape */}
      <path d="M50 0 C52 35 55 45 95 50 C55 55 52 65 50 100 C48 65 45 55 5 50 C45 45 48 35 50 0 Z" fill="white" />

      {/* Diagonal Flare (Smaller) */}
      <path d="M50 20 C51 40 55 45 80 50 C55 55 51 60 50 80 C49 60 45 55 20 50 C45 45 49 40 50 20 Z" fill="white" opacity="0.5" transform="rotate(45 50 50)" />
    </svg>
  </div>
)

export default GameLayout;