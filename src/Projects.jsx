import React from 'react';
//import placeholderImg from './assets/WebIcon.png';
import jobTrackerCover from './assets/JobAppProjectCoverPhoto.png';
import pokemonCover from './assets/PokemonProjectCoverPhoto.png';
import portfolioCover from './assets/EngineeringPortfolioCoverPhoto.png';
//import jobAppDetail from './assets/JobAppProjectDetailPhoto.png';
//import pokemonDetail from './assets/PokemonProjectDetailPhoto.png';
//import portfolioDetail from './assets/EngineeringPortfolioDetailPhoto.png';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      category: 'DESIGN + DEVOPS',
      title: 'Engineering Portfolio',
      description: 'This very website. Personally designed, built, and deployed.',
      image: portfolioCover,
      github: 'https://github.com/EthanBlackwood/Ethan-Blackwood-Portfolio',
    },
    {
      id: 2,
      category: 'DEVELOPMENT',
      title: 'Pokemon Battle Simulator',
      description: '6v6 turn-based Android application built with Kotlin and the Android SDK',
      image: pokemonCover,
      github: 'https://github.com/EthanBlackwood/PokemonBattleSimulator',
    },
    {
      id: 3,
      category: 'DEVELOPMENT',
      title: 'Job Application Manager',
      description: 'Track the status of internship applications during peak recruitment season.',
      image: jobTrackerCover,
      github: 'https://github.com/EthanBlackwood/JobApplicationManager',
    },
    /*{
      id: 4,
      category: 'DEVELOPMENT',
      title: 'Placeholder 4',
      description: 'Tracks status of job applications over your application cycle.',
      image: placeholderImg,
    },*/
  ];

  return (
    <section id="portfolio" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <div className="tech-subtitle-wrapper">
            <span className="tech-line"></span>
            <span className="tech-subtitle">PORTFOLIO</span>
          </div>
          <h2 className="tech-title">
            Featured <span className="title-gray">Works</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projectList.map((project) => (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              className="project-card"
            >
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
