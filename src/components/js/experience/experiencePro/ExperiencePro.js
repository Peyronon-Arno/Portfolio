import React from "react";
import { ExperienceProContent } from "./ExperienceProContent";
import { ExperienceProData } from "./ExperienceProData";

export const ExperiencePro = () => {
  return (
    <div>
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
            />
          );
        })}
      </div>
    </div>
  );
};
