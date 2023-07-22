import React from "react";
import "../../../css/ExperienceProStyle.css";

export const ExperienceProContent = (props) => {
  return (
    <div className="experience-card">
      <div className="dates">
        <span> {props.dDebut} </span>-<span> {props.dFin}</span>
      </div>
      <h2 className="experience-title">{props.title}</h2>
      <div className="addresses">
        <p> {props.entreprise} </p>
        <p> {props.addr1}</p>
      </div>
    </div>
  );
};
