import "../../css/NavBarStyle.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { navBarItems } from "./NavBarItems";

export const NavBar = (props) => {
  const { theme } = props;

  const [click, setClick] = useState(false);
  const [changeColor, setChangeColor] = useState(false);

  const handleClick = () => setClick(!click);
  const doChangeColor = () => {
    setChangeColor(window.scrollY >= 100);
  };

  window.addEventListener("scroll", doChangeColor);

  return (
    <div className={changeColor ? "header header-bg" : "header"}>
      <Link className="link" style={{ color: theme.text }} to="/">
        <h2>Peyronon Arno</h2>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {navBarItems.map((item) => {
          return (
            <li>
              <Link
                className="link"
                style={{ color: theme.text }}
                to={item.link}
              >
                <h2>{item.title}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={40} style={{ color: theme.text }} />
        ) : (
          <FaBars size={40} style={{ color: theme.text }} />
        )}
      </div>
    </div>
  );
};
