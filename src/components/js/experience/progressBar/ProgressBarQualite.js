import React from "react";
import "../../../css/ProgressBarStyle.css";
import { useTranslation } from "react-i18next";
export const ProgressBarQualite = (props) => {
  const { title, percentage } = props;
  const { t } = useTranslation();
  return (
    <div className="skill-box">
      <span className="title">{t(title)}</span>
      <div className="skill-bar">
        <span className="skill-per" style={{ width: percentage }}>
          <span className="tooltip"> {percentage}</span>
        </span>
      </div>
    </div>
  );
};
