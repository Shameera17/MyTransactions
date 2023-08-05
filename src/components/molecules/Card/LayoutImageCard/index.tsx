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
    <div className="flex items-stretch">
      <Card
        className="self-center"
        bordered={false}
        hoverable={false}
        style={{
          boxShadow: "none"
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
          display: "none"
        }}
      />
    </div>
  );
};
export default LayoutImageCard;
