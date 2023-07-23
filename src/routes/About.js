import React from "react";
import { PageHeader } from "../components/js/PageHeader";
import { AboutDescription } from "../components/js/about/AboutDescription/AboutDescription";
import { AboutHobys } from "../components/js/about/AboutHobys/AboutHobys";
import { NavBar } from "../components/js/navbar/NavBar";
import "../components/css/AboutMeStyle.css";
import { Footer } from "../components/js/footer/Footer";
import { AboutContent } from "../components/js/about/AboutContent";

export const About = (props) => {
  const { theme } = props;
  return (
    <div>
      <NavBar theme={theme} />
      <PageHeader
        heading="À propos"
        text="Je suis etudiant en licence professionnelle Métiers de l'Informatique, Application Web à l'IUT de Clermont-Ferrand (UCA)"
        theme={theme}
      />
      <AboutDescription theme={theme} />
      <AboutContent theme={theme} />
      <AboutHobys theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};
