import "../../css/ProjectCardStyle.css";

import React from "react";
import { useTranslation } from "react-i18next";

export const ProjectCard = (props) => {
  const { theme, imgsrc, title, text, view } = props;
  const { t } = useTranslation();
  return (
    <div className="project-card">
      <img src={imgsrc} alt="Not found" />
      <h2 className="project-title" style={{ color: theme.text }}>
        {title}
      </h2>
      <div className="project-details" style={{ color: theme.text }}>
        <p>{t(text)}</p>
      </div>
      <div className="project-card-see-detail">
        <a className="btn btn-primary projet-card-btn" href={view}>
          {t("KEY_SEE_IN_DETAIL")}
        </a>
      </div>
    </div>
  );
};
