import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onAction: () => void;
  title: string;
  headline?: string;
  body: string;
  buttonText: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onAction, title, headline, body, buttonText }) => {
  if (!isOpen) return null;

  // Verify action type for button color logic
  const isClaim = buttonText === "CLAIM";
  const isTryAgain = buttonText === "TRY AGAIN" || buttonText === "START NOW";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Dimmed Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-[6px] animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg transform transition-all animate-scale-in">

        {/* 1. Outer Metallic Bezel */}
        <div className="relative p-[8px] rounded-[32px] shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] bg-gradient-to-b from-slate-300 via-slate-100 to-slate-400">

          {/* 2. Inner Gold/Bronze Decoration */}
          <div className="rounded-[24px] p-1.5 bg-gradient-to-tr from-yellow-700 via-yellow-400 to-yellow-600 shadow-inner">

            {/* 3. Main Dark Panel */}
            <div className="relative rounded-[20px] bg-[#1e1b4b] overflow-hidden border border-white/10">

              {/* Background Glows */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#4f46e5_0%,#1e1b4b_60%,#020617_100%)]" />
              <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none" />

              {/* Noise Texture */}
              <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-noise" />

              {/* Content */}
              <div className="relative z-10 p-8 md:p-10 flex flex-col items-center text-center">

                {/* Title */}
                <h2 className="font-russo text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white via-yellow-100 to-yellow-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-6 leading-tight tracking-wide border-b-2 border-white/10 pb-4 w-full">
                  {title}
                </h2>

                {/* Optional Headline (Jackpot) */}
                {headline && (
                  <div className="mb-4 animate-pulse-slow w-full">
                    <h3 className="font-russo text-2xl sm:text-3xl text-[#fbbf24] drop-shadow-[0_2px_0_rgba(0,0,0,1)] tracking-normal uppercase bg-black/20 p-2 rounded-lg border border-yellow-500/30">
                      {headline}
                    </h3>
                  </div>
                )}

                {/* Body Text */}
                <div className="text-blue-50 text-base sm:text-lg font-medium leading-relaxed mb-8 drop-shadow-md opacity-90 max-w-sm">
                  {body}
                </div>

                {/* Action Button - The "Juice" */}
                <button
                  onClick={onAction}
                  className={`group relative overflow-hidden px-10 py-4 w-full sm:w-auto min-w-[240px] rounded-xl font-russo text-2xl tracking-wider text-white shadow-[0_6px_0_rgba(0,0,0,0.3),0_15px_20px_rgba(0,0,0,0.4)] transition-all active:shadow-none active:translate-y-[6px] hover:brightness-110 active:scale-[0.98]
                        ${isClaim ? 'bg-gradient-to-b from-green-400 to-green-700 shadow-[0_6px_0_#14532d]' : ''}
                        ${isTryAgain ? 'bg-gradient-to-b from-amber-400 to-yellow-600 shadow-[0_6px_0_#78350f]' : ''}
                    `}
                >
                  {/* Sweeping Shine */}
                  <div className="absolute inset-0 -translate-x-[100%] group-hover:animate-shine-sweep bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-15deg]" />

                  {/* Top Gloss */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/60" />

                  <span className="relative drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] uppercase">
                    {buttonText}
                  </span>
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;