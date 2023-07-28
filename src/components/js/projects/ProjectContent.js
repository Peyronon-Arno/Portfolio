import "../../css/ProjectCardStyle.css";
import { projectCardData } from "./ProjectCardData";
import React from "react";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "react-i18next";

export const ProjectContent = (props) => {
  const { theme } = props;
  const { t } = useTranslation();
  return (
    <div style={{ backgroundColor: theme.cardGrey, marginTop: "1rem" }}>
      <h1 className="project-heading" style={{ color: theme.text }}>
        {t("KEY_MY_PROJECTS")}
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
