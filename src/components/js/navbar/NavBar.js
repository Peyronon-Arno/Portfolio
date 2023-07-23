import "../../css/NavBarStyle.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { navBarItems } from "./NavBarItems";

export const NavBar = (props) => {
  const { theme } = props;

  const [hamburgerClick, setHamburgerClick] = useState(false);
  const [changeColor, setChangeColor] = useState(false);

  const handleClick = () => setHamburgerClick(!hamburgerClick);
  const doChangeColor = () => {
    setChangeColor(window.scrollY >= 100);
  };

  window.addEventListener("scroll", changeColor);
  return (
    <div className={changeColor ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Peyronon Arno</h1>
      </Link>
      <ul className={hamburgerClick ? "nav-menu active" : "nav-menu"}>
        {navBarItems.map((item) => {
          return (
            <li>
              <Link to={item.link}>
                <h1>{item.title}</h1>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {hamburgerClick ? (
          <FaTimes size={40} style={{ color: theme.text }} />
        ) : (
          <FaBars size={40} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};
