import React from "react";
import SidebarItems from "./SidebarItems";
import { PROJECTS } from "./projects";
import ProjectCard from "../_components/molecules/ProjectCard";

const Projects = () => {
  return (
    <div className="projects__container">
      <SidebarItems />
      <div className="projects__content">
        <h3 className="projects__title">Projects</h3>
        <div className="projects__cards">
          {PROJECTS.map((project) => {
            return <ProjectCard key={project.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
