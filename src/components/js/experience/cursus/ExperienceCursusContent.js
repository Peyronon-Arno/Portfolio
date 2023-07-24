import React from "react";

export const ExperienceCursusContent = (props) => {
  const { theme, dDebut, dFin, title, schoolName, explaination, link } = props;
  return (
    <div
      className="experience-card"
      style={{ backgroundColor: theme.experienceCard }}
    >
      <div className="dates">
        <span> {dDebut} </span>-<span> {dFin}</span>
      </div>
      <h2 className="experience-title">{title}</h2>
      <div className="addresses">
        <p>{explaination}</p>
        <p className="clic-underline">
          <a href={link}> {schoolName}</a>
        </p>
      </div>
    </div>
  );
};
