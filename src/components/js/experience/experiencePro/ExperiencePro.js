import React from "react";
import { ExperienceProContent } from "./ExperienceProContent";
import { ExperienceProData } from "./ExperienceProData";

export const ExperiencePro = (props) => {
  const { theme } = props;
  return (
    <div
      style={{
        backgroundColor: theme.cardGrey,
        marginTop: "1rem",
        color: theme.text,
      }}
    >
      <h1 className="experience-heading">Mes expériences professionnelles</h1>
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
