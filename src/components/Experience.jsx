import React from 'react';

const Experience = () => {


    const experiences = [
        {
            role: 'Undergraduate Research Assistant',
            company: 'School of Computing, University of Connecticut',
            period: 'October 2025 - Present',
            description: [
                'Implement Qiskit circuits for the combinatorial Weapons Target Assignment Problem (WTAP).',
                'Run simulations to benchmark solutions, debug circuits, and validate outputs against known/expected optima.',
                'Optimize and document related code and workflows to ensure reproducible experiments and easy reuse by the research team.'
            ]
        },
        {
            role: 'AI Developer ',
            company: 'DeepSalud Digital Health',
            period: 'December 2025 - Present',
            description: [
                'Built the MVP for the AI-powered patient engagement platform (core product features + deployment).',
                'Implemented voice recognition and cultural-competency logic in the AI pipeline.',
                'Wrote technical/business documentation and supported business development (partner/customer-facing materials, pitches).'
            ]
        },
        {
            role: 'STEM Fund Analyst ',
            company: 'Hillside Ventures',
            period: '2020 - 2022',
            description: [
                'Conduct technical and market due diligence on early-stage STEM startups, including AI and quantum computing sectors.',
                'Collaborate with investment team to assess product viability, competitive landscape, and deep tech innovation.',
                'Pitched startups to investment committee with data-driven analysis and financial modeling insights.'
            ]
        },
        {
            role: 'Undergraduate Teaching Assistant',
            company: 'School of Computing, University of Connecticut',
            period: 'January 2025 - Present',
            description: [
                'Assisted in teaching Introduction to Python for both college and high school students.',
                'Evaluated and graded homework assignments, and provided support by clarifying logic and syntax, in Python and Java.',
                'Led interactive problem-solving sessions to reinforce course concepts, encourage active learning, and team collaboration.'
            ]
        },
        {
            role: 'Information Technology Support Specialist',
            company: 'Information Technology Services, University of Connecticut',
            period: 'May 2025 - Present',
            description: [
                'Provide in-person and remote support for hardware, software, and AV issues across Windows and macOS systems.',
                'Use Jira to manage support tickets and track issue resolution for students, faculty, and staff.',
                'Assist with device setup, Microsoft 365 troubleshooting, and Intune-based device management.'
            ]
        },
        {
            role: 'Peer Tutor - Quantitative Center',
            company: 'Quantitative Center, University of Connecticut',
            period: 'August 2024 - February 2026',
            description: [
                'Provide in-person and remote support for hardware, software, and AV issues across Windows and macOS systems.',
                'Use Jira to manage support tickets and track issue resolution for students, faculty, and staff.',
                'Assist with device setup, Microsoft 365 troubleshooting, and Intune-based device management.'
            ]
        },
        {
            role: 'First Years Honors Facilitator',
            company: 'UConn Honors Program',
            period: 'August 2024 - December 2024',
            description: [
                'Led first-year experience (FYE) classes to help honors students transition to college, covering topics like academic success, time management, and campus resources.',
                'Provided one-on-one mentorship, guiding students through academic, social, and professional challenges.',
                'Planned and facilitated engaging workshops and events to build community and encourage collaboration among students.',
                'Adapted quickly to program changes, ensuring a smooth experience for all participants.'
            ]
        }
    ];

    return (
        <section id="experience" className="animate-fade-in" style={{ padding: '6rem 0' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    <span className="text-neon">Experience</span>
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="glass-panel"
                            style={{
                                padding: '2rem',
                                borderLeft: '4px solid var(--color-purple)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', color: 'var(--color-starlight)', marginBottom: '0.25rem' }}>
                                        {exp.role}
                                    </h3>
                                    <h4 style={{ fontSize: '1.1rem', color: 'var(--color-indigo)', marginBottom: '0.5rem' }}>
                                        {exp.company}
                                    </h4>
                                </div>
                                <span style={{
                                    background: 'rgba(124, 58, 237, 0.1)',
                                    color: 'var(--color-purple)',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '999px',
                                    fontSize: '0.9rem',
                                    border: '1px solid rgba(124, 58, 237, 0.2)',
                                    whiteSpace: 'nowrap'
                                }}>
                                    {exp.period}
                                </span>
                            </div>

                            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.7', paddingLeft: '1.5rem', margin: 0 }}>
                                {exp.description.map((item, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem' }}>
                                        {item}
                                    </li>
                                ))}
                            </ul>


                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
};

export default Experience;
