import React from 'react';

// Individual blue capsule button for "3 SHOT" letters
const CapsuleButton: React.FC<{ char: string }> = ({ char }) => (
    <div className="relative flex items-center justify-center" style={{ width: 'clamp(38px, 8vw, 64px)', height: 'clamp(38px, 8vw, 64px)' }}>
        {/* Outer gold ring */}
        <div className="absolute inset-0 rounded-full"
            style={{ background: 'linear-gradient(145deg, #f5d060, #b8860b, #f5d060, #7a5500)' }}
        />
        {/* Inner blue sphere */}
        <div className="absolute rounded-full"
            style={{
                inset: '3px',
                background: 'radial-gradient(circle at 35% 30%, #6ab0ff, #1a5fc8 50%, #0a2a7a)',
                boxShadow: 'inset 0 2px 6px rgba(255,255,255,0.4), inset 0 -3px 6px rgba(0,0,0,0.5)',
            }}
        />
        {/* Specular highlight */}
        <div className="absolute rounded-full pointer-events-none"
            style={{
                inset: '5px',
                background: 'radial-gradient(circle at 35% 25%, rgba(255,255,255,0.55) 0%, transparent 55%)',
            }}
        />
        {/* Character */}
        <span className="relative z-10 font-black text-white select-none"
            style={{
                fontSize: 'clamp(14px, 3.5vw, 26px)',
                textShadow: '0 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(100,180,255,0.5)',
                letterSpacing: '-0.02em',
            }}
        >
            {char}
        </span>
    </div>
);

const HeaderLogo: React.FC = () => {
    return (
        <div className="relative flex flex-col items-center justify-center z-50 pointer-events-none w-full pb-2 md:pb-4">

            {/* Warm glow behind entire logo */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at 50% 60%, rgba(253,200,50,0.18) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                }}
            />

            <div className="relative z-10 flex flex-col items-center" style={{ gap: 'clamp(-6px, -1vw, -10px)' }}>

                {/* ── ROW 1: "3 SHOT" capsules on a gold bar ── */}
                <div className="relative flex items-center justify-center">
                    {/* Gold connecting bar behind capsules */}
                    <div className="absolute left-0 right-0 rounded-full"
                        style={{
                            height: 'clamp(14px, 3vw, 22px)',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'linear-gradient(to bottom, #f5d060, #b8860b 40%, #7a5500 70%, #c8a020)',
                            boxShadow: '0 3px 8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3)',
                        }}
                    />
                    {/* Capsule buttons */}
                    <div className="relative flex items-center" style={{ gap: 'clamp(4px, 1vw, 8px)', padding: '0 clamp(4px, 1vw, 8px)' }}>
                        {['3', 'S', 'H', 'O', 'T'].map((char, i) => (
                            <CapsuleButton key={i} char={char} />
                        ))}
                    </div>
                </div>

                {/* ── ROW 2: "Treasure" gold cursive text ── */}
                <div className="relative" style={{ marginTop: 'clamp(-8px, -1.5vw, -14px)' }}>
                    {/* 3D brown shadow layer (bottom-right offset) */}
                    <h1
                        aria-hidden="true"
                        className="absolute select-none font-vegas leading-none"
                        style={{
                            fontSize: 'clamp(3rem, 12vw, 7.5rem)',
                            color: '#3d1a00',
                            top: 'clamp(3px, 0.6vw, 6px)',
                            left: 'clamp(2px, 0.4vw, 4px)',
                            filter: 'blur(0.5px)',
                            transform: 'scale(1.01)',
                        }}
                    >
                        Treasure
                    </h1>

                    {/* Main gold gradient text */}
                    <h1
                        className="relative select-none font-vegas leading-none text-transparent bg-clip-text"
                        style={{
                            fontSize: 'clamp(3rem, 12vw, 7.5rem)',
                            backgroundImage: 'linear-gradient(to bottom, #fffde0 0%, #ffd700 30%, #e8a000 60%, #b06000 100%)',
                            WebkitBackgroundClip: 'text',
                            filter: 'drop-shadow(0 4px 3px rgba(0,0,0,0.4))',
                        }}
                    >
                        Treasure
                    </h1>

                    {/* Gloss overlay (top half shine) */}
                    <h1
                        aria-hidden="true"
                        className="absolute inset-0 select-none font-vegas leading-none text-transparent bg-clip-text pointer-events-none mix-blend-overlay"
                        style={{
                            fontSize: 'clamp(3rem, 12vw, 7.5rem)',
                            backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.2) 40%, transparent 55%)',
                            WebkitBackgroundClip: 'text',
                        }}
                    >
                        Treasure
                    </h1>
                </div>

            </div>
        </div>
    );
};

export default HeaderLogo;