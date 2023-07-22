import { Link } from "react-router-dom";
import pdf from "../../../assets/cv.pdf";

export const AboutContact = () => {
  return (
    <div className="left-about">
      <div className="contact">
        <h3> Contact</h3>
        <p>
          Vous pouvez me contacter <span> </span>
          <Link to="/contact">
            <span className="clic-underline">ici </span>
          </Link>
        </p>
      </div>
      <div className="social-about">
        <h3> Réseaux Sociaux </h3>
        <div className="links">
          <a className="clic-underline" href="https://github.com/Peyronon-Arno">
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

      <div className="left-check-cv">
        <a className="btn btn-cv" href={pdf} target="blank">
          Consultez mon CV
        </a>
      </div>
    </div>
  );
};
