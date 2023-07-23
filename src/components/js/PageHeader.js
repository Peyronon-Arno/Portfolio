import "../css/PageHeaderStyle.css";

import React from "react";

export const PageHeader = (props) => {
  const { theme, heading, text } = props;
  return (
    <div className="img">
      <div className="heading" style={{ color: theme.text }}>
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};
