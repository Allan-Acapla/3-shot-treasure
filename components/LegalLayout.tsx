import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

interface LegalLayoutProps {
    title: string;
    lastUpdated?: string;
    children: React.ReactNode;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ title, lastUpdated, children }) => {
    return (
        <div className="min-h-screen bg-[#020617] text-[#94a3b8] font-sans flex flex-col relative overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#f57f17] opacity-[0.03] blur-[100px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#1e3a8a] opacity-[0.05] blur-[100px] rounded-full" />
            </div>

            {/* Navbar / Header Area */}
            <nav className="relative z-10 px-6 py-6 max-w-4xl mx-auto w-full flex items-center justify-between">
                <Link
                    to="/"
                    className="group flex items-center gap-2 text-[#f57f17] hover:text-[#fdd835] transition-all duration-300"
                >
                    <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
                    <span className="font-medium tracking-wide text-sm uppercase">Back to Treasure</span>
                </Link>
            </nav>

            <main className="flex-1 max-w-3xl mx-auto w-full px-6 pb-20 relative z-10">

                {/* Page Header */}
                <header className="mb-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-b from-[#fff9c4] via-[#fbc02d] to-[#f57f17] drop-shadow-sm mb-4">
                        {title}
                    </h1>
                    {lastUpdated && (
                        <div className="inline-block px-4 py-1 rounded-full border border-[#f57f17]/20 bg-[#f57f17]/5 text-[#f57f17] text-xs font-medium tracking-wide uppercase">
                            Last Updated: {lastUpdated}
                        </div>
                    )}
                </header>

                {/* Content Card */}
                <div className="bg-[#0f172a]/80 backdrop-blur-sm border border-[#1e293b] rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
                    {/* Card Shine Effect */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#f57f17]/50 to-transparent opacity-50" />

                    <div className="space-y-8 leading-relaxed text-sm md:text-base text-[#cbd5e1] font-light">
                        {children}
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default LegalLayout;
