import React from 'react';

export default function CookiePolicy() {
    return (
        <div style={{ padding: '8rem 2rem 4rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="text-gradient" style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}>Cookie Policy</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontStyle: 'italic' }}>Last Updated: March 2026</p>

            <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                <h2 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>1. What Are Cookies?</h2>
                <p style={{ marginBottom: '1rem' }}>Cookies are small text files that are placed on your computer or mobile device when you browse websites. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>

                <h2 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>2. How We Use Cookies</h2>
                <p style={{ marginBottom: '1rem' }}>NexusWeb Solutions uses cookies to:</p>
                <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
                    <li>Understand and save your preferences for future visits.</li>
                    <li>Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.</li>
                </ul>

                <h2 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>3. Managing Cookies</h2>
                <p style={{ marginBottom: '1rem' }}>You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.</p>
                <p style={{ marginBottom: '1rem' }}>If you turn cookies off, some of the features that make your site experience more efficient may not function properly.</p>
            </div>
        </div>
    );
}
