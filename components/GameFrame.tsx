import React from 'react';
import ChestGrid from './ChestGrid';
import { ChestStatus } from '../types';

interface GameFrameProps {
  chests: ChestStatus[];
  onChestClick: (index: number) => void;
  gameActive: boolean;
}

const GameFrame: React.FC<GameFrameProps> = ({ chests, onChestClick, gameActive }) => {
  return (
    <div className="relative w-full aspect-square isolate">
      {/* Pedestal Shadow (Grounding) */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-black/60 blur-xl rounded-[100%] pointer-events-none" />

      {/* 
        ========================================
        PHYSICAL FRAME CONSTRUCTION
        ========================================
      */}

      {/* 1. Heavy Drop Shadow + Glow */}
      <div className="absolute -inset-[15px] rounded-[50px] blur-3xl opacity-60 z-[-1] bg-[#1e40af]" />
      <div className="absolute -inset-4 bg-black rounded-[50px] blur-xl opacity-80 z-[-1]" />

      {/* 2. Outer Structural Casing */}
      <div className="w-full h-full rounded-[44px] bg-[#020617] p-[2px] relative z-0 shadow-2xl ring-1 ring-white/10">

        {/* 3. Main Metallic Bezel */}
        <div
          className="w-full h-full rounded-[42px] p-[5px] relative overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
          style={{
            // Chrome gradient
            background: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 20%, #94a3b8 45%, #475569 50%, #0f172a 51%, #334155 85%, #64748b 100%)',
            boxShadow: `
                    inset 0 1px 0 rgba(255,255,255,0.9),
                    inset 0 -1px 0 rgba(0,0,0,0.6)
                `
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none mix-blend-overlay opacity-60" />

          {/* 4. Glitter/Gold Border Layer (Replaces Bulbs) */}
          {/* This creates the thin decorative border between silver bezel and dark inner panel */}
          <div
            className="w-full h-full rounded-[37px] p-[5px] relative shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]"
            style={{
              // Deep Gold/Bronze Base
              background: 'linear-gradient(135deg, #d97706 0%, #b45309 25%, #fcd34d 50%, #b45309 75%, #78350f 100%)',
            }}
          >
            {/* Texture: Static Noise for Glitter Effect */}
            <div
              className="absolute inset-0 opacity-40 mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
                backgroundSize: '100px 100px'
              }}
            />

            {/* Highlight: Sparkle Grains */}
            <div
              className="absolute inset-0 opacity-30 mix-blend-color-dodge"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}
            />

            {/* Inner Shadow for Inset Depth */}
            <div className="absolute inset-0 shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] rounded-[37px] pointer-events-none" />

            {/* 5. Inner Content Panel */}
            <div className="w-full h-full rounded-[32px] overflow-hidden shadow-[0_0_20px_rgba(0,0,0,1)] border border-[#334155] bg-[#170e2e] relative">

              {/* Inner Rim Highlight */}
              <div className="absolute inset-0 border border-white/10 rounded-[31px] pointer-events-none z-40" />

              {/* Background Pattern: Subtle Diamond/Quilted Look */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2e1065_0%,#1e1b4b_50%,#020617_100%)]">
                {/* Quilted Pattern */}
                <div
                  className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
                  style={{
                    backgroundImage: `linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff), linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff)`,
                    backgroundPosition: '0 0, 15px 15px',
                    backgroundSize: '30px 30px'
                  }}
                />

                {/* Deep Vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.9)]" />
              </div>

              {/* Content Grid */}
              <div className="relative z-30 w-full h-full flex items-center justify-center">
                {/* Optical Center Adjustment */}
                <div className="transform translate-y-2">
                  <ChestGrid
                    chests={chests}
                    onChestClick={onChestClick}
                    disabled={!gameActive}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specular Highlight */}
      <div className="absolute top-[8px] left-[40px] right-[40px] h-[1px] bg-white opacity-90 blur-[0.5px] z-40 pointer-events-none mix-blend-overlay" />
    </div>
  );
};

export default GameFrame;