import React from "react";
import "../../../css/ExperienceProStyle.css";

export const ExperienceProContent = (props) => {
  const { theme, dDebut, dFin, title, entreprise, addr1 } = props;
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
        <p> {entreprise} </p>
        <p> {addr1}</p>
      </div>
    </div>
  );
};
