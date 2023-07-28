import React from "react";

import { ExperienceCursusContent } from "./ExperienceCursusContent";
import { experienceCursusData } from "./ExperienceCursusData";
import { useTranslation } from "react-i18next";

export const ExperienceCursus = (props) => {
  const { theme } = props;
  const { t } = useTranslation();
  return (
    <div
      style={{
        backgroundColor: theme.cardBlue,
        marginTop: "1rem",
        color: theme.text,
      }}
    >
      <h1 className="experience-heading">{t("KEY_MY_FORMATIONS")}</h1>
      <div className="experience-container">
        {experienceCursusData.map((val, index) => {
          return (
            <ExperienceCursusContent
              key={index}
              dDebut={val.dDebut}
              dFin={val.dFin}
              title={val.title}
              schoolName={val.schoolName}
              explaination={val.explaination}
              link={val.link}
              theme={theme}
            />
          );
        })}
      </div>
    </div>
  );
};
