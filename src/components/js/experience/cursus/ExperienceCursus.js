import React from "react";

import { ExperienceCursusContent } from "./ExperienceCursusContent";
import { experienceCursusData } from "./ExperienceCursusData";

export const ExperienceCursus = () => {
  return (
    <div>
      <h1 className="experience-heading">Mes formations</h1>
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
            />
          );
        })}
      </div>
    </div>
  );
};
