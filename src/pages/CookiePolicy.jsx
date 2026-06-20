import React from 'react';
import '../styles/LegalPages.css';

export default function CookiePolicy() {
    return (
        <div className="legal-page">
            <h1 className="text-gradient legal-page__title">Cookie Policy</h1>
            <p className="legal-page__date">Last Updated: March 2026</p>

            <div className="legal-page__content">
                <h2 className="legal-page__heading">1. What Are Cookies?</h2>
                <p className="legal-page__text">Cookies are small text files that are placed on your computer or mobile device when you browse websites. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>

                <h2 className="legal-page__heading">2. How We Use Cookies</h2>
                <p className="legal-page__text">NexusWeb Solutions uses cookies to:</p>
                <ul className="legal-page__list">
                    <li>Understand and save your preferences for future visits.</li>
                    <li>Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.</li>
                </ul>

                <h2 className="legal-page__heading">3. Managing Cookies</h2>
                <p className="legal-page__text">You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.</p>
                <p className="legal-page__text">If you turn cookies off, some of the features that make your site experience more efficient may not function properly.</p>
            </div>
        </div>
    );
}
