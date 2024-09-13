"use client";
import React, { useEffect, useState } from "react";
import SidebarItems from "./SidebarItems";
import { PROJECTS } from "./projects";
import ProjectCard from "../_components/molecules/ProjectCard";

const Projects = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);

  useEffect(() => {
    if (tags.length !== 0) {
      let set = new Set();
      for (let t = 0; t < tags.length; t++) {
        for (let i = 0; i < PROJECTS.length; i++) {
          if (PROJECTS[i].tech.includes(tags[t])) {
            set.add(PROJECTS[i]);
          }
        }
      }
      const filtered = Array.from(set);
      setFilteredProjects(filtered);
    } else if (tags.length === 0) {
      setFilteredProjects(PROJECTS);
    }
  }, [tags]);

  return (
    <div className="projects__container">
      <SidebarItems tags={tags} setTags={setTags} />
      <div className="projects__content">
        <h3 className="projects__title">Projects</h3>
        <div className="projects__cards">
          {filteredProjects.map((project) => {
            return <ProjectCard key={project.id} data={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
