import React from "react";
import { Link } from "react-router-dom";
import "../../../css/AboutContentStyle.css";
import { aboutDescriptionData } from "./AboutDescriptionData";

export const AboutDescription = (props) => {
  const { theme } = props;
  return (
    <div className="about" style={{ backgroundColor: theme.cardBlue }}>
      <div className="left" style={{ color: theme.text }}>
        <h1>À propos de moi</h1>
        {aboutDescriptionData.map((paragraphe) => {
          return <p>{paragraphe.content}</p>;
        })}

        <div className="about-btn">
          <Link to="/about">
            <button className="btn btn-secondary">En savoir plus</button>
          </Link>
          <Link to="/project">
            <button className="btn btn-secondary">Voir mes projets</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
