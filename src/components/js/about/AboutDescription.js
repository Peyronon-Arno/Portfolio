import React from "react";
import { Link } from "react-router-dom";
import "../../css/AboutContentStyle.css";

export const AboutDescription = () => {
  return (
    <div className="about bg-primary">
      <div className="left">
        <h1>À propos de moi</h1>
        <p>
          Durant mes études, j'ai concrétisé des projets allant de la création
          d'une Intelligence Artificielle à la réalisation de site web.
        </p>
        <p>
          Étant curieux et investi de nature, je suis un étudiant souhaitant
          explorer de nombreux domaines dans l'informatique en général.
        </p>
        <p>
          En dehors de mes études, je développe une application mobile qui devra
          être disponible sur Android et IOS pour un chorégraphe professionnel.
        </p>
        <p>
          Je développe également un site vitrine pour une photographe
          professionnelle en utilisant les technologies simples du web.
        </p>
        <p>
          À la fin de ma licence professionnelle, je souhaite m'orienter vers un
          Master Informatique Web à l'université de Lyon 1.
        </p>
        <div className="group-btn">
          <Link to="/about">
            <button className="btn">En savoir plus</button>
          </Link>
          <Link to="/project">
            <button className="btn">Voir mes projets</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
