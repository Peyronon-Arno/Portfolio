import React from "react";
import "../../../css/AboutMeStyle.css";
import { aboutHobysItems } from "./AboutHobysItems";

export const AboutHobys = () => {
  return (
    <div className="about-container">
      <h1>
        Lors de mon temps libre, je m'intéresse à d'autres domaines autre que
        l'informatique
      </h1>
      <div className="about-me-container">
        {aboutHobysItems.map((item) => {
          return (
            <div className="left-about">
              <h3>{item.title}</h3>
              <div>{item.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
