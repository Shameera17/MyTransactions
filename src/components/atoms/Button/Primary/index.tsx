import React from "react";

import { Button } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";

interface PrimaryButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  buttonName: string;
  className?: string;
  size?: SizeType;
  width?: string;
  height?: string;
  ghost?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  disabled = false,
  buttonName,
  className,
  size,
  width,
  height,
  ghost
}) => {
  return (
    <Button
      size={size}
      type="primary"
      ghost={ghost}
      className={` bg-crayola text-white ${className} whitespace-pre-line `}
      onClick={onClick}
      disabled={disabled}
      style={{
        width: width,
        height: height
      }}
    >
      <span className="break-normal">{buttonName}</span>
    </Button>
  );
};

export default PrimaryButton;
