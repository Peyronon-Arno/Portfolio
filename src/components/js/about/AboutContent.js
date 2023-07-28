import { AboutContact } from "./AboutContact";
import { AboutHistory } from "./AboutHistory/AboutHistory";
import { useTranslation } from "react-i18next";

export const AboutContent = (props) => {
  const { theme } = props;
  const { t } = useTranslation();

  return (
    <div
      className="about-container"
      style={{ backgroundColor: theme.cardGrey }}
    >
      <h1 style={{ color: theme.text }}>{t("KEY_PASSIONATE")}</h1>
      <div className="about-me-container" style={{ color: theme.text }}>
        <hr style={{ color: theme.text }} />
        <AboutHistory />
        <hr style={{ color: theme.text }} />
        <AboutContact />
      </div>
    </div>
  );
};
