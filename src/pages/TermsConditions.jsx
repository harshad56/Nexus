import React from 'react';
import '../styles/LegalPages.css';

export default function TermsConditions() {
    return (
        <div className="legal-page">
            <h1 className="text-gradient legal-page__title">Terms & Conditions</h1>
            <p className="legal-page__date">Last Updated: March 2026</p>

            <div className="legal-page__content">
                <h2 className="legal-page__heading">1. Agreement to Terms</h2>
                <p className="legal-page__text">These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and NexusWeb Solutions ("we", "us", or "our"), concerning your access to and use of our services and website.</p>

                <h2 className="legal-page__heading">2. Intellectual Property Rights</h2>
                <p className="legal-page__text">Unless otherwise indicated, the Site and Services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of India, foreign jurisdictions, and international conventions.</p>

                <h2 className="legal-page__heading">3. Project Delivery & Timelines</h2>
                <p className="legal-page__text">All project delivery timelines are estimates and are contingent upon timely feedback and asset delivery from the client. Delays on the client's end may result in corresponding delays to the final delivery date.</p>

                <h2 className="legal-page__heading">4. Governing Law</h2>
                <p className="legal-page__text">These Terms shall be governed by and defined following the laws of India. NexusWeb Solutions and yourself irrevocably consent that the courts of Mumbai, Maharashtra shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
            </div>
        </div>
    );
}
