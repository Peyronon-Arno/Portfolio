import { useTranslation } from "react-i18next";
import { aboutHistoryData } from "./AboutHistoryData";

export const AboutHistory = () => {
  const { t } = useTranslation();

  return (
    <div className="right-about">
      {aboutHistoryData.map((content) => {
        return <p>{t(content.key)}</p>;
      })}
    </div>
  );
};
