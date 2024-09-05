import { Demo } from "@/app/_assets";
import { GithubIcon } from "@/app/icons";
import Image from "next/image";
import React from "react";

const ProjectCard = () => {
  return (
    <div className="project__card">
      <Image
        src={Demo}
        alt="project-card"
        className="project__card-img"
        width={300}
        height={130}
      />
      <div className="project__card-content">
        <div>Lorem ipsum dolor sit amet, consectetur</div>
        <div className="project__card-btns">
          <button className="btn btn-tertiary text-xs">view-project</button>
          <button className="btn project__card-btn-git text-sm">
            <Image src={GithubIcon} alt="github" width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
