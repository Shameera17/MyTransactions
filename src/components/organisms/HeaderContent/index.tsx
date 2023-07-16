import { DatePicker, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { PrimaryButton } from "components/atoms";

const HeaderContent = () => {
  const location = useLocation();
  const path = location.pathname.replace("/app/", "");
  const pathFormat = path.charAt(0).toUpperCase() + path.slice(1);

  const { t } = useTranslation();

  return (
    <div className="flex justify-between align-middle">
      <Typography
        style={{
          fontWeight: 600,
          fontSize: "32px"
        }}
        className=" text-crayola  "
      >
        {pathFormat}
      </Typography>
      {path === "dashboard" && (
        <div>
          <DatePicker picker="month" format={"MMM-YYYY"} className=" mr-4" />
          <PrimaryButton
            width="120px"
            onClick={function (): void {}}
            buttonName={t("button.add-new")}
          />
        </div>
      )}
    </div>
  );
};
export default HeaderContent;
