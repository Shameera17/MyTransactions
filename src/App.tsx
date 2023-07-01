import React from "react";

import { useTranslation } from "react-i18next";

import "./App.css";
import { Text } from "./components/atoms";
import Routes from "./routes";

function App() {
  const { t, i18n } = useTranslation(["common", "glossary", "validations"]);
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
