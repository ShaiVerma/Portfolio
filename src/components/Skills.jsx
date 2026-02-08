import React, { useRef } from 'react';
import { FaChevronRight } from 'react-icons/fa';

const Skills = () => {
    const scrollContainerRef = useRef(null);

    const scrollNext = () => {
        const container = scrollContainerRef.current;
        if (container) {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            // Check if we are near the end (allow a small buffer for precision issues)
            if (scrollLeft + clientWidth >= scrollWidth - 10) {
                // Loop back to start
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // Scroll one view width
                container.scrollBy({ left: clientWidth / 2, behavior: 'smooth' });
            }
        }
    };

    const skillCategories = [
        {
            title: 'Languages',
            skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'C', 'HTML', 'CSS']
        },
        {
            title: 'Frameworks/Tools',
            skills: ['React', 'Vue.js', 'Next.js', 'Node.js', 'Flask', 'Git', 'Docker', 'Figma', 'CI/CD', 'BurpSuite', 'VSCode', 'PyCharm', 'Jupyter', 'Streamlit', 'LaTeX']
        },
        {
            title: 'Libraries/SDKs',
            skills: ['Pandas', 'NumPy', 'SciPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Qiskit', 'Classiq', 'Transformers', 'HuggingFace', 'Langchain', 'OpenAI', 'Gemini API']
        },
        {
            title: 'Technical Knowledge',
            skills: ['Neural Networks', 'Machine Learning', 'Deep Learning', 'Quantum Computing', 'Quantum Machine Learning', 'Quantum Optimization', 'Data Preprocessing', 'Data Visualization', 'Data Analysis', 'Computer Vision', 'Cybersecurity', 'Computer Architecture', 'Quantitative Analysis', 'Portfolio Optimization']
        },
        {
            title: 'Business Technical Skills',
            skills: ['Venture Capital', 'Market Analysis', 'Business Strategy', 'Business Modeling', 'Competitive Analysis', 'Financial Modeling', 'Venture Sourcing', 'Capital Allocation', 'Portfolio Management', 'Risk Management', 'Leadership', 'Project Management', 'Agile Methodologies', 'Technical Writing']
        },
        {
            title: 'Soft Skills',
            skills: ['Communication', 'Teamwork', 'Problem Solving', 'Adaptability', 'Leadership', 'Time Management', 'Critical Thinking', 'Creativity', 'Collaboration', 'Presentation Skills', 'Negotiation', 'Conflict Resolution', 'Mentorship', 'Coaching']
        }
    ];

    return (
        <section id="skills" className="animate-fade-in">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                <span className="text-neon">Skills</span>
            </h2>
            <div style={{ position: 'relative' }}>
                <div className="skills-container" ref={scrollContainerRef}>
                    {skillCategories.map((category, index) => (
                        <div key={index} className="glass-panel glow-border">
                            <h3 style={{
                                fontSize: '1.5rem',
                                marginBottom: '1.5rem',
                                color: 'var(--color-cyan)',
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                                paddingBottom: '0.5rem'
                            }}>
                                {category.title}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                                {category.skills.map(skill => (
                                    <span key={skill} style={{
                                        background: 'rgba(79, 70, 229, 0.2)',
                                        color: 'var(--color-starlight)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '999px',
                                        fontSize: '0.9rem',
                                        border: '1px solid rgba(79, 70, 229, 0.4)'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="scroll-indicator" onClick={scrollNext}>
                    <FaChevronRight />
                </div>
            </div>
        </section>
    );
};

export default Skills;
