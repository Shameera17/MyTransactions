import React from "react";

import { ReactComponent as IncomeImage } from "../../../../images/income.svg";
import { ReactComponent as SignInImage } from "../../../../images/login.svg";
import { ReactComponent as SignUpImage } from "../../../../images/signUp.svg";

interface LayoutImageCardProps {
  screen: "signup" | "signin" | "Home";
}
const LayoutImageCard: React.FC<LayoutImageCardProps> = ({ screen }) => {
  return (
    <div className="flex items-stretch justify-center ">
      {screen === "signup" ? (
        <SignUpImage />
      ) : screen === "Home" ? (
        <IncomeImage />
      ) : (
        <SignInImage />
      )}
    </div>
  );
};
export default LayoutImageCard;
