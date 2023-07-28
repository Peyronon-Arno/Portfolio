import React from "react";
import "../../../css/AboutMeStyle.css";
import { aboutHobysItems } from "./AboutHobysItems";
import { useTranslation } from "react-i18next";

export const AboutHobys = (props) => {
  const { theme } = props;
  const { t } = useTranslation();

  return (
    <div
      className="about-container"
      style={{
        backgroundColor: theme.cardBlue,
        color: theme.text,
        marginTop: "1rem",
      }}
    >
      <h1>{t("KEY_ABOUT_HOBY_TITLE")}</h1>
      <div className="about-hobys-container">
        {aboutHobysItems.map((item, index) => {
          return (
            <div
              className="about-hobys-card"
              style={{ backgroundColor: theme.experienceCard }}
              key={index}
            >
              <h3> {t(item.title)}</h3>
              <div>{t(item.description)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
