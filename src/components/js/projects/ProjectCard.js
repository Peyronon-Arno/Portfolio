import "../../css/ProjectCardStyle.css";

import React from "react";
export const ProjectCard = (props) => {
  const { theme, imgsrc, title, text, view } = props;
  return (
    <div className="project-card">
      <img src={imgsrc} alt="img" />
      <h2 className="project-title" style={{ color: theme.text }}>
        {title}
      </h2>
      <div className="project-details" style={{ color: theme.text }}>
        <p>{text}</p>
        <div className="pro-btns"></div>
      </div>
      <div className="project-card-see-detail">
        <a className="btn btn-primary projet-card-btn" href={view}>
          Voir en détail
        </a>
      </div>
    </div>
  );
};
