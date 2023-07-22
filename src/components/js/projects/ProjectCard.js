import "../../css/WorkCardStyle.css";

import React from "react";
export const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="img" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <a className="btn" href={props.view}>
            Voir en détail
          </a>
        </div>
      </div>
    </div>
  );
};
