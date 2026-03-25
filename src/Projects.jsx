import React from 'react';
import placeholderImg from './assets/WebIcon.png';
import jobTrackerCover from './assets/JobTrackerCoverPhoto.png';
import pokemonCover from './assets/PokemonCoverPhoto.png';

const Projects = () => {
   
  const projectList = [
    {
      id: 1,
      category: "DEVELOPMENT",
      title: "Pokémon Battle Simulator",
      description: "Interactive web-based battle simulator built using React and JavaScript.",
      image: placeholderImg
    },
    {
      id: 2,
      category: "VISUAL DESIGN",
      title: "Placeholder 2",
      description: "Tracks status of job applications over your application cycle.",
      image: placeholderImg
    },
    {
      id: 3,
      category: "DEVELOPMENT",
      title: "Placeholder 3",
      description: "Tracks status of job applications over your application cycle.",
      image: placeholderImg
    },
    {
      id: 4,
      category: "DEVELOPMENT",
      title: "Placeholder 4",
      description: "Tracks status of job applications over your application cycle.",
      image: placeholderImg
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        
        <div className="projects-header">
          <div className="tech-subtitle-wrapper">
            <span className="tech-line"></span>
            <span className="tech-subtitle">PROJECTS</span>
          </div>
          <h2 className="tech-title">
            Featured <span className="title-gray">Works</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projectList.map((project) => (
            <a href={`#${project.id}`} key={project.id} className="project-card">
              
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>
              
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;