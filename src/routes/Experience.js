import React from "react";
import { ExperienceCursus } from "../components/js/experience/cursus/ExperienceCursus";
import { PageHeader } from "../components/js/PageHeader";
import "./routeStyle.css";
import { NavBar } from "../components/js/navbar/NavBar";
import { ExperiencePro } from "../components/js/experience/experiencePro/ExperiencePro";
import { ExperienceCompetence } from "../components/js/experience/ExperienceCompetence";
import { ExperiencesQualite } from "../components/js/experience/ExperienceQualite";
import { Footer } from "../components/js/footer/Footer";

export const Experience = (props) => {
  const { theme } = props;
  return (
    <div>
      <NavBar theme={theme} />
      <PageHeader
        heading="Mes expériences"
        text="Voic mes compétences, mes qualités ainsi que des expériences profesionnelles que j'ai pu réaliser"
        theme={theme}
      />
      <div
        className="experience"
        style={{ backgroundColor: theme.cardBlue, color: theme.text }}
      >
        <ExperienceCompetence theme={theme} />
        <ExperiencesQualite theme={theme} />
      </div>
      <ExperiencePro theme={theme} />
      <ExperienceCursus theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};
