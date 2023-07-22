import React from "react";
import "../../../css/ProgressBarStyle.css";
const ProgressBarQualite = (props) => {
  return (
    <div className="skill-box">
      <span className="title">{props.title}</span>
      <div className="skill-bar">
        <span className="skill-per" style={{ width: props.percentage }}>
          <span className="tooltip"> {props.percentage}</span>
        </span>
      </div>
    </div>
  );
};

export default ProgressBarQualite;
