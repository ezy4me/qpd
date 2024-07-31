import React from "react";

const projects = [
  {
    id: 1,
    image: "/images/project-1.jfif",
    tags: ["WEB", "IT"],
    time: "8 недель",
  },
  {
    id: 2,
    image: "/images/project-2.jfif",
    tags: ["DESIGN", "UX"],
    time: "6 недель",
  },
  {
    id: 3,
    image: "/images/project-3.jfif",
    tags: ["APP", "DEV"],
    time: "10 недель",
  },
  {
    id: 4,
    image: "/images/project-4.jfif",
    tags: ["SEO", "MARKETING"],
    time: "5 недель",
  },
  {
    id: 5,
    image: "/images/project-5.jfif",
    tags: ["BRANDING", "STRATEGY"],
    time: "12 недель",
  },
];

export const ProjectsGrid = () => {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <div
          key={project.id}
          className="project"
          style={{ backgroundImage: `url(${project.image})` }}>
          <div className="project-info">
            <div className="project-info__tags">
              {project.tags.map((tag) => (
                <div key={tag} className="tag">
                  {tag}
                </div>
              ))}
            </div>
            <div className="project-info__actions">
              <p className="project-time">{project.time}</p>
              <button className="button button--outlined">Смотреть</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
