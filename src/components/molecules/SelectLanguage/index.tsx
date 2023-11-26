import { Button, Dropdown, MenuProps } from "antd";
import { useTranslation } from "react-i18next";

const SelectLanguage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => changeLanguage("en")}
        >
          English (EN)
        </a>
      )
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => changeLanguage("si")}
        >
          සිංහල (SI)
        </a>
      )
    }
  ];
  return (
    <Dropdown
      menu={{ items }}
      placement="bottom"
      arrow={{ pointAtCenter: true }}
    >
      <Button type="primary" ghost>
        {i18n.language.toUpperCase()}
      </Button>
    </Dropdown>
  );
};

export default SelectLanguage;
