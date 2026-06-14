import React from 'react';

const Education = () => {
  const experienceList = [
    {
      id: 1,
      duration: 'Aug 2024 — May 2028',
      location: 'Columbia, SC',
      company: 'University of South Carolina Honors College',
      title: 'Bachelor of Science in Computer Science',
      bullets: [
        'MINOR: Cybersecurity Operations',
        'GPA: 3.83',
        "Palmetto Fellows Scholar, 1x President's List, 3x Dean's List, Honors College",
      ],
      tools:
        'DATA STRUCTURES & ALGORITHMS, SOFTWARE ENGINEERING, DATABASE SYSTEM DESIGN, COMPUTER ARCHITECTURE',
      tools2: 'SOFTWARE ENGINEERING, DATABASE SYSTEM DESIGN, COMPUTER ARCHITECTURE', //not used
    },
  ];

  return (
    <section id="education" className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <div className="tech-subtitle-wrapper">
            <span className="tech-line"></span>
            <span className="tech-subtitle">EDUCATION</span>
          </div>
          <h2 className="tech-title">
            ACADEMIC <span className="title-gray">BACKGROUND</span>
          </h2>
        </div>

        <div className="experience-stack">
          {experienceList.map((job) => (
            <div key={job.id} className="experience-card">
              <div className="exp-meta-col">
                <div className="meta-block">
                  <span className="meta-label">DURATION</span>
                  <span className="meta-value">{job.duration}</span>
                </div>
                <div className="meta-block">
                  <span className="meta-label">LOCATION</span>
                  <span className="meta-value">{job.location}</span>
                </div>
              </div>

              <div className="exp-details-col">
                <h3 className="exp-company">{job.company}</h3>
                <h4 className="exp-title">{job.title}</h4>

                <ul className="exp-bullets">
                  {job.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>

                <div className="exp-tools">
                  <span className="tools-label">COURSEWORK : </span>
                  <span className="tools-list">{job.tools}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
