import { Layout } from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { viewModal } from "store/reducers/transaction.reducer";

import { PrimaryButton } from "components/atoms";
import LoggedInUser from "components/molecules/LoggedInUser";
import SiderMenu from "components/molecules/Menu/SiderMenu";

import { ReactComponent as ExpenseTracker } from "../../../images/ExpenseTracker.svg";

const SideBar = () => {
  const { Sider } = Layout;
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  return (
    <Sider
      id="Sider"
      className=" px-6 flex gap-y-4 pt-8 border-r-2 border-lightBlue"
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
        <ExpenseTracker />
      </div>
      {/* logged user */}
      <div className="logged-user-vertical clear-both">
        <LoggedInUser />
      </div>
      {/* create transaction */}
      <div className="add-expense-button p-1 my-6">
        <PrimaryButton
          className=" w-full whitespace-pre-line h-auto"
          onClick={() => {
            dispatch(viewModal(true));
          }}
          buttonName={t("button.add-new")}
        />
      </div>
      {/* menu control */}
      <SiderMenu />
      {/* version */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          margin: "0.2rem"
        }}
        className="version-tag  text-grayDark"
      >
        v 1.0.0
      </div>
    </Sider>
  );
};

export default SideBar;
