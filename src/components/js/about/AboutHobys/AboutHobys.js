import React from "react";
import "../../../css/AboutMeStyle.css";
import { aboutHobysItems } from "./AboutHobysItems";

export const AboutHobys = (props) => {
  const { theme } = props;

  return (
    <div
      className="about-container"
      style={{
        backgroundColor: theme.cardBlue,
        color: theme.text,
        marginTop: "1rem",
      }}
    >
      <h1>
        Lors de mon temps libre, je m'intéresse à d'autres domaines autre que
        l'informatique
      </h1>
      <div className="about-hobys-container">
        {aboutHobysItems.map((item, index) => {
          return (
            <div className="about-hobys-card" key={index}>
              <h3>{item.title}</h3>
              <div>{item.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
