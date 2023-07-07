import { useTranslation } from "react-i18next";

import "./App.css";
import Routes from "./routes";

function App() {
  const { t, i18n } = useTranslation(["common", "glossary", "validations"]);
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
