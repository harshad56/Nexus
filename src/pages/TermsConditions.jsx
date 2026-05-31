import React from 'react';

export default function TermsConditions() {
    return (
        <div style={{ padding: '8rem 2rem 4rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="text-gradient" style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}>Terms & Conditions</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontStyle: 'italic' }}>Last Updated: March 2026</p>

            <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                <h2 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>1. Agreement to Terms</h2>
                <p style={{ marginBottom: '1rem' }}>These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and NexusWeb Solutions ("we", "us", or "our"), concerning your access to and use of our services and website.</p>

                <h2 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>2. Intellectual Property Rights</h2>
                <p style={{ marginBottom: '1rem' }}>Unless otherwise indicated, the Site and Services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of India, foreign jurisdictions, and international conventions.</p>

                <h2 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>3. Project Delivery & Timelines</h2>
                <p style={{ marginBottom: '1rem' }}>All project delivery timelines are estimates and are contingent upon timely feedback and asset delivery from the client. Delays on the client's end may result in corresponding delays to the final delivery date.</p>

                <h2 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>4. Governing Law</h2>
                <p style={{ marginBottom: '1rem' }}>These Terms shall be governed by and defined following the laws of India. NexusWeb Solutions and yourself irrevocably consent that the courts of Mumbai, Maharashtra shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
            </div>
        </div>
    );
}
