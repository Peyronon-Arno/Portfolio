import { Link } from "react-router-dom";
import pdf from "../../../assets/cv.pdf";

export const AboutContact = () => {
  return (
    <div>
      <div className="left-about">
        <div className="contact">
          <h3>Contact</h3>
          <p>
            Vous pouvez me contacter{" "}
            <Link to="/contact" className="clic-underline">
              ici
            </Link>
          </p>
        </div>
        <div className="social-about">
          <h3>Réseaux Sociaux</h3>
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
          <h3>Consultez mon CV</h3>
          <a
            className="btn-cv"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            Lien de mon CV
          </a>
        </div>
      </div>
    </div>
  );
};
