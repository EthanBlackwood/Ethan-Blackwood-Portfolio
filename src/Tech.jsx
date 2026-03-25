import React from 'react';

const Tech = () => {
  const skills = [
    'React.js', 'Java', 'C++', 'Python', 'JavaScript', 'TypeScript', 
    'HTML', 'CSS', 'SQL', 'Node.js', 'Figma', 'Jira', 
    'WordPress', 'Next.js', 'Slack', 'Git', 'Microsoft Office', 'Github', 'MySQL', 
    'Google Admin Console', 'Mosyle MDM', 'Unix/Linux'
  ];

  return (
    <section id="skills" className="tech-section">
      <div className="tech-container">
        
        <div className="tech-header">
          <div className="tech-subtitle-wrapper">
            <span className="tech-line"></span>
            <span className="tech-subtitle">SKILLS</span>
          </div>
          <h2 className="tech-title">
            Tech <span className="title-gray">Stack</span>
          </h2>
        </div>

        <div className="tech-pill-container">
          {skills.map((skill, index) => (
            <div key={index} className="tech-pill">
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Tech;