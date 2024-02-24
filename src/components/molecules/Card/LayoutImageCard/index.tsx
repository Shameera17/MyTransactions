import { Card } from "antd";

import { ReactComponent as IncomeImage } from "../../../../images/income.svg";
import { ReactComponent as SignInImage } from "../../../../images/login.svg";
import { ReactComponent as SignUpImage } from "../../../../images/signUp.svg";

interface LayoutImageCardProps {
  screen: "signup" | "signin" | "Home";
  size?: "small" | "large";
}
const LayoutImageCard = ({ screen, size }: LayoutImageCardProps) => {
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
            <SignUpImage height={"300px"} />
          ) : screen === "Home" ? (
            <IncomeImage />
          ) : (
            <SignInImage height={size === "small" ? "200px" : "100%"} />
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
