import React from 'react';
import LegalLayout from '../LegalLayout';

const ContactPage: React.FC = () => {
    const subject = encodeURIComponent('3 Shot Treasure — Support Request');
    const mailtoHref = `mailto:contact@3shottreasure.live?subject=${subject}`;
    const businessSubject = encodeURIComponent('Business Inquiry');
    const businessHref = `mailto:contact@3shottreasure.live?subject=${businessSubject}`;

    return (
        <LegalLayout title="Contact Us">
            <section className="text-center">
                <p className="text-lg text-[#cbd5e1] mb-10 max-w-xl mx-auto">
                    Have questions? We're here to help. If you have any questions, feedback, or need assistance regarding our website or offers, please reach out to our support team.
                </p>

                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">

                    {/* Support Card */}
                    <div className="bg-[#1e293b]/30 p-8 rounded-xl border border-[#f57f17]/20 hover:border-[#f57f17]/50 transition-colors group">
                        <h2 className="text-xl font-bold text-[#fff9c4] mb-2 font-display">Email Support</h2>
                        <p className="text-xs text-[#94a3b8] uppercase tracking-wider mb-6">Player Inquiries</p>

                        <a
                            href={mailtoHref}
                            className="inline-block px-6 py-3 bg-gradient-to-b from-[#f57f17] to-[#e65100] text-white font-bold rounded-lg shadow-lg hover:shadow-[#f57f17]/20 transform hover:-translate-y-1 transition-all duration-200"
                        >
                            Email Support
                        </a>
                        <p className="mt-4 text-xs text-[#64748b]">
                            We aim to respond to all inquiries within 1–2 business days.
                        </p>
                        <div className="mt-4 pt-4 border-t border-[#1e293b]">
                            <code className="text-[#f57f17] text-sm">contact@3shottreasure.live</code>
                        </div>
                    </div>

                    {/* Business Card */}
                    <div className="bg-[#1e293b]/30 p-8 rounded-xl border border-[#334155] hover:border-[#94a3b8] transition-colors group">
                        <h2 className="text-xl font-bold text-[#e2e8f0] mb-2 font-display">Business</h2>
                        <p className="text-xs text-[#94a3b8] uppercase tracking-wider mb-6">Partnership Opportunities</p>

                        <a
                            href={businessHref}
                            className="inline-block px-6 py-3 bg-[#334155] hover:bg-[#475569] text-white font-medium rounded-lg border border-[#475569] hover:border-[#64748b] transition-all duration-200"
                        >
                            Contact Business
                        </a>
                        <p className="mt-4 text-xs text-[#64748b]">
                            For media inquiries and partnerships.
                        </p>
                        <div className="mt-4 pt-4 border-t border-[#1e293b]">
                            <code className="text-[#94a3b8] text-sm group-hover:text-[#cbd5e1] transition-colors">contact@3shottreasure.live</code>
                        </div>
                    </div>

                </div>

            </section>
        </LegalLayout>
    );
};

export default ContactPage;
