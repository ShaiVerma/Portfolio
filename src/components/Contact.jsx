import React from 'react';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '4rem 2rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>Get In Touch</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="mailto:shai.verma@uconn.edu" style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                border: '2px solid var(--accent-color)',
                color: 'var(--accent-color)',
                borderRadius: '4px',
                fontWeight: 'bold',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
            }}
                onMouseOver={(e) => {
                    e.target.style.background = 'rgba(56, 189, 248, 0.1)';
                }}
                onMouseOut={(e) => {
                    e.target.style.background = 'transparent';
                }}
            >
                Say Hello
            </a>
        </section>
    );
};

export default Contact;
