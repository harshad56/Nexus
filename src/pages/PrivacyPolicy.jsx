import React from 'react';
import '../styles/LegalPages.css';

export default function PrivacyPolicy() {
    return (
        <div className="legal-page">
            <h1 className="text-gradient legal-page__title">Privacy Policy</h1>
            <p className="legal-page__date">Last Updated: March 2026</p>

            <div className="legal-page__content">
                <h2 className="legal-page__heading">1. Introduction</h2>
                <p className="legal-page__text">NexusWeb Solutions ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>

                <h2 className="legal-page__heading">2. Data We Collect</h2>
                <p className="legal-page__text">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                <ul className="legal-page__list">
                    <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                    <li><strong>Contact Data:</strong> includes billing address, email address and telephone numbers.</li>
                    <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
                </ul>

                <h2 className="legal-page__heading">3. How We Use Your Data</h2>
                <p className="legal-page__text">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul className="legal-page__list">
                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                    <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    <li>Where we need to comply with a legal or regulatory obligation.</li>
                </ul>

                <h2 className="legal-page__heading">4. Contact Details</h2>
                <p className="legal-page__text">If you have any questions about this privacy policy or our privacy practices, please contact us at info@nexuswebsolutions.in.</p>
            </div>
        </div>
    );
}
