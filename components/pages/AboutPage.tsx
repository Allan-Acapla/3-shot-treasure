import React from 'react';
import LegalLayout from '../LegalLayout';

const AboutPage: React.FC = () => {
    return (
        <LegalLayout title="About Us">
            <section className="text-center md:text-left">
                <p className="text-xl text-[#f57f17] font-medium mb-8 italic text-center">
                    "Your trusted guide to the best online gaming offers."
                </p>

                <p className="mb-8">
                    Welcome to <strong>3 Shot Treasure</strong>. We are a dedicated team of gaming enthusiasts and industry experts committed to bringing you the most value from the online gaming world.
                </p>

                <div className="bg-[#1e293b]/50 p-6 rounded-xl border border-[#334155] mb-8">
                    <h2 className="text-xl font-bold text-[#fff9c4] mb-3 font-display">Our Mission</h2>
                    <p className="text-[#cbd5e1]">
                        The online gaming landscape can be overwhelming with hundreds of operators and confusing bonus terms. Our mission is simple: to help you cut through the noise. We research, verify, and curate the best welcome offers, promotions, and bonuses from fully legal and regulated operators.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h2 className="text-lg font-bold text-[#fbc02d] mb-3 uppercase tracking-wide">What We Do</h2>
                        <p className="text-[#94a3b8] leading-relaxed">
                            We function as an independent comparison site. We test the platforms, read the fine print, and present you with clear, honest information so you can make an informed choice. Whether you are looking for a risk-free starting bonus or a deposit match, we highlight the best opportunities available in your state.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-[#fbc02d] mb-3 uppercase tracking-wide">Transparency</h2>
                        <p className="text-[#94a3b8] leading-relaxed">
                            Transparency is core to our values. We may receive compensation from the gaming operators we feature when users sign up through our links. However, our recommendations are driven by the quality and value of the offer to you, the player.
                        </p>
                    </div>
                </div>

                <p className="text-center pt-8 border-t border-[#1e293b] text-[#f57f17]">
                    Thank you for trusting us as your starting point. Remember to always play responsibly.
                </p>
            </section>
        </LegalLayout>
    );
};

export default AboutPage;
