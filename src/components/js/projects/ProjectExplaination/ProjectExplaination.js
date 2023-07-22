import React from "react";
import { projectExplainationItems } from "./ProjectExplainationItems";

export const ProjectExplaination = () => {
  return (
    <div className="about-container">
      <h1>Explication des projets</h1>
      <div className="about-me-container">
        {projectExplainationItems.map((item) => {
          return (
            <div className="left-about">
              <h3>{item.title}</h3>
              <p> {item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
