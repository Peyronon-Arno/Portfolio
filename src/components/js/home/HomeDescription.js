import "../../css/HomeStyle.css";

import React from "react";
import { Link } from "react-router-dom";
export const HomeDescription = (props) => {
  const { theme } = props;
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
        <h1 style={{ color: theme.text }}> Je m'appelle Arno Peyronon </h1>
        <p style={{ color: theme.text }}>
          Je suis etudiant en licence professionnelle Métiers de l'Informatique,
          Application Web à l'IUT de Clermont-Ferrand (UCA)
        </p>
        <div className="home-btn">
          <Link to="/project" className="btn btn-secondary">
            Mes projets
          </Link>
          <Link to="/contact" className="btn btn-primary">
            Contactez-moi
          </Link>
        </div>
      </div>
    </div>
  );
};
