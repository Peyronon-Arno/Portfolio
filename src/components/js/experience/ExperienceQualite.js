import React from "react";
import { ProgressBarQualiteData } from "./progressBar/ProgressBarQualiteData";
import { ProgressBarQualite } from "./progressBar/ProgressBarQualite";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export const ExperiencesQualite = ({ theme }) => {
  const { t } = useTranslation();
  return (
    <div
      className="experience-progress-container"
      style={{
        backgroundColor: theme.experienceCard,
      }}
    >
      <h1 className="project-heading">{t("KEY_MY_QUALITIES")}</h1>
      <div
        className="container"
        style={{
          backgroundColor: theme.experienceCard,
        }}
      >
        {ProgressBarQualiteData.map((val, index) => {
          return (
            <ProgressBarQualite
              key={index}
              title={val.title}
              percentage={val.percentage}
            />
          );
        })}
      </div>
    </div>
  );
};
