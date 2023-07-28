import React from "react";
import { ExperienceProContent } from "./ExperienceProContent";
import { ExperienceProData } from "./ExperienceProData";
import { useTranslation } from "react-i18next";

export const ExperiencePro = (props) => {
  const { theme } = props;
  const { t } = useTranslation();
  return (
    <div
      style={{
        backgroundColor: theme.cardGrey,
        marginTop: "1rem",
        color: theme.text,
      }}
    >
      <h1 className="experience-heading">{t("KEY_EXPERIENCES_PRO_TITLE")}</h1>
      <div className="experience-container">
        {ExperienceProData.map((val, index) => {
          return (
            <ExperienceProContent
              key={index}
              dDebut={val.dDebut}
              dFin={val.dFin}
              title={val.title}
              addr1={val.addr1}
              entreprise={val.entreprise}
              theme={theme}
            />
          );
        })}
      </div>
    </div>
  );
};
