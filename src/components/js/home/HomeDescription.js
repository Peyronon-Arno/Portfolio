import "../../css/HomeStyle.css";

import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export const HomeDescription = (props) => {
  const { theme } = props;
  const { t } = useTranslation();

  return (
    <div className="home">
      <div className="home-image">
        <img
          className="img-content"
          src={require("../../../assets/img_lyon.jpg")}
          alt="IntroImg"
        />
      </div>
      <div className="content">
        <h1 style={{ color: theme.text }}> {t("KEY_MY_NAME_IS_FULL_NAME")} </h1>
        <p style={{ color: theme.text }}>{t("KEY_HOME_INTRO")}</p>
        <div className="home-btn">
          <Link to="/project" className="btn btn-secondary">
            {t("KEY_MY_PROJECTS")}
          </Link>
          <Link to="/contact" className="btn btn-primary">
            {t("KEY_CONTACT_ME")}
          </Link>
        </div>
      </div>
    </div>
  );
};
