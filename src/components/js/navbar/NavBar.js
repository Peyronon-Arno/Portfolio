import "../../css/NavBarStyle.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { navBarItems } from "./NavBarItems";

export const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    setColor(window.scrollY >= 100);
  };

  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Peyronon Arno</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
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
        {click ? (
          <FaTimes size={40} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={40} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};
