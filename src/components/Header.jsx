import React from 'react';

const Header = () => {
    return (
        <header className="site-header">
            <div>
                Portfolio.
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#hero">Overview</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#awards">Awards</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
