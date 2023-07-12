import React from "react";

import { Card } from "antd";

import { ReactComponent as SignUpImage } from "../../../images/signUp.svg";

interface LayoutImageCardProps {
  screen: "signup" | "signin";
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
        cover={screen === "signup" ? <SignUpImage /> : undefined}
        bodyStyle={{
          display: "none"
        }}
      />
    </div>
  );
};
export default LayoutImageCard;
