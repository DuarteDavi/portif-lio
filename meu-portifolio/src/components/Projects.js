import React from "react";
import "../global.css";

import inspmaq from "../assets/inspmaq.png";
import cenagrijr from "../assets/cenagrijr.png";
import creative from "../assets/creative.png";
import repense from "../assets/repense.png";

const projectsData = [
  {
    id: 1,
    title: "Inspmaq",
    description: "Construção do site + SEO.",
    image: inspmaq,
    link: "https://www.inspmaq.com.br/",
  },
  {
    id: 2,
    title: "Cenagri Jr",
    description: "Otimização para mecanismos de busca (SEO).",
    image: cenagrijr,
    link: "https://www.cenagri.com.br/",
  },
  {
    id: 3,
    title: "Creative",
    description: "Manutenção e otimização para SEO.",
    image: creative,
    link: "https://creativeplacas.com/",
  },
  {
    id: 4,
    title: "Repense Dashboard",
    description: "Dashboard desenvolvido em Node.js.",
    image: repense,
    link: "https://repenseecomachine.com/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              Ir para o site
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
