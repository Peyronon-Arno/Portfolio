import React from "react";
import "../../../css/ExperienceProStyle.css";
import { useTranslation } from "react-i18next";

export const ExperienceProContent = (props) => {
  const { theme, dDebut, dFin, title, entreprise, addr1 } = props;
  const { t } = useTranslation();
  return (
    <div
      className="experience-card"
      style={{ backgroundColor: theme.experienceCard }}
    >
      <div className="dates">
        <span> {t(dDebut)} </span>-<span> {t(dFin)}</span>
      </div>
      <h2 className="experience-title">{t(title)}</h2>
      <div className="addresses">
        <p> {entreprise} </p>
        <p> {addr1}</p>
      </div>
    </div>
  );
};
