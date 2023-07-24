import React from "react";
import { projectExplainationItems } from "./ProjectExplainationItems";

export const ProjectExplaination = (props) => {
  const { theme } = props;
  return (
    <div
      className="about-container"
      style={{
        backgroundColor: theme.cardBlue,
        color: theme.text,
        marginTop: "1rem",
      }}
    >
      <h1>Explication des projets</h1>
      <div className="about-me-container">
        <div className="card-container">
          {projectExplainationItems.map((item, index) => (
            <div
              className="card"
              key={index}
              style={{
                backgroundColor: theme.experienceCard,
                color: theme.text,
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
