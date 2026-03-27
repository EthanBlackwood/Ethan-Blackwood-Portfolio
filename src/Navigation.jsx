import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return(
        <nav className = "navbar">
            <div className = "nav-logo">
                <Link 
                    to="/" 
                    onClick={() => window.scrollTo(0, 0)} 
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <div className = "logo-text-wrapper">
                        <h2 className = "nav-name">
                            Ethan <span className = "name-last">Blackwood</span>
                        </h2>
                        <span className = "nav-subtitle">—Software Engineer</span>

                    </div>
                </Link>

            </div>

            <ul className = "nav-links">
                    <li><a href="/#skills">Skills</a></li>
                    <li><a href="/#experience">Experience</a></li>
                    <li><a href="/#portfolio">Portfolio</a></li>
                    <li><a href="/#education">Education</a></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>


        </nav>
    );

}

export default Navigation;