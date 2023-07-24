import React from "react";

import "../../css/CompetenceStyle.css";
import { ProgressBarCompetence } from "./progressBar/ProgressBarCompetence";
import { ProgressBarData } from "./progressBar/ProgressBarCompetenceData";

export const ExperienceCompetence = () => {
  return (
    <div className="experience-progress-container">
      <h1 className="project-heading">Mes compétences</h1>
      <div className="container">
        {ProgressBarData.map((val, index) => {
          return (
            <div className="column" key={index}>
              <img className="column-image" src={val.img} alt="Missing pic" />
              <div className="column-text">{val.title}</div>
              <ProgressBarCompetence percentage={val.percentage} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
