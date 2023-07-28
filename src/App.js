import React, { useState } from "react";
import "./index.css";
import { Home } from "./routes/Home";
import { Contact } from "./routes/Contact";
import { Project } from "./routes/Project";
import { Experience } from "./routes/Experience";
import { About } from "./routes/About";
import { Routes, Route } from "react-router-dom";
import { darkTheme, lightTheme } from "./theme/theme";
import { useTranslation } from "react-i18next";

export const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [defineTheme, setDefineTheme] = useState(true);
  const theme = defineTheme ? lightTheme : darkTheme;

  const onChangeTheme = () => setDefineTheme(!defineTheme);

  const { i18n } = useTranslation();

  const onChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home theme={theme} onChangeLanguage={onChangeLanguage} />}
      />
      <Route
        path="/about"
        element={<About theme={theme} onChangeLanguage={onChangeLanguage} />}
      />
      <Route
        path="/experience"
        element={
          <Experience theme={theme} onChangeLanguage={onChangeLanguage} />
        }
      />
      <Route
        path="/project"
        element={<Project theme={theme} onChangeLanguage={onChangeLanguage} />}
      />
      <Route
        path="/contact"
        element={<Contact theme={theme} onChangeLanguage={onChangeLanguage} />}
      />
    </Routes>
  );
};
