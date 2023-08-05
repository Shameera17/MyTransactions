import { DatePicker, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { PrimaryButton } from "components/atoms";
import { SelectLanguage } from "components/molecules";

const HeaderContent = () => {
  const location = useLocation();
  const path = location.pathname.replace("/app/", "");

  const { t } = useTranslation();

  return (
    <div className="flex justify-between align-middle ">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5
        }}
      >
        <Typography
          style={{
            fontWeight: 600,
            fontSize: "32px"
          }}
          className=" text-crayola   "
        >
          {path === "dashboard"
            ? t("dashboard.title", { ns: "glossary" })
            : path === "settings"
            ? t("settings.title", { ns: "glossary" })
            : ""}
        </Typography>
        <SelectLanguage />
      </div>

      {path === "dashboard" ? (
        <div>
          <DatePicker picker="month" format={"MMM-YYYY"} className=" mr-4" />
          <PrimaryButton
            onClick={function (): void {}}
            buttonName={t("button.add-new")}
          />
        </div>
      ) : path === "settings" ? (
        <div>
          {/* <PrimaryButton
            onClick={function (): void {}}
            buttonName={t("settings.save-changes", { ns: "glossary" })}
          /> */}
        </div>
      ) : undefined}
    </div>
  );
};
export default HeaderContent;
