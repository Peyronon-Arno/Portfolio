import "../../css/HeroImageStyle.css";

import React from "react";
import LyonImg from "../../../assets/img_lyon.jpg";
import { Link } from "react-router-dom";
export const HomeDescription = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={LyonImg} alt="IntroImg" />
      </div>
      <div className="content">
        <h1> Je m'appelle Arno Peyronon </h1>
        <p>
          Je suis etudiant en licence professionnelle Métiers de l'Informatique,
          Application Web à l'IUT de Clermont-Ferrand (UCA)
        </p>
        <div>
          <Link to="/project" className="btn">
            Mes projets
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contactez-moi
          </Link>
        </div>
      </div>
    </div>
  );
};
