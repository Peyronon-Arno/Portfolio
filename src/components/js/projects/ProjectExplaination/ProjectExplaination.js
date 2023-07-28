import React from "react";
import { projectExplainationItems } from "./ProjectExplainationItems";
import { useTranslation } from "react-i18next";

export const ProjectExplaination = (props) => {
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
      <h1>{t("KEY_EXPLAINATION_PROJECT")}</h1>
      <div className="about-me-container">
        <div className="card-container">
          {projectExplainationItems.map((item, index) => (
            <div
              className="card"
              key={index}
              style={{
                backgroundColor: theme.experienceCard,
                color: theme.text,
              }}
            >
              <h3>{item.title}</h3>
              <p>{t(item.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
