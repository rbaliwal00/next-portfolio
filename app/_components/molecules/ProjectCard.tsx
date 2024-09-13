import { Demo } from "@/app/_assets";
import { GithubIcon } from "@/app/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProjectProps = {
  id: number;
  name: string;
  description: string;
  tech: string[];
  git: string;
  link: string;
  year: string;
  image: string;
};

const ProjectCard = ({ data }: ProjectProps) => {
  return (
    <div>
      <div className="project__card__title">{data.name}</div>
      <div className="project__card">
        <Image
          src={data.image}
          alt="project-card"
          className="project__card-img"
          width={300}
          height={130}
        />
        <div className="project__card-content">
          <div>{data.description}</div>
          <div className="project__card-btns">
            {data.link && (
              <Link href={data.link} target="blank">
                <button className="btn btn-tertiary text-xs">
                  view-project
                </button>
              </Link>
            )}
            <button className="btn project__card-btn-git text-sm">
              <Image src={GithubIcon} alt="github" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
