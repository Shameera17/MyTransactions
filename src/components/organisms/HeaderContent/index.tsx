import { DatePicker, Typography } from "antd";
import { useLocation } from "react-router-dom";

import { PrimaryButton } from "components/atoms";

const HeaderContent = () => {
  const location = useLocation();

  const path = location.pathname.replace("/", "");
  const pathFormat = path.charAt(0).toUpperCase() + path.slice(1);

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
            onClick={function (): void {}}
            buttonName={"Add New"}
          />
        </div>
      )}
    </div>
  );
};
export default HeaderContent;
