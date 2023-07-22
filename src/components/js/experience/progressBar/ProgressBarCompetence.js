import React from "react";
import "../../../css/ProgressBarStyle.css";
const ProgressBarCompetence = (props) => {
  return (
    <div className="skill-box">
      <div className="logo-block">
        <img src={props.img} alt="Missing pic" />
        <span className="title">{props.title}</span>
        <div className="skill-bar">
          <span className="skill-per" style={{ width: props.percentage }}>
            <span className="tooltip"> {props.percentage}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarCompetence;
