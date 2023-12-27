import React from "react";

import { Card } from "antd";

import { ReactComponent as IncomeImage } from "../../../../images/income.svg";
import { ReactComponent as SignInImage } from "../../../../images/login.svg";
import { ReactComponent as SignUpImage } from "../../../../images/signUp.svg";

interface LayoutImageCardProps {
  screen: "signup" | "signin" | "Home";
}
const LayoutImageCard: React.FC<LayoutImageCardProps> = ({ screen }) => {
  return (
    <div className="flex items-stretch justify-center ">
      <Card
        bordered={false}
        hoverable={false}
        style={{
          boxShadow: "none",
          display: "flex",
          alignItems: "center"
        }}
        cover={
          screen === "signup" ? (
            <SignUpImage />
          ) : screen === "Home" ? (
            <IncomeImage />
          ) : (
            <SignInImage />
          )
        }
        bodyStyle={{
          display: "none",
          height: 0
        }}
      />
    </div>
  );
};
export default LayoutImageCard;
