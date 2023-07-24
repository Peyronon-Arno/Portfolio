import React from "react";
import { ProgressBarQualiteData } from "./progressBar/ProgressBarQualiteData";
import { ProgressBarQualite } from "./progressBar/ProgressBarQualite";

export const ExperiencesQualite = ({ theme }) => {
  return (
    <div
      className="experience-progress-container"
      style={{
        backgroundColor: theme.experienceCard,
      }}
    >
      <h1 className="project-heading">Mes qualités</h1>
      <div
        className="container"
        style={{
          backgroundColor: theme.experienceCard,
        }}
      >
        {ProgressBarQualiteData.map((val, index) => {
          return (
            <ProgressBarQualite
              key={index}
              title={val.title}
              percentage={val.percentage}
            />
          );
        })}
      </div>
    </div>
  );
};
