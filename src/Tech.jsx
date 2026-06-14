import React from 'react';

const Tech = () => {
  const skills = [
    'Java',
    'SQL',
    'C#',
    'Kotlin',
    'C++',
    'React',
    'TypeScript',
    'JavaScript',
    'Node.js',
    '.NET',
    'HTML',
    'CSS',
    'Next.js',
    'MySQL',
    'Jira',
    'Git',
    'GitHub',
    'Unix/Linux',
    'Azure DevOps',
    'Figma',
    'Microsoft SQL Server',
    'Slack',
    'Microsoft Office',
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
