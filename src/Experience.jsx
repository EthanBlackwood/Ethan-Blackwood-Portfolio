import React from 'react';

const Experience = () => {
  const experienceList = [
    {
      id: 1,
      duration: "Aug 2025 — Dec 2025",
      location: "Columbia, SC",
      company: "TEACHING ASSISTANT",
      title: "UNIVERSITY OF SOUTH CAROLINA",
      bullets: [
        "Worked as a TA for Algorithmic Design, a course involving both defining and implementing various data structures.",
        "Led bi-weekly lab sessions, overseeing completion of the lab assignment to reinforce concepts from class.",
        "Conducted code reviews and guided students through the debugging processes to identify and resolve implementation errors."
      ],
      tools: "Java, Github, Data Structures"
    },
    {
      id: 2,
      duration: "Aug 2023 — June 2024",
      location: "Rock Hill, SC",
      company: "FRONTEND ENGINEERING INTERN",
      title: "INTERPIXEL STUDIOS",
      bullets: [
        "Worked on a front-end team to deliver scalable, SEO optimized web applications using Next.js and React.",
        "Optimized applications for mobile viewing and performed cross-device QA testing, making web applications responsive and accessible.",
        "Managed project tasks in Jira, and UI/UX design in Figma to support Agile development cycles."
      ],
      tools: "React.js, Next.js, CSS, HTML, Jira, Figma"
    },
    {
      id: 3,
      duration: "Aug 2023 — May 2024",
      location: "Fort Mill, SC",
      company: "IT TECHNICAL SUPPORT ASSISTANT",
      title: "ST. ANNE CATHOLIC SCHOOL",
      bullets: [
        "Provided day-to-day tech support for faculty/students, troubleshooting problems on MacBooks, iPads, projectors, and printers, minimizing classroom downtime.",
        "Administered user accounts in Google Admin Console and RenWeb, resolving access and authorization issues to maintain system availability.",
        "Enrolled new devices on Mosyle MDM at both middle and high school campuses, enabling secure, remote device management. "
      ],
      tools: "Mosyle MDM, macOS, Google Admin Console, RenWeb"
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        
        <div className="experience-header">
          <div className="tech-subtitle-wrapper">
            <span className="tech-line"></span>
            <span className="tech-subtitle">EXPERIENCE</span>
          </div>
          <h2 className="tech-title">
            Work <span className="title-gray">& Impact</span>
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
                  <span className="tools-label">TOOLS : </span>
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

export default Experience;