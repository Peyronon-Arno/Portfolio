import React from "react";

export const ExperienceCursusContent = (props) => {
  return (
    <div className="experience-card">
      <div className="dates">
        <span> {props.dDebut} </span>-<span> {props.dFin}</span>
      </div>
      <h2 className="experience-title">{props.title}</h2>
      <div className="addresses">
        <p>{props.explaination}</p>
        <p className="clic-underline">
          <a href={props.link}> {props.schoolName}</a>
        </p>
      </div>
    </div>
  );
};
