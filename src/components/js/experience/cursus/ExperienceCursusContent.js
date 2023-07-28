import React from "react";
import { useTranslation } from "react-i18next";

export const ExperienceCursusContent = (props) => {
  const { t } = useTranslation();
  const { theme, dDebut, dFin, title, schoolName, explaination, link } = props;
  return (
    <div
      className="experience-card"
      style={{ backgroundColor: theme.experienceCard }}
    >
      <div className="dates">
        <span> {dDebut} </span>-<span> {t(dFin)}</span>
      </div>
      <h2 className="experience-title">{t(title)}</h2>
      <div className="addresses">
        <p>{t(explaination)}</p>
        <p className="clic-underline">
          <a href={link}> {schoolName}</a>
        </p>
      </div>
    </div>
  );
};
