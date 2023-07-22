import React from "react";
import { PageHeader } from "../components/js/PageHeader";
import { ProjectContent } from "../components/js/projects/ProjectContent";
import { ProjectExplaination } from "../components/js/projects/ProjectExplaination/ProjectExplaination";
import { NavBar } from "../components/js/navbar/NavBar";
import { Footer } from "../components/js/footer/Footer";

export const Project = () => {
  return (
    <div>
      <NavBar />
      <PageHeader
        heading="PROJETS"
        text="Voici quelques projets que j'ai réalisé lors de mon cursus"
      />
      <ProjectContent />
      <ProjectExplaination />
      <Footer />
    </div>
  );
};
