import React, { useState } from 'react';
import { FaDownload, FaEye, FaEyeSlash } from 'react-icons/fa';

const Resume = () => {
    const [showPreview, setShowPreview] = useState(false);

    return (
        <section id="resume" className="animate-fade-in" style={{ padding: '6rem 0', textAlign: 'center' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
                    <span className="text-neon">Resume</span>
                </h2>

                <div className="glass-panel glow-border" style={{
                    padding: '3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem'
                }}>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        Interested in my full professional background? Preview or download my resume to see the details of my experience, research, and technical skills.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <button
                            onClick={() => setShowPreview(!showPreview)}
                            className="glass-panel"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '1rem 2rem',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                color: 'var(--color-starlight)',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '50px',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            {showPreview ? <><FaEyeSlash /> Hide Preview</> : <><FaEye /> Preview Resume</>}
                        </button>

                        <a
                            href="/VermaShaiSpring26.pdf"
                            download="VermaShaiResume.pdf"
                            className="glass-panel"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '1rem 2rem',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                color: 'var(--color-cyan)',
                                textDecoration: 'none',
                                border: '1px solid var(--color-cyan)',
                                borderRadius: '50px',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(6, 182, 212, 0.2)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 0 15px rgba(6, 182, 212, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <FaDownload /> Download Resume
                        </a>
                    </div>

                    {showPreview && (
                        <div style={{
                            width: '100%',
                            height: '600px',
                            marginTop: '2rem',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            background: 'white' // PDF usually looks better on white
                        }}>
                            <iframe
                                src="VermaShaiSpring26.pdf"
                                title="Resume Preview"
                                width="100%"
                                height="100%"
                                style={{ border: 'none' }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Resume;
