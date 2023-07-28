import React from "react";
import { HomeDescription } from "../components/js/home/HomeDescription";
import { ProjectContent } from "../components/js/projects/ProjectContent";
import { AboutDescription } from "../components/js/about/AboutDescription/AboutDescription";
import { NavBar } from "../components/js/navbar/NavBar";
import { Footer } from "../components/js/footer/Footer";

export const Home = (props) => {
  const { theme, onChangeLanguage } = props;
  return (
    <div>
      <NavBar theme={theme} onChangeLanguage={onChangeLanguage} />
      <HomeDescription theme={theme} />
      <AboutDescription theme={theme} />
      <ProjectContent theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};
