import { Link } from "react-router-dom";
import pdf from "../../../assets/cv.pdf";
import { useTranslation } from "react-i18next";

export const AboutContact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="left-about">
        <div className="contact">
          <h3> {t("KEY_CONTACT")} </h3>
          <p>
            {t("KEY_YOU_CAN_CONTACT_ME")}{" "}
            <Link to="/contact" className="clic-underline">
              {t("KEY_HERE")}
            </Link>
          </p>
        </div>
        <div className="social-about">
          <h3> {t("KEY_SOCIAL_NETWORKS")} </h3>
          <div className="links">
            <a
              className="clic-underline"
              href="https://github.com/Peyronon-Arno"
            >
              → Github
            </a>
            <a
              className="clic-underline"
              href="https://www.linkedin.com/in/arno-peyronon-012725197/"
            >
              → Linkedin
            </a>
          </div>
        </div>
        <div>
          <h3> {t("KEY_CHECK_CV")} </h3>
          <a
            className="btn-cv"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("KEY_LINK_CV")}
          </a>
        </div>
      </div>
    </div>
  );
};
