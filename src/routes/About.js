import React from "react";
import { PageHeader } from "../components/js/PageHeader";
import { AboutDescription } from "../components/js/about/AboutDescription/AboutDescription";
import { AboutHobys } from "../components/js/about/AboutHobys/AboutHobys";
import { NavBar } from "../components/js/navbar/NavBar";
import "../components/css/AboutMeStyle.css";
import { Footer } from "../components/js/footer/Footer";
import { AboutContent } from "../components/js/about/AboutContent";

export const About = (props) => {
  const { theme, onChangeLanguage } = props;
  return (
    <div>
      <NavBar theme={theme} onChangeLanguage={onChangeLanguage} />
      <PageHeader heading="KEY_ABOUT" text="KEY_ABOUT_INTRO" theme={theme} />
      <AboutDescription theme={theme} />
      <AboutContent theme={theme} />
      <AboutHobys theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};
