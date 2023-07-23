import React from "react";
import { HomeDescription } from "../components/js/home/HomeDescription";
import { ProjectContent } from "../components/js/projects/ProjectContent";
import { AboutDescription } from "../components/js/about/AboutDescription";
import { Link } from "react-router-dom";
import { NavBar } from "../components/js/navbar/NavBar";
import { Footer } from "../components/js/footer/Footer";

export const Home = (props) => {
  const { theme } = props;
  return (
    <div className="main">
      <NavBar theme={theme} />
      <HomeDescription />
      <AboutDescription />
      <ProjectContent />
      <div className="btn-home">
        <Link to="/project" className="btn">
          En savoir plus
        </Link>
      </div>
      <Footer />
    </div>
  );
};
