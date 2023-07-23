import { AboutContact } from "./AboutContact";
import { AboutHistory } from "./AboutHistory";

export const AboutContent = (props) => {
  const { theme } = props;
  return (
    <div
      className="about-container"
      style={{ backgroundColor: theme.cardGrey }}
    >
      <h1 style={{ color: theme.text }}>
        Passionné d'informatique depuis mon enfance, je m'intéresse à différents
        domaines divers et variés
      </h1>
      <div className="about-me-container" style={{ color: theme.text }}>
        <hr style={{ color: theme.text }} />
        <AboutHistory />
        <hr style={{ color: theme.text }} />
        <AboutContact />
      </div>
    </div>
  );
};
