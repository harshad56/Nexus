import React from 'react';

export default function RefundPolicy() {
    return (
        <div style={{ padding: '8rem 2rem 4rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="text-gradient" style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}>Refund Policy</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontStyle: 'italic' }}>Last Updated: March 2026</p>

            <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                <h2 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>1. Custom Software Development</h2>
                <p style={{ marginBottom: '1rem' }}>Due to the custom nature of our software engineering and web development services at NexusWeb Solutions, we do not offer refunds once development work has commenced. All deposits and milestone payments are non-refundable.</p>

                <h2 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>2. Consultation & Strategy</h2>
                <p style={{ marginBottom: '1rem' }}>Any fees paid for discovery and strategy sessions are non-refundable as the value is delivered during the session itself in the form of expert advice and technical architecture planning.</p>

                <h2 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>3. Project Cancellation</h2>
                <p style={{ marginBottom: '1rem' }}>In the event that you choose to cancel a project mid-development, you will be billed for all work completed up to the date of written cancellation notice. Any outstanding balances must be cleared within 15 days.</p>

                <h2 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>4. Exceptions</h2>
                <p style={{ marginBottom: '1rem' }}>If a project is cancelled prior to any development work or resource allocation occurring, a full refund less any administrative or payment processing fees may be issued at our sole discretion.</p>
            </div>
        </div>
    );
}
