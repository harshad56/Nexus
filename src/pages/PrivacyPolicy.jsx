import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div style={{ padding: '8rem 2rem 4rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="text-gradient" style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}>Privacy Policy</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontStyle: 'italic' }}>Last Updated: March 2026</p>

            <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                <h2 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>1. Introduction</h2>
                <p style={{ marginBottom: '1rem' }}>NexusWeb Solutions ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>

                <h2 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>2. Data We Collect</h2>
                <p style={{ marginBottom: '1rem' }}>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
                    <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                    <li><strong>Contact Data:</strong> includes billing address, email address and telephone numbers.</li>
                    <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
                </ul>

                <h2 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>3. How We Use Your Data</h2>
                <p style={{ marginBottom: '1rem' }}>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                    <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    <li>Where we need to comply with a legal or regulatory obligation.</li>
                </ul>

                <h2 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>4. Contact Details</h2>
                <p style={{ marginBottom: '1rem' }}>If you have any questions about this privacy policy or our privacy practices, please contact us at info@nexuswebsolutions.in.</p>
            </div>
        </div>
    );
}
