import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Personal Portfolio Website',
            description: [
                'Designed a responsive, neon-themed portfolio using React and Vite.',
                'Implemented interactive components like project carousels and PDF previews.',
                'Deployed a high-performance web application to showcase professional work.',
            ],
            tags: ['React', 'Vite', 'CSS', 'JavaScript', 'Web Design', 'Portfolio'],
            link: 'https://github.com/ShaiVerma/Portfolio'
        },
        {
            title: 'MIT iQuHack 2025 DWave Quantum Annealer (3rd Place)',
            description: [
                'Tackled dynamic QAP instead of static formulations for hospital optimization.',
                'compared CQMs, NL models, and classical solvers in real-world scenarios.',
                'Delivered comprehensive insights and open-source code in our repository.'
            ],
            tags: ['Quantum Computing', 'Quantum Optimization', 'DWave', 'Quantum Annealing', 'CQM', 'Python', 'Qiskit', 'MIT iQuHack'],
            link: 'https://github.com/Hackers-of-Tomorrow/5-idiots-MIT.git'
        },
        {
            title: 'HackUConn 2025 (1st Place)',
            description: [
                'Built an AI Academic Advisor for 24/7 automated student course planning.',
                'Developed a Final Exam Scheduler using D-Wave Quantum Annealing.',
                'Optimized university schedules to enhance accessibility and efficiency.'
            ],
            tags: ['AI Agent', 'Quantum Computing', 'Quantum Annealing', 'DWave', 'Python', 'Qiskit', 'HackUConn'],
            link: 'https://github.com/pdd23001/QuantumAdvisors.git'
        },
        {
            title: 'YQuantum 2025 (1st Place)',
            description: [
                'Decoded hidden bitstrings in Peaked Circuits using tensor networks.',
                'Applied quantum circuit cutting and simulators like BlueQubit and IBM Aer.',
                'Utilized CPU/MPS and Quantum Rings for efficient circuit simulation.'
            ],
            tags: ['Quantum Computing', 'Python', 'Qiskit', 'Quimb', 'BlueQubit', 'Quantum Rings', 'IBM Aer', 'YQuantum'],
            link: 'https://github.com/pdd23001/YQuantum2025-Last-Minute.git'
        },
        {
            title: 'MIT iQuHack 2026 (3rd Place)',
            description: [
                'Benchmarked quantum algorithms for Value at Risk (VaR) estimation for State Street.',
                'Implemented Iterative Quantum Amplitude Estimation (IQAE) and Quantum Signal Processing.',
                'Extended analysis to Conditional VaR (CVaR) and Expectile VaR (EVaR) metrics.'
            ],
            tags: ['Quantum Computing', 'Quantitative Analysis', 'Risk Management', 'VaR', 'CVaR', 'EVaR', 'Python', 'Qiskit', 'Classiq', 'Quantum Signal Processing', 'MIT iQuHack'],
            link: 'https://github.com/UConn-Quantum-Computing/MIT-iQuHack-2026-State-Street-Classiq.git'
        },
        {
            title: 'Everly - An AI-based storytelling agent',
            description: [
                'Designed a web app for older adults to capture and share personal memories.',
                'Implemented natural voice conversations with an AI companion to record stories.',
                'Generated downloadable PDF narratives to preserve family history.'
            ],
            tags: ['React', 'JavaScript', 'Vite', 'CSS', 'AI', 'OpenAI', 'Voice Recognition', 'Natural Language Processing', 'PDF Generation'],
            link: 'https://github.com/ShaiVerma/Everly-main.git'
        },
        {
            title: 'Fundraiser Logistics Agent',
            description: [
                'Acts as a "Chief Financial Officer" to analyze budgets and sales goals.',
                'Recommends profitable items and calculates total costs and revenue.',
                'Automates order form generation and emails details to vendors.'
            ],
            tags: ['Python', 'AI', 'Data Analysis', 'Financial Modeling', 'Email Automation', 'Order Forms'],
            link: 'https://github.com/ShaiVerma/fundraiser-planner.git'
        },
        {
            title: 'Deep Learning Job Recommendation System',
            description: [
                'Developed a system to match early-career professionals with suitable jobs.',
                'Leveraged BERT embeddings and CNNs to evaluate resume-job compatibility.',
                'Outputted personalized match scores to streamline the job search process.'
            ],
            tags: ['Deep Learning', 'Machine Learning', 'Neural Networks', 'Transformers', 'BERT', 'CNN', 'Pandas', 'NumPy', 'Job Recommendation System'],
            link: 'https://github.com/BenA669/DeepLearningProject.git'
        },
        {
            title: 'Preference-based Reinforcement Learning',
            description: [
                'Implemented a CNN-based supervised learning approach to train reward models from pairwise trajectory comparisons.',
                'Enabled agents to learn reward functions from human preferences instead of hand-crafted specifications.',
                'Utilized the learned reward models to guide DQN agents in complex environments.'
            ],
            tags: ['Reinforcement Learning', 'Deep Learning', 'CNN', 'DQN', 'Python', 'Machine Learning', 'AI'],
            link: 'https://github.com/pdd23001/DQN-CNN.git'
        }
    ];

    const [currentIndex, setCurrentIndex] = React.useState(1);
    const [itemsPerPage, setItemsPerPage] = React.useState(2);
    const [isTransitioning, setIsTransitioning] = React.useState(false);


    // Clone last item to start, and first item to end for seamless loop
    // refined: we need enough clones to cover the view. 
    // If itemsPerPage is 2, we should clone at least 2 items.
    const clonesCount = 2;
    const extendedProjects = [
        ...projects.slice(-clonesCount), // Last 'clonesCount' items at the start
        ...projects,
        ...projects.slice(0, clonesCount) // First 'clonesCount' items at the end
    ];

    const totalSlides = extendedProjects.length;

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(2);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Initialize to the first "real" item
    React.useEffect(() => {
        setCurrentIndex(clonesCount);
    }, [clonesCount]);

    const nextProject = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    };

    const prevProject = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        // If we reached the clones at the end
        if (currentIndex >= totalSlides - clonesCount) {
            setCurrentIndex(currentIndex - projects.length);
        }
        // If we reached the clones at the start
        else if (currentIndex < clonesCount) {
            setCurrentIndex(currentIndex + projects.length);
        }
    };

    // Wheel Support
    const handleWheel = (e) => {
        if (isTransitioning) return;
        if (Math.abs(e.deltaX) > 50 || Math.abs(e.deltaY) > 50) {
            if (e.deltaX > 0 || e.deltaY > 0) {
                nextProject();
            } else {
                prevProject();
            }
        }
    };

    // Touch Support
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextProject();
        } else if (isRightSwipe) {
            prevProject();
        }
    };

    // Scrollbar Logic
    const handleScrollbarChange = (e) => {
        const newIndex = parseInt(e.target.value, 10);
        setCurrentIndex(newIndex + clonesCount);
    };

    // Calculate current logical index for scrollbar (0 to projects.length - 1)
    const logicalIndex = (currentIndex - clonesCount + projects.length) % projects.length;

    return (
        <section id="projects" className="animate-fade-in" style={{ padding: '4rem 0' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                <span className="text-neon">Projects</span>
            </h2>

            <div
                style={{ position: 'relative', padding: '0 3rem', maxWidth: '1200px', margin: '0 auto', overflow: 'hidden' }}
                onWheel={handleWheel}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {/* Left Arrow */}
                <button
                    onClick={prevProject}
                    style={{
                        position: 'absolute',
                        left: '0',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(6, 182, 212, 0.1)',
                        border: '1px solid rgba(6, 182, 212, 0.3)',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: 'var(--color-cyan)',
                        zIndex: 10,
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(6, 182, 212, 0.3)';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                    }}
                    aria-label="Previous project"
                >
                    &#8592;
                </button>

                {/* Projects Track */}
                <div
                    style={{
                        display: 'flex',
                        gap: '2rem',
                        transform: `translateX(calc(-${(currentIndex * 100) / itemsPerPage}% - ${(currentIndex * 2) / itemsPerPage}rem))`,
                        transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {extendedProjects.map((project, index) => {
                        return (
                            <div
                                key={`${project.title}-${index}`}
                                style={{
                                    flex: `0 0 calc((100% - ${(itemsPerPage - 1) * 2}rem) / ${itemsPerPage})`,
                                    minWidth: 0,
                                    userSelect: 'none'
                                }}
                            >
                                <div className="glass-panel glow-border" style={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                                        {project.title}
                                    </h3>
                                    <ul style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem', flexGrow: 1, paddingLeft: '1.5rem', margin: '0 0 1.5rem 0' }}>
                                        {project.description.map((item, i) => (
                                            <li key={i} style={{ marginBottom: '0.5rem' }}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>



                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto', paddingTop: '1rem' }}>
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} style={{
                                                fontSize: '0.75rem',
                                                color: 'var(--color-cyan)',
                                                background: 'rgba(6, 182, 212, 0.1)',
                                                padding: '0.25rem 0.5rem',
                                                borderRadius: '4px',
                                                border: '1px solid rgba(6, 182, 212, 0.2)'
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: 'var(--color-starlight)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' }}
                                        >
                                            View Repo &rarr;
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={nextProject}
                    style={{
                        position: 'absolute',
                        right: '0',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(6, 182, 212, 0.1)',
                        border: '1px solid rgba(6, 182, 212, 0.3)',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: 'var(--color-cyan)',
                        zIndex: 10,
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(6, 182, 212, 0.3)';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)';
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                    }}
                    aria-label="Next project"
                >
                    &#8594;
                </button>
            </div>

            {/* Custom Scrollbar (Range Input) */}
            <div style={{ maxWidth: '600px', margin: '2rem auto 0', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <style>
                    {`
                        .custom-range {
                            -webkit-appearance: none;
                            width: 100%;
                            height: 4px;
                            background: rgba(255, 255, 255, 0.1);
                            border-radius: 2px;
                            outline: none;
                            transition: background 0.3s;
                        }
                        .custom-range:hover {
                            background: rgba(255, 255, 255, 0.2);
                        }
                        .custom-range::-webkit-slider-thumb {
                            -webkit-appearance: none;
                            appearance: none;
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                            background: var(--color-cyan);
                            cursor: pointer;
                            box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
                            transition: transform 0.2s ease;
                        }
                        .custom-range::-webkit-slider-thumb:hover {
                            transform: scale(1.2);
                            box-shadow: 0 0 15px rgba(6, 182, 212, 0.8);
                        }
                        .custom-range::-moz-range-thumb {
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                            background: var(--color-cyan);
                            cursor: pointer;
                            box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
                            transition: transform 0.2s ease;
                            border: none;
                        }
                        .custom-range::-moz-range-thumb:hover {
                            transform: scale(1.2);
                            box-shadow: 0 0 15px rgba(6, 182, 212, 0.8);
                        }
                    `}
                </style>
                <input
                    type="range"
                    min="0"
                    max={projects.length - 1}
                    value={logicalIndex}
                    onChange={handleScrollbarChange}
                    className="custom-range"
                    aria-label="Project scrollbar"
                />
            </div>
        </section>
    );
};

export default Projects;
