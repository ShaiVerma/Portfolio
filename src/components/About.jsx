import React from 'react';

const About = () => {
    return (
        <section id="about" className="animate-fade-in" style={{ padding: '6rem 0' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    <span className="text-neon">About Me</span>
                </h2>

                {/* Introduction */}
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
                    <p style={{
                        fontSize: '1.3rem',
                        color: 'var(--text-primary)',
                        lineHeight: '1.6',
                        fontWeight: '500'
                    }}>
                        Hey! I am <span style={{ color: 'var(--color-cyan)' }}>Shai Verma</span>. I am a Computer Science major at the <span style={{ color: 'var(--color-indigo)' }}>University of Connecticut</span> with a minor in Mathematics and Entrepreneurship.
                    </p>
                </div>

                {/* Long-term Goal Section */}
                <div className="glass-panel" style={{
                    padding: '2.5rem',
                    marginBottom: '3rem',
                    borderLeft: '4px solid var(--color-cyan)',
                    background: 'rgba(255, 255, 255, 0.03)'
                }}>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-primary)',
                        lineHeight: '1.8',
                        marginBottom: '0'
                    }}>
                        "My long-term goal is to work as a consultant and strategist, helping organizations integrate AI and quantum capabilities into products and decision frameworks to deliver measurable, real-world transformation. I am especially interested in applications that turn cutting-edge methods into scalable tools for analysis, risk, and optimization."
                    </p>
                </div>

                {/* Three Fronts Grid */}
                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{
                        fontSize: '1.5rem',
                        color: 'var(--text-primary)',
                        marginBottom: '2rem',
                        textAlign: 'center'
                    }}>
                        To move toward that goal, I am actively building across three fronts:
                    </h3>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem'
                    }}>
                        {/* Front 1: Quantum */}
                        <div className="glass-panel glow-border" style={{ padding: '2rem', height: '100%' }}>
                            <div style={{ fontSize: '2rem', color: 'var(--color-cyan)', marginBottom: '1rem' }}>⚛️</div>
                            <h4 style={{ color: 'var(--color-starlight)', marginBottom: '1rem', fontSize: '1.2rem' }}>Quantum Research</h4>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                Conducting research in quantum algorithms and computational modeling to push the boundaries of what's possible.
                            </p>
                        </div>

                        {/* Front 2: AI Systems */}
                        <div className="glass-panel glow-border" style={{ padding: '2rem', height: '100%' }}>
                            <div style={{ fontSize: '2rem', color: 'var(--color-purple)', marginBottom: '1rem' }}>🤖</div>
                            <h4 style={{ color: 'var(--color-starlight)', marginBottom: '1rem', fontSize: '1.2rem' }}>AI Systems</h4>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                Developing AI systems, including agent-based approaches, to create intelligent and adaptive solutions.
                            </p>
                        </div>

                        {/* Front 3: VC Strategy */}
                        <div className="glass-panel glow-border" style={{ padding: '2rem', height: '100%' }}>
                            <div style={{ fontSize: '2rem', color: 'var(--color-indigo)', marginBottom: '1rem' }}>🚀</div>
                            <h4 style={{ color: 'var(--color-starlight)', marginBottom: '1rem', fontSize: '1.2rem' }}>Venture Capital</h4>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                Working within a VC environment to understand how emerging technologies become enduring businesses.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Closing Statement */}
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)',
                        fontStyle: 'italic',
                        lineHeight: '1.6'
                    }}>
                        "This combination keeps me close to both the science and the strategy behind impactful innovation."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
