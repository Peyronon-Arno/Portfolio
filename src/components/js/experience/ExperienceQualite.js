import React from "react";
import { ProgressBarQualiteData } from "./progressBar/ProgressBarQualiteData";
import ProgressBarQualite from "./progressBar/ProgressBarQualite";

export const ExperiencesQualite = () => {
  return (
    <div className="competence-container">
      <h1 className="project-heading">Mes qualités</h1>
      <div className="container">
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
