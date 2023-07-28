import React from "react";
import { PageHeader } from "../components/js/PageHeader";
import { ProjectContent } from "../components/js/projects/ProjectContent";
import { ProjectExplaination } from "../components/js/projects/ProjectExplaination/ProjectExplaination";
import { NavBar } from "../components/js/navbar/NavBar";
import { Footer } from "../components/js/footer/Footer";

export const Project = (props) => {
  const { theme, onChangeLanguage } = props;
  return (
    <div>
      <NavBar theme={theme} onChangeLanguage={onChangeLanguage} />
      <PageHeader
        heading="KEY_PROJECTS"
        text="KEY_PROJECT_TITLE"
        theme={theme}
      />
      <ProjectContent theme={theme} />
      <ProjectExplaination theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};
