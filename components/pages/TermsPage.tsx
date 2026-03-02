import React from 'react';
import LegalLayout from '../LegalLayout';

const TermsPage: React.FC = () => {
    return (
        <LegalLayout title="Terms of Service" lastUpdated="February 2026">
            <section>
                <p className="mb-6">
                    Please read these Terms of Service carefully before using our website. By accessing or using any part of the site, you agree to be bound by these Terms.
                </p>

                <h2 className="text-xl font-bold text-[#fbc02d] mb-4 mt-8 flex items-center gap-2">
                    <span className="text-[#f57f17]/50">01.</span> Informational Purpose Only
                </h2>
                <p>
                    <strong>3 Shot Treasure</strong> is an independent informational portal. We are not a gambling operator. The content provided on this website is for informational and entertainment purposes only. We do not offer real money gambling services directly.
                </p>

                <h2 className="text-xl font-bold text-[#fbc02d] mb-4 mt-8 flex items-center gap-2">
                    <span className="text-[#f57f17]/50">02.</span> Eligibility and Location
                </h2>
                <p>
                    You must be at least 21 years of age to use this website. The offers and promotions listed are only valid in jurisdictions where online gambling is legal and regulated. It is your responsibility to ensure you comply with all local laws and regulations regarding online gaming.
                </p>

                <h2 className="text-xl font-bold text-[#fbc02d] mb-4 mt-8 flex items-center gap-2">
                    <span className="text-[#f57f17]/50">03.</span> Accuracy of Information
                </h2>
                <p>
                    While we strive to keep all information up to date, bonuses, terms, and offers from third-party operators can change at any time without notice. We do not guarantee the accuracy, completeness, or timeliness of any offer listed. Always check the specific terms and conditions on the operator's website before signing up.
                </p>

                <h2 className="text-xl font-bold text-[#fbc02d] mb-4 mt-8 flex items-center gap-2">
                    <span className="text-[#f57f17]/50">04.</span> Affiliate Disclosure
                </h2>
                <p>
                    Some of the links on this website are affiliate links. This means we may earn a commission if you click on the link or make a qualifying deposit with the partner operator. This comes at no additional cost to you and helps us maintain this free resource.
                </p>

                <h2 className="text-xl font-bold text-[#fbc02d] mb-4 mt-8 flex items-center gap-2">
                    <span className="text-[#f57f17]/50">05.</span> Limitation of Liability
                </h2>
                <p>
                    Use of this website is at your own risk. <strong>3 Shot Treasure</strong> and its owners shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from your use of this site or reliance on any information provided herein. We are not responsible for any losses incurred while gambling on third-party sites.
                </p>

                <h2 className="text-xl font-bold text-[#fbc02d] mb-4 mt-8 flex items-center gap-2">
                    <span className="text-[#f57f17]/50">06.</span> Gambling Responsibly
                </h2>
                <p>
                    Gambling should be entertaining and not a way to make money. If you or someone you know has a gambling problem, please call <strong className="text-[#f57f17]">1-800-GAMBLER</strong>.
                </p>
            </section>
        </LegalLayout>
    );
};

export default TermsPage;
