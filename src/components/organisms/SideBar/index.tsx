import { Layout } from "antd";
import { useTranslation } from "react-i18next";

import { PrimaryButton } from "components/atoms";
import SiderMenu from "components/molecules/Menu/SiderMenu";

const SideBar = () => {
  const { Sider } = Layout;
  const { t } = useTranslation("common");
  return (
    <Sider
      id="Sider"
      className=" px-6 pt-5 border-r-2 border-lightBlue"
      style={{
        overflow: "auto",
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "white"
      }}
    >
      {/* logo */}
      <div className="demo-logo-vertical p-1 ">
        <span className=" text-crayola font-medium">Expense</span>
        <span className="font-medium ">Tracker</span>
      </div>
      {/* logged user */}
      <div className="logged-user-vertical" />
      {/* create transaction */}
      <div className="add-expense-button p-1 my-6">
        <PrimaryButton
          className=" w-full "
          onClick={function (): void {}}
          buttonName={t("button.add-new")}
        />
      </div>
      {/* menu control */}
      <SiderMenu />
      {/* version */}
      <div className="version-tag flex justify-center  align-bottom text-grayDark">
        v 1.0.0
      </div>
    </Sider>
  );
};

export default SideBar;
