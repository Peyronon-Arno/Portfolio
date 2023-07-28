import "../../css/NavBarStyle.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { navBarItems } from "./NavBarItems";

import { useTranslation } from "react-i18next";

const languages = {
  fr: { nativeName: "French" },
  en: { nativeName: "English" },
};

export const NavBar = (props) => {
  const { t, i18n } = useTranslation();
  const { theme, onChangeLanguage } = props;

  const [hamburgerClick, setHamburgerClick] = useState(false);
  const [changeColor, setChangeColor] = useState(false);

  const handleClick = () => setHamburgerClick(!hamburgerClick);
  const doChangeColor = () => {
    setChangeColor(window.scrollY >= 100);
  };

  window.addEventListener("scroll", doChangeColor);

  return (
    <div className={changeColor ? "header header-bg" : "header"}>
      <Link className="link" style={{ color: theme.text }} to="/">
        <h2>{t("KEY_FULL_NAME")}</h2>
      </Link>
      <ul className={hamburgerClick ? "nav-menu active" : "nav-menu"}>
        {navBarItems.map((item) => {
          return (
            <li>
              <Link
                className="link"
                style={{ color: theme.text }}
                to={item.link}
              >
                <h2>{t(item.title)}</h2>
              </Link>
            </li>
          );
        })}
        <li>
          {Object.keys(languages).map((language) => {
            return (
              <button
                key={language}
                onClick={() => onChangeLanguage(language)}
                disabled={i18n.resolvedLanguage === language}
              >
                {languages[language].nativeName}
              </button>
            );
          })}
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {hamburgerClick ? (
          <FaTimes size={40} style={{ color: theme.text }} />
        ) : (
          <FaBars size={40} style={{ color: theme.text }} />
        )}
      </div>
    </div>
  );
};
