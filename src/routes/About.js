import React from "react";
import { PageHeader } from "../components/js/PageHeader";
import { AboutDescription } from "../components/js/about/AboutDescription";
import { AboutHobys } from "../components/js/about/AboutHobys/AboutHobys";
import { NavBar } from "../components/js/navbar/NavBar";
import "../components/css/AboutMeStyle.css";
import { AboutContact } from "../components/js/about/AboutContact";
import { AboutHistory } from "../components/js/about/AboutHistory";
import { Footer } from "../components/js/footer/Footer";

export const About = (props) => {
  const { theme } = props;
  return (
    <div>
      <NavBar theme={theme} />
      <PageHeader
        heading="À propos"
        text="Je suis etudiant en licence professionnelle Métiers de l'Informatique, Application Web à l'IUT de Clermont-Ferrand (UCA)"
      />
      <AboutDescription />
      <div className="about-container bg-dark">
        <h1>
          Passionné d'informatique depuis mon enfance, je m'intéresse à
          différents domaines divers et variés
        </h1>
        <div className="about-me-container">
          <AboutContact />
          <AboutHistory />
        </div>
      </div>
      <AboutHobys />
      <Footer />
    </div>
  );
};
