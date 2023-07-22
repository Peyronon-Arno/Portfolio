import React from "react";

import "../../css/CompetenceStyle.css";
import ProgressBarCompetence from "./progressBar/ProgressBarCompetence";
import { ProgressBarData } from "./progressBar/ProgressBarCompetenceData";

export const ExperienceCompetence = () => {
  return (
    <div className="competence-container">
      <h1 className="project-heading">Mes compétences</h1>
      <div className="container">
        {ProgressBarData.map((val, index) => {
          return (
            <ProgressBarCompetence
              key={index}
              title={val.title}
              percentage={val.percentage}
              img={val.img}
            />
          );
        })}
      </div>
    </div>
  );
};
