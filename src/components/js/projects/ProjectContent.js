import "../../css/WorkCardStyle.css";
import { ProjectCardData } from "./ProjectCardData";
import React from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectContent = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Mes projets</h1>
      <div className="project-container">
        {ProjectCardData.map((val, index) => {
          return (
            <ProjectCard
              key={index}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};
