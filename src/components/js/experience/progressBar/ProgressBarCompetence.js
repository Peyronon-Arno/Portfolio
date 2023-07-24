import React from "react";
import "../../../css/ProgressBarStyle.css";
export const ProgressBarCompetence = (props) => {
  return (
    <div className="skill-box">
      <div className="logo-block">
        <div className="skill-bar">
          <span className="skill-per" style={{ width: props.percentage }}>
            <span className="tooltip"> {props.percentage}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
