import React from 'react';
import missionImage from './assets/MissionImage.jpg';

const Mission = () => {
  return (
    <section id="mission" className="mission-section">
      <div className="mission-container">
        <div className="mission-image-col">
          <h3 className="section-label">
            What <span className="label-gray">I Do</span>
          </h3>
          <img src={missionImage} alt="Ethan Blackwood - Mission" className="mission-img" />
        </div>

        <div className="mission-text-col">
          <h2 className="mission-statement">
            Rapidly evolving with the tech landscape to deliver meaningful results.
          </h2>
          <p className="mission-blurb">
            In a fast-moving industry, adaptability is a core engineering skill. I thrive on the
            steep learning curves that come with new projects, leveraging my relentless curiosity to
            quickly adjust to new environments and deliver production-ready solutions.
          </p>

          <div className="mission-details">
            <div className="detail-item">
              <span className="detail-label">LOCATION</span>
              <span className="detail-value">Charlotte, NC</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">STATUS</span>
              <span className="detail-value">SWE Intern at Textron</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
