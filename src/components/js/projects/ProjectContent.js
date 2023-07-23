import "../../css/ProjectCardStyle.css";
import { projectCardData } from "./ProjectCardData";
import React from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectContent = (props) => {
  const { theme } = props;
  return (
    <div style={{ backgroundColor: theme.cardGrey }}>
      <h1 className="project-heading" style={{ color: theme.text }}>
        Mes projets
      </h1>
      <div className="project-container">
        {projectCardData.map((val, index) => {
          return (
            <ProjectCard
              key={index}
              theme={theme}
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
