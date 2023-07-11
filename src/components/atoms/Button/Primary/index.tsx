import React from "react";

import { Button } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";

interface PrimaryButtonProps {
  onClick: () => void;
  disabled?: boolean;
  buttonName: string;
  className?: string;
  size?: SizeType;
  width?: string;
  height?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  disabled = false,
  buttonName,
  className,
  size,
  width,
  height
}) => {
  return (
    <Button
      size={size}
      type="primary"
      className={` bg-crayola text-white ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={{
        width: width ?? "100%",
        height: height
      }}
    >
      {buttonName}
    </Button>
  );
};

export default PrimaryButton;
