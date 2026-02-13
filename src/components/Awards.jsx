
import React from 'react';
import { FaTrophy, FaMedal, FaAward, FaUniversity, FaLightbulb, FaGlobe, FaStar } from 'react-icons/fa';

const Awards = () => {
    const awards = [
        {
            title: '1st Place - HackUConn 2025',
            description: 'Built an AI Academic Advisor and Quantum Final Exam Scheduler.',
            icon: <FaTrophy style={{ color: '#FFD700' }} /> // Gold
        },
        {
            title: '1st Place - YQuantum 2025',
            description: 'Decoded hidden bitstrings in Peaked Circuits using tensor networks and simulators.',
            icon: <FaTrophy style={{ color: '#FFD700' }} /> // Gold
        },
        {
            title: 'Babbidge Scholar \'24',
            description: 'Awarded for earning a 4.000 semester GPA for each semester in the calendar year.',
            icon: <FaStar style={{ color: '#E5E4E2' }} /> // Platinum/Silverish
        },
        {
            title: 'Energy Innovators Award',
            description: 'International Design Competition: Creativity in Sustainability (Energy Mentors).',
            icon: <FaLightbulb style={{ color: '#FFD700' }} />
        },
        {
            title: '3rd Place - MIT iQuHack 2025',
            description: 'Tackled dynamic QAP with DWave Quantum Annealers in a hospital scenario.',
            icon: <FaMedal style={{ color: '#CD7F32' }} /> // Bronze
        },
        {
            title: '3rd Place - MIT iQuHack 2026',
            description: 'Benchmarked quantum algorithms for Value at Risk (VaR) estimation.',
            icon: <FaMedal style={{ color: '#CD7F32' }} /> // Bronze
        },
        {
            title: '3rd Place - CCEI Pitch Competition for Helio',
            description: 'Pitched helio, an AI-powered solar forecasting platform designed to solve the unpredictability of renewable energy.',
            icon: <FaMedal style={{ color: '#CD7F32' }} /> // Bronze
        },
        {
            title: 'Dean\'s List Engineering Scholar',
            description: 'Ranked in upper 25th percentile (Dec 2023, May 2024, Dec 2024, Dec 2025).',
            icon: <FaUniversity style={{ color: 'var(--color-cyan)' }} />
        },
        {
            title: 'Global Excellence Scholarship Award',
            description: 'Awarded for exceptional academic achievement and leadership (Aug 2023).',
            icon: <FaGlobe style={{ color: 'var(--color-indigo)' }} />
        },
        {
            title: 'Amar Ujala Haryana Top Performers 2023',
            description: 'Recognized for top performance in Haryana (Jul 2023).',
            icon: <FaAward style={{ color: '#FF69B4' }} />
        }
    ];

    return (
        <section id="awards" className="animate-fade-in" style={{ padding: '6rem 0' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    <span className="text-neon">Awards & Honors</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {awards.map((award, index) => (
                        <div key={index} className="glass-panel" style={{
                            padding: '2rem',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '1.5rem',
                            transition: 'transform 0.3s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ fontSize: '2rem', marginTop: '-0.25rem' }}>
                                {award.icon}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-starlight)', marginBottom: '0.5rem' }}>
                                    {award.title}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                                    {award.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
