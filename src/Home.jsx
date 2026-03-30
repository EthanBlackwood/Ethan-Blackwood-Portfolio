import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import headerbackground from './assets/HeaderBackgroundImage2.png';
import downloadIcon from './assets/downloadicon.png';
import Mission from './Mission';
import Tech from './Tech';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <main style={{ paddingTop: 'var(--nav-height)' }}>
      <div id="header" style={{ backgroundImage: `url(${headerbackground})` }}>
        <h2 className="name-header">
          ETHAN <span className="name-header-last">BLACKWOOD</span>
        </h2>

        <div className="header-sub-content">
          <h3 className="header-title">
            —— Student <span className="andsymbol">&</span> Developer
          </h3>
          <p className="header-blurb">
            Translating my industry experience into reliable technical solutions. Junior at the
            University of South Carolina.
          </p>
        </div>

        <div className="header-action-buttons">
          <Link to="/contact" className="btn-primary">
            Contact
          </Link>

          <a href="/Ethan_Blackwood_Resume.pdf" className="btn-secondary" download>
            Resume <img src={downloadIcon} alt="Download Icon" className="btn-icon" />
          </a>
        </div>
      </div>

      <Mission />
      <Tech />
      <Projects />
      <Experience />
      <Education />
    </main>
  );
};

export default Home;
