import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{
            padding: '2rem',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            marginTop: '4rem',
            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
        }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
                <a href="https://github.com/ShaiVerma" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                    <FaGithub size={24} />
                </a>
                <a href="https://linkedin.com/shai-verma" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                    <FaLinkedin size={24} />
                </a>
                <a href="mailto:shai.verma@uconn.edu" className="social-icon" aria-label="Email">
                    <FaEnvelope size={24} />
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Shai Verma. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
