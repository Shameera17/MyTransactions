import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import { Text } from "components/atoms";
import LoginForm from "components/molecules/LoginForm";

function App() {
  const { t, i18n } = useTranslation(["common", "glossary", "validations"]);
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button className="h-5" onClick={() => changeLanguage("en")}>
          EN
        </button>

        <button onClick={() => changeLanguage("sin")}>Sinhala</button>
      </header>
    </div>
  );
}

export default App;
