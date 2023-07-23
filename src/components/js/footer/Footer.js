import React from "react";
import "../../css/FooterStyles.css";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

export const Footer = (props) => {
  const { theme } = props;
  return (
    <div
      className="footer"
      style={{ color: theme.text, backgroundColor: theme.cardGrey }}
    >
      <div className="footer-container">
        <div className="contact-info">
          <h4>
            <FaPhone className="contact-info-icon" size={20} />
            07 87 23 06 11
          </h4>
        </div>
        <div className="contact-info">
          <h4>
            <FaMailBulk className="contact-info-icon" size={20} />
            arno.peyronon@gmail.com
          </h4>
        </div>

        <div className="social">
          <a href="https://www.facebook.com/profile.php?id=100006026686976">
            <FaFacebook color={theme.text} size={40} />
          </a>
          <a href="https://www.linkedin.com/in/arno-peyronon-012725197/">
            <FaLinkedin color={theme.text} size={40} />
          </a>
          <a href="https://github.com/Peyronon-Arno">
            <FaGithub color={theme.text} size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};
