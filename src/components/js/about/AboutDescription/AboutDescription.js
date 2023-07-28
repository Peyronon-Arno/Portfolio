import React from "react";
import { Link } from "react-router-dom";
import "../../../css/AboutContentStyle.css";
import { aboutDescriptionData } from "./AboutDescriptionData";
import { useTranslation } from "react-i18next";

export const AboutDescription = (props) => {
  const { theme } = props;
  const { t } = useTranslation();

  return (
    <div className="about" style={{ backgroundColor: theme.cardBlue }}>
      <div className="left" style={{ color: theme.text }}>
        <h1>{t("KEY_ABOUT_ME")}</h1>
        {aboutDescriptionData.map((paragraphe) => {
          return <p>{t(paragraphe.content)}</p>;
        })}

        <div className="about-btn">
          <Link to="/about">
            <button className="btn btn-secondary">{t("KEY_KNOW_MORE")}</button>
          </Link>
          <Link to="/project">
            <button className="btn btn-secondary">
              {t("KEY_SEE_MY_PROJECTS")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
