import React from 'react';
import linkedinIcon from './assets/LI-Icon.png';
import githubIcon from './assets/GitHub_Invertocat_Black.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="nav-logo">
        <div className="logo-text-wrapper">
          <h2 className="nav-name">
            ETHAN <span className="name-last">BLACKWOOD</span>
          </h2>
          <span className="nav-subtitle">—Software Engineer</span>
        </div>
      </div>

      <div className="footer-right">
        <span className="copyright">
          © {new Date().getFullYear()} Ethan Blackwood. All rights reserved.
        </span>

        <a
          href="https://github.com/EthanBlackwood"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={githubIcon} alt="GitHub" className="social-icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/ethan-blackwood/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
