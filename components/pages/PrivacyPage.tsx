import React from 'react';
import LegalLayout from '../LegalLayout';

const PrivacyPage: React.FC = () => {
    return (
        <LegalLayout title="Privacy Policy" lastUpdated="February 2026">
            <section>
                <p className="mb-6">
                    At <strong>3 Shot Treasure</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website.
                </p>

                <h2 className="text-xl font-bold text-[#fbc02d] mb-4 mt-8 flex items-center gap-2">
                    <span className="text-[#f57f17]/50">01.</span> Information We Collect
                </h2>
                <p className="mb-4">
                    We do not collect personal information like your name, email address, or phone number directly on this page unless you voluntarily provide it (for example, by contacting us).
                </p>
                <p>
                    We use cookies, pixels, and similar tracking technologies to measure the performance of our marketing campaigns and attribute successful referrals to our partners. These technologies collect anonymous usage data such as your IP address, browser type, and device information.
                </p>

                <h2 className="text-xl font-bold text-[#fbc02d] mb-4 mt-8 flex items-center gap-2">
                    <span className="text-[#f57f17]/50">02.</span> How We Use Your Information
                </h2>
                <p className="mb-2">The information collected is used primarily for:</p>
                <ul className="list-disc pl-5 space-y-2 text-[#94a3b8]">
                    <li>Analyzing website traffic and user behavior to improve our content.</li>
                    <li>Tracking the effectiveness of our promotional offers.</li>
                    <li>Ensuring proper attribution for affiliate referrals to third-party operators.</li>
                </ul>

                <h2 className="text-xl font-bold text-[#fbc02d] mb-4 mt-8 flex items-center gap-2">
                    <span className="text-[#f57f17]/50">03.</span> Third-Party Links
                </h2>
                <p>
                    Our website contains links to third-party websites (e.g., online casinos and sportsbooks). Once you click on these links and leave our site, we do not have control over those other websites. Therefore, we cannot be responsible for the protection and privacy of any information which you provide while visiting such sites.
                </p>

                <h2 className="text-xl font-bold text-[#fbc02d] mb-4 mt-8 flex items-center gap-2">
                    <span className="text-[#f57f17]/50">04.</span> Data Security
                </h2>
                <p>
                    We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure.
                </p>

                <h2 className="text-xl font-bold text-[#fbc02d] mb-4 mt-8 flex items-center gap-2">
                    <span className="text-[#f57f17]/50">05.</span> Contact Us
                </h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at{' '}
                    <a href="mailto:contact@3shottreasure.live" className="text-[#f57f17] hover:text-[#fdd835] transition-colors font-medium border-b border-[#f57f17]/30 hover:border-[#f57f17]">
                        contact@3shottreasure.live
                    </a>.
                </p>
            </section>
        </LegalLayout>
    );
};

export default PrivacyPage;
