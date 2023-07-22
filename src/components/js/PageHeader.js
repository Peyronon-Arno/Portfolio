import "../css/PageHeaderStyle.css";

import React from "react";

export const PageHeader = (props) => {
  return (
    <div className="img">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};
