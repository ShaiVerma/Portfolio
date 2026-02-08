import React from 'react';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '80px',
            paddingBottom: '4rem'
        }} className="animate-fade-in">
            <div className="hero-content">
                <div style={{ flex: 1, paddingRight: '2rem' }}>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 6vw, 7rem)',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: '1rem'
                    }}>
                        Hello! <br />
                        <span className="text-gradient">I'm Shai Verma!</span>
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '600px',
                        marginBottom: '2.5rem',
                        marginLeft: 'auto',
                        marginRight: 'auto' // Centered on mobile due to text-align center in css, but left aligned on desktop
                    }}>
                        Honors CS @UConn | AI Developer @deepSalud | Analyst @Hillside Ventures | Undergraduate Research Assistant @UConn
                    </p>
                    <a href="#projects" style={{
                        display: 'inline-block',
                        padding: '1rem 2.5rem',
                        background: 'var(--color-indigo)',
                        color: '#fff',
                        fontWeight: '600',
                        borderRadius: '999px',
                        boxShadow: '0 0 20px rgba(79, 70, 229, 0.4)',
                        transition: 'all 0.3s ease'
                    }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 0 30px rgba(79, 70, 229, 0.6)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 0 20px rgba(79, 70, 229, 0.4)';
                        }}
                    >
                        View Work
                    </a>
                </div>

                <div className="profile-image-container">
                    {/* Placeholder for user to replace with their actual image */}
                    <img
                        src="/profile.jpg"
                        alt="Shai Verma"
                        className="profile-image"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://ui-avatars.com/api/?name=Shai+Verma&background=0D8ABC&color=fff&size=256';
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
