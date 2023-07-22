import React from "react";
import "./index.css";
import { Home } from "./routes/Home";
import { Contact } from "./routes/Contact";
import { Project } from "./routes/Project";
import { Experience } from "./routes/Experience";
import About from "./routes/About";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
};