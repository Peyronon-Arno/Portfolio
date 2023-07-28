import { useTranslation } from "react-i18next";
import "../css/PageHeaderStyle.css";

import React from "react";

export const PageHeader = (props) => {
  const { theme, heading, text } = props;
  const { t } = useTranslation();

  return (
    <div className="img">
      <div className="heading" style={{ color: theme.text }}>
        <h1>{t(heading)}</h1>
        <p>{t(text)}</p>
      </div>
    </div>
  );
};
