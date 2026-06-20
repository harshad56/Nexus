import React from 'react';
import '../styles/LegalPages.css';

export default function RefundPolicy() {
    return (
        <div className="legal-page">
            <h1 className="text-gradient legal-page__title">Refund Policy</h1>
            <p className="legal-page__date">Last Updated: March 2026</p>

            <div className="legal-page__content">
                <h2 className="legal-page__heading">1. Custom Software Development</h2>
                <p className="legal-page__text">Due to the custom nature of our software engineering and web development services at NexusWeb Solutions, we do not offer refunds once development work has commenced. All deposits and milestone payments are non-refundable.</p>

                <h2 className="legal-page__heading">2. Consultation & Strategy</h2>
                <p className="legal-page__text">Any fees paid for discovery and strategy sessions are non-refundable as the value is delivered during the session itself in the form of expert advice and technical architecture planning.</p>

                <h2 className="legal-page__heading">3. Project Cancellation</h2>
                <p className="legal-page__text">In the event that you choose to cancel a project mid-development, you will be billed for all work completed up to the date of written cancellation notice. Any outstanding balances must be cleared within 15 days.</p>

                <h2 className="legal-page__heading">4. Exceptions</h2>
                <p className="legal-page__text">If a project is cancelled prior to any development work or resource allocation occurring, a full refund less any administrative or payment processing fees may be issued at our sole discretion.</p>
            </div>
        </div>
    );
}
